
import { Cadastro } from './elements';

class BugerEats{
    
    acessarPagina(){
        cy.visit('https://buger-eats.vercel.app/');
    }

    clickBotao(){
        cy.get('a[href="/deliver"]').click();
    }

    preencherDados(){
        cy.get(Cadastro.input_name).type('Kathelen QA');
        cy.get(Cadastro.input_email).type('teste@qa.com');
    }

    cpfValido(){
        cy.get(Cadastro.input_cpf).type('38547122001');
    }

    cpfInvalido(){
        cy.get(Cadastro.input_cpf).type('823hyhu860-84');
    }

    telefoneValido(){
        cy.get(Cadastro.input_whatsapp).type(Cadastro.input_numero_valido);
    }
    telefoneMaior(){
        cy.get(Cadastro.input_whatsapp).type(Cadastro.input_numero_maior);
    }

    telefoneCaracteresEspeciais(){
        cy.get(Cadastro.input_whatsapp).type(Cadastro.input_numero_caractere);   
        cy.get(Cadastro.input_whatsapp).clear();
        cy.get(Cadastro.input_whatsapp).type(Cadastro.input_numero_valido);
    }
    
    toastErro(){
        cy.get('.alert-error').should('have.text',Cadastro.input_cpf_invalido);
    }
    
    toastWhatsappCaractere(){
        cy.get(':nth-child(3) > :nth-child(2) > input').should('have.text',Cadastro.input_numero_caractere);
    }
  
    preencherEndereco(){
        cy.get(Cadastro.input_postalcode).type('81750000');
        cy.get(Cadastro.input_button).click();
        cy.get(Cadastro.input_number).type('152');
        cy.get(Cadastro.input_details).type('AP 50');
    }

    metodoEntrega(){
        cy.get(Cadastro.input_entrega).click(); 
    }

    fotoCNH(){
        cy.get(Cadastro.input_imagem).selectFile('cypress/support/pages/fixtures/img/cnh-qa.jpg', { force: true })
        cy.get(Cadastro.input_buttonfinalizar).click();
    }
        
    //assert Toast de email enviado
    toast(){
        cy.get(Cadastro.input_toast).click(); 
    }
}
export default new BugerEats();