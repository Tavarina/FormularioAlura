import React, {useState} from "react";
import  {TextField, Button, Switch, FormControlLabel}  from "@mui/material";


function FormularioCadastro({aoEnviar, validarCPF}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}})
    // let nome ="";
    // state={};

 return(
 <form 
 onSubmit={(event) => {
 event.preventDefault();
 aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
   }}>
    <TextField 
    value={nome}
    onChange={event => {
    setNome(event.target.value);
        // let tmpNome= event.target.value;
        // if(tmpNome.length >=3){
        //     tmpNome(tmpNome.substring(0,3));
    // onChange={event => {
    //     setNome(event.target.value);
    //     if(nome.length >=3){
    //         setNome(nome.substring(0,3));}}
    }
        // setNome(tmpNome);}
}
    id="nome" 
    label="Nome" 
    variant="outlined"
    margin="normal"
    fullWidth
    />
    <TextField 
    value={sobrenome}
    onChange={event => {
    setSobrenome(event.target.value);
    }}
    id="sobrenome" 
    label="Sobrenome" 
    variant="outlined"
    margin="normal"
    fullWidth
    />
    <TextField 
    value={cpf}
    onChange={(event) => {
    setCpf(event.target.value);
    }}
    onBlur={(event) =>{
        const ehValido = validarCPF(cpf);
    setErros({cpf:ehValido})
    // setErros({cpf:{valido:false, texto: "CPF deve ter 11 digitos"}})
    }}
    error={!erros.cpf.valido}
    helperText={erros.cpf.texto}
    // helperText="CPF tem que ter 11 digitos"  //frase de erro quando digitar menos numeros que o permitido
    id="cpf"
    label="CPF" 
    variant="outlined"
    margin="normal"
    fullWidth
    />
    
    <FormControlLabel 
    label="Promoções" 
    control={
    <Switch
    checked={promocoes}
    onChange={(event) =>{
    setPromocoes(event.target.checked)
    }}
    name="promocoes" 
    // defaultChecked={promocoes}
    color="primary"
    /> } />
    <FormControlLabel
    label="Novidades"
    control={
    <Switch
    checked={novidades}
    onChange={(event) => {
    setNovidades(event.target.checked)
    }}
    name="novidades" 
    // defaultChecked={novidades}
    color="primary"
    />}/>

    <Button 
    variant="contained"
    color="primary"
    type="submit">
        Cadastrar
    </Button>
    </form>
    );
}
export default FormularioCadastro;