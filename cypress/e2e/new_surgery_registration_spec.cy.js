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
        //cy.get(':nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').dblclick().focused().type('Elective{enter}')
        
        const PatID = () => Cypress._.random(0, 1e6);
        const patclinicNo=PatID();
        cy.get('#US1gCMCXtGq').type(`PAT-${patclinicNo}`,'{enter}')
        cy.get('#M9DBAh9Lnpw').type(firstName)
        cy.get('#GhX9ASUscsM').type(middleName)
        cy.get('#cNBoqe3kM9F').type(familyName)

        cy.get('#O9xFVVDAqsL').click().dblclick().focused().get('[title="Male"] > .ant-select-item-option-content').click()//.get('Female{enter}').clcik
        cy.get('#Y4bglcLiAGx').click().focused().get('.ant-picker-year-btn').dblclick().get('tbody > :nth-child(1) > :nth-child(1)').click().get('[title="1999"]').click().get('[title="1999-10"]').click().get('[title="1999-10-20"]').click()//.get('.ant-picker-cell-selected').click().get('[title="2020"]').click().get('[title="2020-08"]').click().get('[title="2020-08-23"]').click()
        cy.get('#dtgA3a71Htu').dblclick().focused().get(':nth-child(6) > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel-layout > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-header > .ant-picker-header-prev-btn').click().get('[title="2023-10-21"]').click()
        cy.get('#Ogx5pUkCK7Y').click().focused().get(':nth-child(7) > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel-layout > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-header > .ant-picker-header-prev-btn').click().get(':nth-child(7) > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel-layout > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-body > .ant-picker-content > tbody > :nth-child(4) > [title="2023-10-25"]').click()
        cy.get('#u2mZ7WXhjHt').click().dblclick().focused().type('Joint fusion surgery{enter}')//ORIF{enter}')
        cy.get('#LXSQGQvSQGf').click().focused().type('Elective{enter}')
      //  cy.get('#gabeOfZprya').click().focused().get(':nth-child(8) > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel-layout > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-header > .ant-picker-header-prev-btn').click().get('.ant-picker-year-btn').click().get('tbody > :nth-child(1) > :nth-child(1)').click().get('[title="2023"]').click().get('[title="2023-11"]').click().get('[title="2023-11-03"]').click()
        cy.get('#JwuMPx8ZPLD').click().dblclick().focused().type('Orthopedic ward{enter}')
        //cy.get(':nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').dblclick().focused().type('Elective{enter}')
        cy.get('.ant-btn').click().wait(500)
        cy.get(':nth-child(7) > .section-0-2-18 > .title-0-2-19 > :nth-child(1) > .header-0-2-24 > div > .ant-btn').click()
        cy.get(':nth-child(7) > .section-0-2-18 > .title-0-2-19 > :nth-child(1) > .header-0-2-24 > div > .ant-btn').dblclick().wait(8000)//.focused().get('#GwyYVvRrUNZ_0_HmKL3kmI0nA').type('Diabetes{enter}').get(':nth-child(1) > .form-0-2-46 > .submit-0-2-52 > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > :nth-child(2)').dblclick().focused().get('#GwyYVvRrUNZ_1_HmKL3kmI0nA').type('Hypertension{enter}')
        cy.get('#gSLwOiqPEZV > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        cy.get('#QZ5OuqX5bOD').type('70ml')
        cy.get('#XR6fQIfS2PN').type('Insulin')
        cy.get('#APa12HlIW93 > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        cy.get('#R702RDI0tN4 > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        cy.get('#pNJpQOp13TO').click().focused().type('Clippers{enter}')
        cy.get('#B5DNAjWwqPR').click().focused().get('.ant-picker-header-prev-btn').click().get('[title="2023-10-21"]').click()
        cy.get('#x6694BaUWAf > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        cy.get('#HPXcpqKqO2l > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        cy.get('#NmF0oDbjTyN > :nth-child(2) > .ant-radio > .ant-radio-input').check()
        cy.get('#EIIPKnALf0H > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        cy.get('#L14g5KntcbA > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        cy.get('#izLgahalz9Q').click().focused().type('Skin graft{enter}')
        cy.get('#gydMsXA6Ia0 > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        cy.get('#WgtOPrLLQh1').type('skin{enter}')
        cy.get('#ai7zInO9MSH > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        cy.get('#FUMk5Tm7Nqd > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        cy.get(':nth-child(6) > .form-0-2-46 > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-search > #HmKL3kmI0nA').click().focused().type('Hypertension{enter}')
        cy.get(':nth-child(11) > .form-0-2-46 > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-search > #n78ALDPo3ym').click().focused().get('[title=">2 min - 3 min"] > .ant-select-item-option-content').click()
        //cy.get(':nth-child(12) > .form-0-2-46 > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-search > #n78ALDPo3ym').click().focused().type('')
        cy.get(':nth-child(16) > .form-0-2-46 > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-search > #TMfPGD5aJHQ').click().focused().type('Cefazolin')
        cy.get(':nth-child(17) > .form-0-2-46 > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-search > #TMfPGD5aJHQ').click().type('Cefazolin{enter}')
        cy.get(':nth-child(21) > .form-0-2-46 > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-search > #OEvr8vNqbQg').type('Prophylaxis{enter}')
        cy.get('.submitButton-0-2-47').click()

        cy.get(':nth-child(8) > .section-0-2-18 > .title-0-2-19 > :nth-child(1) > .header-0-2-24 > div > .ant-btn').click()
        cy.get('#VJe5oPR17wE').click().focused().get('.ant-picker-header-prev-btn').click().get('[title="2023-10-24"]').click()
        cy.get('#fkxHVloTLwR > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        cy.get('#RKdbQFkgpOC').click().focused().get(':nth-child(5) > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel-layout > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-header > .ant-picker-header-prev-btn').click().get(':nth-child(5) > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel-layout > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-body > .ant-picker-content > tbody > :nth-child(4) > [title="2023-10-26"]').click()
        cy.get('#kKbAdaCCCM7 > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        cy.get('#BW86oe5G4i7').click().focused().type('Organ{enter}')
        cy.get(':nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click().focused().type('Heat{enter}')
        //cy.get('#b0pxjhsJFEq_0_xS5SzaMlRUu > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        //cy.get('#NTtKqGBg1ZQ > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        //cy.get('#H28GHift6tu').click().focused().type('Heat{enter}')
        cy.get('#xS5SzaMlRUu > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        cy.get('.submitButton-0-2-47 > span').click()

        cy.get(':nth-child(9) > .section-0-2-18 > .title-0-2-19 > :nth-child(1) > .header-0-2-24 > div > .ant-btn').click()
        const sampleID = () => Cypress._.random(0, 1e7);
        const sampleNo=sampleID();

        cy.get('#zoPeWyjeusE').type(`SAMPLE-${sampleNo}`,'{enter}')
        cy.get('#DN4UyEFE4Xh').click().focused().type('Pus{enter}')
        cy.get('#B0DQpkdwBMe').click().focused().get(':nth-child(9) > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel-layout > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-header > .ant-picker-header-prev-btn').click()
        cy.get('#XnyFUOpI8EN').click().focused().type('Positive culture{enter}')
        cy.get('#ZJk1RmtPPVN').click().focused()
        cy.get('#jrBAPDCvLb5').click().focused()
        
        cy.get('#B7pPzHRas3A').click().focused()
        cy.get('#DN4UyEFE4Xh').click().focused()
        cy.get('#odqtQYQV3Ih_0_XIbjZX3HUT0').click().focused()
        cy.get('#odqtQYQV3Ih_0_j4c81HWeayx').click().focused()
        cy.get('#odqtQYQV3Ih_0_zCmpVgyXu7L').click().focused()
        cy.get('#odqtQYQV3Ih_0_E9cp0O1lk9a').click().focused()
        cy.get('#odqtQYQV3Ih_0_EfCxNTaw0Oa').click().focused()
        cy.get('#odqtQYQV3Ih_0_F7hTIlGI8UA').click().focused()
        cy.get('#odqtQYQV3Ih_0_UhmtatqVCVZ').click().focused()
        cy.get('.submit-0-2-47').click().focused()
        // cy.get(':nth-child(10) > .section-0-2-18 > .title-0-2-19 > :nth-child(1) > .header-0-2-24 > div > .ant-btn').click()

           }) 
   
    })
