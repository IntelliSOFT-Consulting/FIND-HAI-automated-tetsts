import '../support/commands'
import { faker } from '@faker-js/faker'; 
const firstName = faker.name.firstName(); 
const middleName = faker.name.middleName(); 
const familyName = faker.name.lastName(); 
const emailAddress = familyName.toLowerCase() + firstName.toLowerCase()
context('Actions', () => {
  before(() => {
   // cy.session('login', ()=>{
      cy.baseurl();
      cy.login();
  })
//})

it('.type() - Register a Surgery', () => {
    cy.wait(2000)
    cy.get('[data-test="headerbar-apps-icon"]').click()
    cy.contains("HAI Surveillance App").click()
    cy.wait(7000)
    cy.get('[href="#/surgeries"]').click()
  
        cy.wait(2000)
        cy.get('[data-test="headerbar-apps-icon"]').click()
        cy.contains("HAI Surveillance App").click().wait(2000)
        cy.contains('SURGERIES').click()
        cy.contains("Register new surgery").click()
        const PatID = () => Cypress._.random(0, 1e6);
        const patclinicNo=PatID();
        cy.get('#US1gCMCXtGq').type(`PAT-${patclinicNo}`,'{enter}')
        cy.get('#M9DBAh9Lnpw').type(firstName)
        cy.get('#GhX9ASUscsM').type(middleName)
        cy.get('#cNBoqe3kM9F').type(familyName)

        const gender = [
          "Female",
          "Male"
          ];

        const randomPress = Math.floor(Math.random() * 2) + 1;
        const dropdown1 = cy.get('#O9xFVVDAqsL');

            for (let i = 0; i < randomPress; i++) {
              dropdown1.type('{downarrow}');
            }

            dropdown1.type('{enter}')

        
            const dateOfBirth = [ //date of birth
              "1990-06-15",
              "1956-06-16",
              "2020-06-17",
              "2005-06-18",
              "2015-06-19",
              "2022-06-25"      
            ]
            const randomDOB = dateOfBirth[Math.floor(Math.random() * dateOfBirth.length)];
            cy.get('#Y4bglcLiAGx')
                  .click()
                 .type(randomDOB)
                  .type("{enter}")


               const  admission = [   //date of admission
                "2024-06-05",
                "2024-06-10",
                "2024-06-01"  
               ]    
                const randomadmin = admission[Math.floor(Math.random() * admission.length)];
                cy.get('#dtgA3a71Htu')
                      .click()
                      .type(randomadmin)
                      .type("{enter}")

                         
          const surgeryDate = [   //date of surgery
            "2024-06-15",
            "2024-06-16",
            "2024-06-17",
            "2024-06-18",
            "2024-06-19",
            "2024-06-25"
          ]
          const randomSurgeryDate = surgeryDate[Math.floor(Math.random() * surgeryDate.length)];
          cy.get('#Ogx5pUkCK7Y')
                .click()
              .type(randomSurgeryDate)
                .type("{enter}");

                
            const randomPresser = Math.floor(Math.random() * 10) + 1; //surgery procedure
            const dropdown = cy.get('#u2mZ7WXhjHt');

            for (let i = 0; i < randomPresser; i++) {
              dropdown.type('{downarrow}');
            }

            dropdown.type('{enter}');

        const randomPresser1 = Math.floor(Math.random() * 2) + 1;
        const dropdown2 = cy.get('#LXSQGQvSQGf');

        for (let i = 0; i < randomPresser1; i++) {
          dropdown2.type('{downarrow}');
        }
        dropdown2.type('{enter}');


        const randomPresser3 = Math.floor(Math.random() * 2) + 1;
        const dropdown3 = cy.get('#JwuMPx8ZPLD');

        for (let i = 0; i < randomPresser3; i++) {
          dropdown3.type('{downarrow}');
        }
        dropdown3.type('{enter}');
      cy.contains('Submit').click()//Submit Patient & Surgery details
      cy.wait(10000) 


      cy.contains('Add').click().wait(3000) //peri-operative procedure
     // cy.get(':nth-child(1) > .accordion-0-2-18 > .content-0-2-23 > [style="overflow: hidden;"] > .relative-0-2-59 > .add-0-2-58 > :nth-child(1) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-overflow').click().type('{downarrow}{downarrow}').type('{enter}')
      cy.get('.ant-radio-input').eq(0).click().check();
      cy.get('input[placeholder="Enter Blood glucose levels (Mmol/L)"]').type('70ml')
      cy.get('input[placeholder="Enter Intervention to correct blood sugar, if any"]').type('Insulin')
      cy.get('.ant-radio-input').eq(3).click().check();
      cy.get('.ant-radio-input').eq(4).click().check();

      cy.get('#eV0Cs6Wdl8w_0_vWjnpz7L6tT').click().wait(500).type('{enter}')//surgical skin preparation
      cy.get('#eV0Cs6Wdl8w_0_L14g5KntcbA > :nth-child(1) > .ant-radio > .ant-radio-input').click()
      const implantUsed = [ //implant used
        "No",
        "Metal(Ortho)",
        "Skin graft",
        "Mesh",
        "Other"
       ]
       const randomImplant = implantUsed[Math.floor(Math.random() * implantUsed.length)];
       cy.get('#eV0Cs6Wdl8w_0_izLgahalz9Q')
             .click()
           .type(randomImplant)
             .type("{enter}");

             cy.get('div.ant-radio-group').each(($radioGroup) => {
              cy.wrap($radioGroup).find('label:contains("Yes")').click(); 
             })  
             
      cy.get(':nth-child(2) > .accordion-0-2-18 > .content-0-2-23 > [style="overflow: hidden;"] > :nth-child(2) > .ant-btn').click()


/*Surgical Hand Preparation*/
        cy.get(':nth-child(3) > .accordion-0-2-18 > .content-0-2-23 > [style="overflow: hidden;"] > .formList-0-2-56 > .ant-btn').click()
      const randomPresser6 = Math.floor(Math.random()*6)+1;
      const dropdown6=cy.get('#oMsAMBpY0yF_0_n78ALDPo3ym');
      for(let j=0;j<randomPresser6;j++){
        dropdown6.type('{downarrow}')
      }
      dropdown6.type('{enter}')

      cy.get('#oMsAMBpY0yF_0_Sd6AbnqvWAn').click().type('{enter}')

      const specialistRole = [
        "Lead Surgeon",
        "Assitant Surgeon",
        "Nurse",
        "Pharmacist",
        "Pharmaceutical Technologist",
        "Clinician(Medical Doctor",
        "Anesthetist/Anesthesiologist",
        "Medical Laboratory Technician"
       ]
       const randomRole = specialistRole[Math.floor(Math.random() * specialistRole.length)];
       cy.get('#oMsAMBpY0yF_0_IACyjsBmbHT')
             .click()
            .type(randomRole)
             .type("{enter}");
             cy.get(':nth-child(3) > .accordion-0-2-18 > .content-0-2-23 > [style="overflow: hidden;"] > :nth-child(2) > .ant-btn').click()


      const randomPresser9 = Math.floor(Math.random()*13)+1;
      const dropdown9 = cy.get('#F4cIWeUiveB_0_TMfPGD5aJHQ');
      for(let i=0;i<randomPresser9;i++){
        dropdown9.type('{downarrow}', {force: true})

      }
      dropdown9.type('{enter}')
      cy.get('#F4cIWeUiveB_0_TMfPGD5aJHQ').type('{esc}');

      cy.get(':nth-child(4) > .accordion-0-2-18 > .content-0-2-23 > [style="overflow: hidden;"] > :nth-child(2) > .ant-btn').click()



      cy.get(':nth-child(5) > .accordion-0-2-18 > .content-0-2-23 > [style="overflow: hidden;"] > .formList-0-2-56 > .ant-btn').click()
 
      const randomPresser10 = Math.floor(Math.random()*13)+1;
      const dropdown10 = cy.get('#IVOiUItGqUk_0_vTPl5yUNbI3');
      for(let i=0;i<randomPresser10;i++){
        dropdown10.type('{downarrow}')
      }
      dropdown10.type('{enter}').wait(500)
      cy.get('#IVOiUItGqUk_0_vTPl5yUNbI3').type('{esc}');
      cy.get('#IVOiUItGqUk_0_OEvr8vNqbQg').click().type('{enter}')
      cy.get(':nth-child(5) > .accordion-0-2-18 > .content-0-2-23 > [style="overflow: hidden;"] > :nth-child(2) > .ant-btn').click()


        cy.get(':nth-child(8) > .section-0-2-18 > .title-0-2-19 > :nth-child(1) > .header-0-2-24 > div > .ant-btn').click()
        cy.get('#VJe5oPR17wE').click().focused().get('.ant-picker-header-prev-btn').click().get('[title="2024-01-01"]').click()
        cy.get('#fkxHVloTLwR > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        cy.get('#RKdbQFkgpOC').click().focused().get(':nth-child(5) > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel-layout > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-header > .ant-picker-header-prev-btn').click().get(':nth-child(5) > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel-layout > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-body > .ant-picker-content > tbody > :nth-child(4) > [title="2023-10-26"]').click()
        cy.get('#kKbAdaCCCM7 > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        cy.get('#BW86oe5G4i7').click().focused().type('Organ{enter}')
        cy.get(':nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click().focused().type('Heat{enter}')
        //cy.get('#b0pxjhsJFEq_0_xS5SzaMlRUu > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        cy.get('#NTtKqGBg1ZQ > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        cy.get('#H28GHift6tu').click().focused().type('Heat{enter}')
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
