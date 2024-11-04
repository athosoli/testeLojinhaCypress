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
// Cypress.Commands.add('cadastrar', () => { 
//     const timestamp = new Date().getTime()
//     const signUpName = 'Tester QA'
//     const email = `tester-${timestamp}@mail.com`
  
//     cy.contains('Signup').click()     
//     cy.get('[data-qa="signup-name"]').type(signUpName)
//     cy.get('[data-qa="signup-email"]').type(email)
//     cy.contains('button', 'Signup').click()
//     cy.get('input[type=radio]').check('Mrs')
//     cy.get('input[type=radio]').eq(1).check() 
//     cy.get('[type=password]').type('12345', { log: false })
//     cy.get('[data-qa="days"]').select('12')
//     cy.get('[data-qa="months"]').select('July')
//     cy.get('[data-qa="years"]').select('1988')
//     cy.get('input[type=checkbox]#newsletter').check()
//     cy.get('input[type=checkbox]#optin').check()
//     cy.get('[data-qa="first_name"]').type('jose')
//     cy.get('[data-qa="last_name"]').type('pereira')
//     cy.get('[data-qa="company"]').type('buteco bar')
//     cy.get('[data-qa="address"]').type('rua principal, n 331')
//     cy.get('[data-qa="country"]').select('United States')
//     cy.get('[data-qa="state"]').type('Califórnia')
//     cy.get('[data-qa="city"]').type('Los Angeles')
//     cy.get('[data-qa="zipcode"]').type('10031')
//     cy.get('[data-qa="mobile_number"]').type('999 444 111')
//     cy.get('[data-qa="create-account"]').click()
//     cy.url().should('include', 'account_created')
//     cy.get('[data-qa="account-created"]').should('be.visible')
//     cy.get('[data-qa="continue-button"]').click()
//     cy.get('i.fa-user').parent().should('contain', signUpName)
//     cy.contains('Logout').click()
//     cy.wrap({ email, signUpName })
   
//   })

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