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

  it("test1 - tests accessing surgeries",()=>{
    //cy.login();
    cy.get('#j_username').type('admin').should("have.value","admin")
    cy.get('#j_password').type('district').should("have.value","district")
      
          cy.once("fail", (err) =>
      {
          return false;
      });
    cy.get('#submit').click()
    cy.get('[data-test="headerbar-apps-icon"]').click()
    cy.contains("FIND HAI").click()//.wait(12000)
    cy.contains('SURGERIES').click()
       }) 

  it.only("test2 - tests registration of a new surgery currently",()=>{
        //cy.login();
        cy.get('#j_username').type('admin').should("have.value","admin")
        cy.get('#j_password').type('district').should("have.value","district")
          
              cy.once("fail", (err) =>
          {
              return false;
          });
        cy.get('#submit').click()
        cy.get('[data-test="headerbar-apps-icon"]').click()
        cy.contains("FIND HAI").click().wait(8000)
        cy.contains('SURGERIES').click()
        cy.contains("Register new surgery").click()
        //cy.get('#LXSQGQvSQGf').click().get('.ant-select-item ant-select-item-option ant-select-item-option-active').contains("Elective").click()
        cy.get(':nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').dblclick().focused().type('Elective{enter}')
        
        const PatID = () => Cypress._.random(0, 1e6);
        const patclinicNo=PatID();
        cy.get('#US1gCMCXtGq').type(`PAT-${patclinicNo}`,'{enter}')
        cy.get('#M9DBAh9Lnpw').type(firstName)
        cy.get('#GhX9ASUscsM').type(middleName)
        cy.get('#cNBoqe3kM9F').type(familyName)

        cy.get('#O9xFVVDAqsL').click().dblclick().focused().type('Female{enter}')//.select("Female")
        cy.get('#Y4bglcLiAGx').click().focused().get('.ant-picker-year-btn').dblclick().get('tbody > :nth-child(1) > :nth-child(1)').click().get('[title="1992"]').click().get('[title="1992-08"]').click().get('[title="1992-08-03"]').click()
        cy.get('#dtgA3a71Htu').click().focused().get(':nth-child(7) > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel-layout > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-header > .ant-picker-header-view > .ant-picker-year-btn').click().get('[title="2023"]').click().get(':nth-child(7) > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel-layout > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-header > .ant-picker-header-prev-btn').click().get('[title="2023-10-12"]').click()
        cy.get('#Ogx5pUkCK7Y').click().focused().get(':nth-child(8) > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel-layout > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-header > .ant-picker-header-prev-btn').click().get(':nth-child(8) > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel-layout > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-body > .ant-picker-content > tbody > :nth-child(3) > [title="2023-10-19"]').click()
        cy.get('#u2mZ7WXhjHt').click().dblclick().focused().type('Hip replacement')
      //  cy.get('#gabeOfZprya').click().focused().get(':nth-child(8) > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel-layout > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-header > .ant-picker-header-prev-btn').click().get('.ant-picker-year-btn').click().get('tbody > :nth-child(1) > :nth-child(1)').click().get('[title="2023"]').click().get('[title="2023-11"]').click().get('[title="2023-11-03"]').click()
        cy.get('#JwuMPx8ZPLD').click().dblclick().focused().type('Orthopedic ward{enter}')
        cy.get('.ant-btn').click()

           }) 
   
    })
