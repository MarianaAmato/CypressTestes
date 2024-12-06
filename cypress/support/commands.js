Cypress.Commands.add('login', (email, password) => {
//cy.session([email,password], () =>{
    cy.get('#text-input-E-mail').type(email)
    cy.get('#text-input-Senha').type(password)
    cy.get('.MuiButton-root').click()
//})

})
Cypress.Commands.add('cadastrarEmpresa', (CNPJ, razaoSocial) =>{
    cy.contains('CNPJ/CPF').type(CNPJ)
    cy.contains('Razão social*').type(razaoSocial)
    // cy.contains('cadastrar empresa').click()
    // cy.contains('concluir').click()
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })