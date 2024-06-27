Cypress.Commands.add("baseurl",()=>{
    cy.visit("https://findhai.intellisoftkenya.com/dhis-web-commons/security/login.action")
})

Cypress.Commands.add('login',()=>{
        cy.get('#j_username').type('admin')
        cy.get('#j_password').type('district')
        cy.get('#submit').click()
 })
 
 Cypress.on('uncaught:exception', (err, runnable) => {

  return false
})