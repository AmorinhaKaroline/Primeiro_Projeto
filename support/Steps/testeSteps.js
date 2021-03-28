/* global Given, Then, When, And*/

import testePage from '../pageobjects/testePage'
const Pagina = new testePage


Given("que eu acesse o site autometion",() =>{
    Pagina.abrirUrl();
})

When("preencher o campo nome completo",() =>{
    Pagina.preencherNome();
  


})

And ("clico no botão atualizar",() =>{
    Pagina.clicarbotaorefresh();
})

Then ("verifico a tela atualizada",() => {
    Pagina.validarTelaLimpa();
})



