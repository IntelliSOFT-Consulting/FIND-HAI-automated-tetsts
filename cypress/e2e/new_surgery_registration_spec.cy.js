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
        cy.get(':nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').focus().click("Elective")
        
        const PatID = () => Cypress._.random(0, 1e6);
        const patclinicNo=PatID();
        cy.get('#US1gCMCXtGq').type(`PAT-${patclinicNo}`,'{enter}')
        cy.get('#M9DBAh9Lnpw').type(firstName)
        cy.get('#GhX9ASUscsM').type(middleName)
        cy.get('#cNBoqe3kM9F').type(familyName)

        cy.get('#O9xFVVDAqsL').click().focus()//.select("Female")
        cy.get('#Y4bglcLiAGx').click().focus()//.get('.ant-picker-year-btn').click().click().click().select(1992)
        cy.get('#dtgA3a71Htu').click().focus()
        cy.get('#Ogx5pUkCK7Y').click().focus()
        cy.get('#u2mZ7WXhjHt').click().focus()
        cy.get('#gabeOfZprya').click().focus()
        cy.get('#JwuMPx8ZPLD').click().focus()
        // cy.get('select[class="ui-datepicker-month"]').select("Apr")
        // cy.get("select[class='ui-datepicker-year']").select("2000")
        // cy.get('table[class="ui-datepicker-calendar"]').find('td').eq(27).click()
           }) 
   
    })
