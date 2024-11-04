import menu from '../menu'
class Cadastro {
    preencherNovoUsuario() {
        const timestamp = new Date().getTime()
        const signUpName = 'Tester QA'
        Cypress.env('signUpName', signUpName)
        const email = `tester-${timestamp}@mail.com`
        Cypress.env('email', email)

        menu.acessarLoginCadastro()
        cy.get('[data-qa="signup-name"]').type(Cypress.env('signUpName', signUpName))
        cy.get('[data-qa="signup-email"]').type(Cypress.env('email', email))
        cy.contains('button', 'Signup').click()
        this.preencherFormulario();
    }

    preencherFormulario() {
        cy.get('input[type=radio]').check('Mrs')
        cy.get('input[type=radio]').eq(1).check()
        cy.get('[type=password]').type('12345', { log: false })
        cy.get('[data-qa="days"]').select('12')
        cy.get('[data-qa="months"]').select('July')
        cy.get('[data-qa="years"]').select('1988')
        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()
        cy.get('[data-qa="first_name"]').type('jose')
        cy.get('[data-qa="last_name"]').type('pereira')
        cy.get('[data-qa="company"]').type('buteco bar')
        cy.get('[data-qa="address"]').type('rua principal, n 331')
        cy.get('[data-qa="country"]').select('United States')
        cy.get('[data-qa="state"]').type('Califórnia')
        cy.get('[data-qa="city"]').type('Los Angeles')
        cy.get('[data-qa="zipcode"]').type('10031')
        cy.get('[data-qa="mobile_number"]').type('999 444 111')
        cy.get('[data-qa="create-account"]').click()
        cy.url().should('include', 'account_created')
        cy.get('[data-qa="account-created"]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        cy.get('i.fa-user').parent().should('contain', Cypress.env('signUpName'))
        cy.contains('Logout').click()
    }
    preencherUsuario(signUpName, email) {
        menu.acessarLoginCadastro()
        cy.get('[data-qa="signup-name"]').type(signUpName)
        cy.get('[data-qa="signup-email"]').type(email)
        cy.contains('button', 'Signup').click()
    }
}
export default new Cadastro();