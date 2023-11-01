import '../support/commands'
import { faker } from '@faker-js/faker'; 
const firstName = faker.name.firstName(); 
const middleName = faker.name.middleName(); 
const familyName = faker.name.lastName(); 
const emailAddress = familyName.toLowerCase() + firstName.toLowerCase()
 describe("Acccess the homepage menu of the platform",()=>{ beforeEach(()=>{
   cy.baseurl() 
   cy.login()
    // cy.contains("Login").click() //cy.contains("Home").click() 
  })
   it.only("test1 - tests correct credentials for password and username of the login page",()=>{
     cy.get('#j_username').type('admin').should("have.value","admin")
     cy.get('#j_password').type('Admi123').should("have.value","district") 
     cy.contains('Sign in').click()
     }) 
  it.only("test2 - tests wrong  credentials input for username and correct creds for password functionality of the login page",()=>{ 
    cy.get('#j_username').type('admin12').should("have.value","admin")
    cy.get('#j_password').type('Admin123').should("have.value","district")
    cy.contains('Sign in').click()
   })
  it.only("test3 - tests wrong  credentials for password and correct creds for username functionality of the login page",()=>{ 
    cy.get('#j_username').type('admin').should("have.value","admin")
    cy.get('#j_password').type('Admin12345').should("have.value","district") 
    cy.contains('Sign in').click() 
  })
  it.only("test4 - tests wrong  credentials functionality for both username and password on the login page",()=>{ 
      cy.get('#j_username').type('admin12').should("have.value","admin") 
      cy.get('#j_password').type('Admin123345').should("have.value","district") 
      cy.contains('Sign in').click() 
    })
 it.only("test5 - tests no credentials  input  for username of the login page",()=>{
     cy.get('#j_username').type('').should("have.value","admin")
     cy.get('#j_password').type('Admin123').should("have.value","district")
     cy.contains('Sign in').click() 
    }) 
  it.only("test7 - tests correct credentials  for username and no input for password on the login page",()=>{ 
     cy.get('#j_username').type('admin').should("have.value","admin") 
     cy.get('#j_password').type('').should("have.value","district") 
     cy.contains('Sign in').click()
     }) 
  it.only("test8 - tests no  credentials input functionality of the login page",()=>{ 
      cy.get('#j_username').type('').should("have.value","admin") 
      cy.get('#j_password').type('').should("have.value","district") 
      cy.contains('Sign in').click() 
    })
   })