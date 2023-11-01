Cypress.Commands.add("baseurl",()=>{
    cy.visit("https://findhai.intellisoftkenya.com/dhis-web-commons/security/login.action")
})

Cypress.Commands.add('login',()=>{
        cy.get('#j_username').type('admin').should("have.value","admin")
        cy.get('#j_password').type('Admin123').should("have.value","Admin123")
 })
 
 Cypress.on('uncaught:exception', (err, runnable) => {

  return false
})