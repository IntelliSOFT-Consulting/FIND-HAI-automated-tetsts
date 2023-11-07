import '../support/commands'
import { faker } from '@faker-js/faker'; 
const firstName = faker.name.firstName(); 
const middleName = faker.name.middleName(); 
const familyName = faker.name.lastName(); 
const emailAddress = familyName.toLowerCase() + firstName.toLowerCase()
 describe("Acccess the homepage menu of the platform",()=>{
   beforeEach(()=>{
    cy.baseurl() 
   
  })

  it.only("test1 - tests LOgin page and accessing the  Data entry tool",()=>{
    //cy.login();
    cy.get('#j_username').type('admin').should("have.value","admin")
    cy.get('#j_password').type('district').should("have.value","district")
      
          cy.once("fail", (err) =>
      {
          return false;
      });
    cy.get('#submit').click()
    cy.get('[data-test="headerbar-apps-icon"]').click()
    cy.contains("FIND HAI").click().wait(12000)
    cy.contains('SURGERIES').click()
       }) 
   
    })
