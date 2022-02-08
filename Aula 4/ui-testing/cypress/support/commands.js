import field from '../support/field'
Cypress.Commands.add('clickButton',(label) => {
    cy.get('a').contains(label).click();
});

Cypress.Commands.add('openSite', () => {
    cy.visit('http://localhost:3000/');
})



Cypress.Commands.add('fillingFields', () => {
    const text = [
        field.TEXT.skillNameText,
        field.TEXT.developersText,
        field.TEXT.technologiesText,
        field.TEXT.rolesText
    ]
    text.forEach(text => {
        cy.get(text)
        .type('test')
        .should('have.value', 'test')
    });
    
})