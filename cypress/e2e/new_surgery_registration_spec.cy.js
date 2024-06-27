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
    cy.wait(2000)
    cy.get('[data-test="headerbar-apps-icon"]').click()
    cy.contains("HAI Surveillance App").click()
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
        cy.wait(2000)
        cy.get('[data-test="headerbar-apps-icon"]').click()
        cy.contains("HAI Surveillance App").click().wait(21000)
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

            dropdown1.type('{enter}');

        
        function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }

      const randomBirthday = randomDate(new Date(1940, 0, 1), new Date(2024, 0, 1));
      const formattedBirthday = randomBirthday.toISOString().split('T')[0];


      cy.get('#Y4bglcLiAGx').click().type(formattedBirthday).type('{enter}');

      function admissionDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }

      const randomAdmission = randomDate(new Date(2024, 0, 1), new Date(2024, 0, 9));
      const formattedAdmission = randomAdmission.toISOString().split('T')[0];

      cy.get('#dtgA3a71Htu').click().type(formattedAdmission).type('{enter}');

      function surgeryDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }

      const randomSurgeryDate = randomDate(new Date(2024, 0, 1), new Date(2024, 0, 31));
      const formattedSurgery = randomSurgeryDate.toISOString().split('T')[0];

      cy.get('#Ogx5pUkCK7Y').click().type(formattedSurgery).type('{enter}');

         const surgicalProcedure= [
           "ACL reconstruction surgery",
           "Ankle repair",
           "Hip replacement",
           "Joint arthroscopy",
           "Joint fusion surgery",
           "Knee replacement",
           "ORIF",
           "Shoulder replacement surgery",
           "Spinal surgery",
           "Other(specify)"
         ];
         const randomProcedure = Math.floor(Math.random() * surgicalProcedure.length);
         const randomSurgery = surgicalProcedure[randomProcedure];


            const randomPresser = Math.floor(Math.random() * 10) + 1;
            const dropdown = cy.get('#u2mZ7WXhjHt');

            for (let i = 0; i < randomPresser; i++) {
              dropdown.type('{downarrow}');
            }

            dropdown.type('{enter}');


         const scheduling = [
          "Elective",
          "Emergency"
         ]


        const randomPresser1 = Math.floor(Math.random() * 2) + 1;
        const dropdown2 = cy.get('#LXSQGQvSQGf');

        for (let i = 0; i < randomPresser1; i++) {
          dropdown2.type('{downarrow}');
        }

        dropdown2.type('{enter}');

         const location = [
          "Orthopedic ward",
          "General surgery ward"
         ]


        const randomPresser3 = Math.floor(Math.random() * 2) + 1;
        const dropdown3 = cy.get('#JwuMPx8ZPLD');

        for (let i = 0; i < randomPresser3; i++) {
          dropdown3.type('{downarrow}');
        }

        dropdown3.type('{enter}');

      cy.get('.ant-btn').click().wait(500)
      cy.get(':nth-child(5) > .section-0-2-18 > .title-0-2-19 > :nth-child(1) > .header-0-2-24 > div > .ant-btn').click().wait(300)
      cy.get('.ant-radio-input').eq(0).click().check();
      cy.get('input[placeholder="Enter Blood glucose levels (Mmol/L)"]').type('70ml')
      cy.get('input[placeholder="Enter Intervention to correct blood sugar, if any"]').type('Insulin')
      cy.get('.ant-radio-input').eq(3).click().check();
      cy.get('.ant-radio-input').eq(4).click().check();

       const hairRemoval = [
         "No",
         "Clippers",
         "Razor"
        ]


      const randomPresser4 = Math.floor(Math.random() * 3) + 1;
      const dropdown4 = cy.get('#pNJpQOp13TO');

       for (let i = 0; i < randomPresser4; i++) {
         dropdown4.type('{downarrow}');
       }

       dropdown4.type('{enter}');

       const hairRemovalDate = randomDate(new Date(2023, 0, 1), new Date(2024, 0, 31));
       const randomHairRemovalDate = hairRemovalDate.toISOString().split('T')[0];
       

      cy.get('.ant-radio-input').eq(7).click().check();
      cy.get('.ant-radio-input').eq(9).click().check();
      cy.get('.ant-radio-input').eq(11).click().check();
      cy.get('.ant-radio-input').eq(13).click().check();
      cy.get('.ant-radio-input').eq(15).click().check();

      const implantUsed = [
        "No",
        "Metal(Ortho)",
        "Skin graft",
        "Mesh",
        "Other"
       ]


      const randomPresser5 = Math.floor(Math.random() * 5) + 1;
      const dropdown5 = cy.get('#izLgahalz9Q');

      for (let i = 0; i < randomPresser5; i++) {
        dropdown5.type('{downarrow}');
      }

      dropdown5.type('{enter}');

      cy.get('.ant-radio-input').eq(17).click().check();
      cy.get('.ant-radio-input').eq(19).click().check();
      cy.get('.ant-radio-input').eq(21).click().check();



      const riskFactors = [
        "Healthy Person",
        "Hypertension",
        "Diabetes",
        "COPD",
        "Major Trauma",
        "Age > 75 yrs",
        "Immunocompromised",
        "Multiple fractures",
        "Heart Failure",
        "Kidney Failure",
       ]


      const randomPresser7 = Math.floor(Math.random()*10)+1;
      const dropdown7=cy.get('#SKnaWQXsTJb_0_HmKL3kmI0nA');
      for(let j=0;j<randomPresser7;j++){
        dropdown7.type('{downarrow}')
      }
      dropdown7.type('{enter}')


      const timeHandwashing = [
        "< 1 minute",
        "1 minute-2 minutes",
        "<2 min-3 min",
        ">3 min-4 min",
        ">4 min- 4 min",
        "> 5min"
       ]


      const randomPresser6 = Math.floor(Math.random()*6)+1;
      const dropdown6=cy.get('#oMsAMBpY0yF_0_n78ALDPo3ym');
      for(let j=0;j<randomPresser6;j++){
        dropdown6.type('{downarrow}')
      }
      dropdown6.type('{enter}')

      cy.get('.ant-radio-input').eq(23).click().check();
      cy.get('.ant-radio-input').eq(24).click().check();
      cy.get('.ant-radio-input').eq(26).click().check();
      //cy.get('.ant-radio-input').eq(28).click().check();

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


      const randomPresser8 = Math.floor(Math.random()*8)+1;
      const dropdown8=cy.get('#oMsAMBpY0yF_0_IACyjsBmbHT');
      for(let k=0;k<randomPresser8;k++){
        dropdown8.type('{downarrow}')
      }
      dropdown8.type('{enter}')



      const preOperativeAntibiotics = [
        "Amoxicillin/clavulanic acid",
        "Cefazolin",
        "Cefepime",
        "Ceftriaxone",
        "Cefuroxime",
        "Ciprofloxacin",
        "Cloxacillin",
        "Gentamicin",
        "Metronidazole",
        "None given",
        "Other(specify)",
        "Penicillin",
        "Vancomycin"
       ]


      const randomPresser9 = Math.floor(Math.random()*13)+1;
      const dropdown9 = cy.get('#F4cIWeUiveB_0_TMfPGD5aJHQ');
      for(let i=0;i<randomPresser9;i++){
        dropdown9.type('{downarrow}')
      }
      dropdown9.type('{enter}')




      const postOperativeAntibiotics = [
        "Amoxicillin/clavulanic acid",
        "Cefazolin",
        "Cefepime",
        "Ceftriaxone",
        "Cefuroxime",
        "Ciprofloxacin",
        "Cloxacillin",
        "Gentamicin",
        "Metronidazole",
        "None given",
        "Other(specify)",
        "Penicillin",
        "Vancomycin"
       ]


      const randomPresser10 = Math.floor(Math.random()*13)+1;
      const dropdown10 = cy.get('#IVOiUItGqUk_0_vTPl5yUNbI3');
      for(let i=0;i<randomPresser10;i++){
        dropdown10.type('{downarrow}')
      }
      dropdown10.type('{enter}')

      cy.get('.submitButton-0-2-50 > span').click()

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
