///<reference types="cypress" />

import home from '../support/pages/home';

it.only('Cenario sucesso', () =>{
    home.acessarPagina();
    home.clickBotao();    
    home.preencherDados();
    home.telefoneValido();
    home.cpfValido();
    home.preencherEndereco();
    home.metodoEntrega();
    home.fotoCNH();
    home.toast();
});

it.only('Cenario Erro', () =>{
    home.acessarPagina();
    home.clickBotao();    
    home.preencherDados();
    home.telefoneValido();
    home.cpfInvalido();
    home.preencherEndereco();
    home.metodoEntrega();
    home.fotoCNH();
    home.toastErro();
});

it.only('Telefone Maior', () =>{
    home.acessarPagina();
    home.clickBotao();   
    home.preencherDados();
    home.cpfValido();
    home.telefoneCaracteresEspeciais();
    home.preencherEndereco();
    home.metodoEntrega();
    home.fotoCNH();
});











