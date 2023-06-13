import React, {useEffect, useState} from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Step, StepLabel, Stepper, Typography } from "@mui/material";


function FormularioCadastro({aoEnviar}) {
const [etapaAtual, setEtapaAtual] = useState(0);
const [dadosColetados, setDados] = useState({});

useEffect(() => {
    if(etapaAtual === formularios.length - 1){
    aoEnviar(dadosColetados);
}
 });

const formularios= [
    <DadosUsuario aoEnviar={coletarDados}/>,
    <DadosPessoais aoEnviar={coletarDados}/>,
    <DadosEntrega aoEnviar={coletarDados}/>,
    <Typography variant="h5"> Obrigado pelo Cadastro</Typography>
];

function coletarDados(dados){
 setDados({...dadosColetados, ...dados});
 proximo();
}

function proximo(){
    setEtapaAtual(etapaAtual + 1);
}

// function formularioAtual(etapa){
    // switch(etapa){
    //     case 0:
    //         return <DadosUsuario aoEnviar={proximo}/>
    //         case 1:
    //             return <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF}/>
    //             case 2:
    //                 return<DadosEntrega aoEnviar={aoEnviar}/>
    //                 default:
    //                     return <Typography>Erro ao selecionar formulário</Typography>
    // }
// }

return(
 <> 
 <Stepper activeStep={etapaAtual}>
    <Step>
        <StepLabel>Login</StepLabel>
        </Step>
    <Step>
        <StepLabel>Pessoal</StepLabel>
        </Step>
    <Step>
        <StepLabel>Endereço</StepLabel>
        </Step>
    <Step>
        <StepLabel>Finalização</StepLabel>
        </Step>
 </Stepper>
{formularios[etapaAtual] }
{/* {formularioAtual(etapaAtual) } */}

 </>
 );
}


// <DadosEntrega/>
// <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
export default FormularioCadastro;