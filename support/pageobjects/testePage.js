/// <reference types= "Cypress"/>


import testeElementos from  '../ElementosPage/testeElementos'
const Elementos = new testeElementos

const NavegadorURL = Cypress.config("baseUrl")

class TestePage{
    
    abrirUrl(){
        cy.visit(NavegadorURL)

 
    }

    preencherNome(){
        cy.get(Elementos.CampoPrimeiroNome ()).type('Amora Karoline')


    }
    
    clicarbotaorefresh(){
        cy.get(Elementos.botaorefresh()).click ()
    

    }
    

    validarTelaLimpa(){
        cy.screenshot()

    }





}
export default TestePage;
