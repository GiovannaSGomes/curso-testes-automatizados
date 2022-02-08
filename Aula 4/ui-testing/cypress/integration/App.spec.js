/// <reference types="cypress"/>
import field from '../support/field'

describe('App Developers Skills', () => {

    beforeEach(() => {
        cy.openSite();
    });

    it('should load skills list as the button is clicked', () => {
        cy.get(field.BOTTON.addSkills).click();
        cy.get('li').should('be.visible');
        cy.get('ul').should('be.visible');
    });
    it('should load one skill after input and click search button', () => {
        cy.get(field.TEXT.skillNameText).type('front-end');
        cy.get(field.BOTTON.addSkills).click();
        cy.get('li').should('be.visible');
        cy.contains('Skill Name: front-end');
    });
    it('checar se o nome esta correto do campo', () => {
        cy.get(field.TITLE.developersApp).should('have.text','Developers App')
    });

    it('preencher o campo skill name', () => {
        cy.get(field.TITLE.skillName).should('have.text','Skill Name');
        cy.get(field.TITLE.developers).type('test');       
        cy.get(field.TITLE.developers).should('have.value','test');            
    });

    it('preencher o campo Developers', () => {
        cy.get(field.TITLE.developers).should('have.text','Developers')
        cy.get(field.TEXT.developersText).type('test')
        cy.get(field.TEXT.developersText).should('have.value','test')
    })

    it('preencher o campo Technologies', () => {
        cy.get(field.TITLE.technologies).should('have.text','Technologies')
        cy.get(field.TEXT.technologiesText).type('test')       
        cy.get(field.TEXT.technologiesText).should('have.value','test')            
    })

    it('preencher o campo Roles', () => {
        cy.get(field.TITLE.roles).should('have.text','Roles')
        cy.get(field.TEXT.rolesText).type('test')       
        cy.get(field.TEXT.rolesText).should('have.value','test')            
    })

    it('Verify if the field are filled',()=>{
        cy.fillingFields()
    })

    it('Verify the add Skills button',()=>{
        cy.get(field.BOTTON.addSkills).should('be.visible')
        cy.get(field.BOTTON.addSkills).should('have.text','Add Skills')
        cy.get(field.BOTTON.addSkills).click()
    })

});