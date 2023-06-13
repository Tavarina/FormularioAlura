import React, { Component } from 'react';
import './App.css'; 
import FormularioCadastro from './Components/FormularioCadastro/FormularioCadastro';
import 'fontsource-roboto';

import { Container, Typography } from '@mui/material';
import { validarCPF, validarSenha } from './models/cadastro';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

class App extends Component {
  render(){
  return (
    <Container 
    component="article" 
    maxWidth="sm">
    <Typography 
    variant='h3'
    component='h1'
    align='center'
    >Formulário de cadastro
    </Typography>
    <ValidacoesCadastro.Provider value={{cpf: validarCPF, senha: validarSenha, nome: validarSenha}}
    >
    <FormularioCadastro
    aoEnviar={aoEnviarForm}/>
    </ValidacoesCadastro.Provider>
    </Container>
  );
}
}
function aoEnviarForm(dados){
  console.log(dados);
}
// function validarCPF(cpf){
//   if(cpf.length !== 11){
//     return{valido:false, texto:"CPF deve ter 11 digitos."}
// }else {
//   return{valido:true, texto:""}
//   }
// }
export default App;
