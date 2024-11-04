import menu from '../menu'
class Login {

    preencherLogin(usuario, senha){
    menu.acessarLoginCadastro()
    cy.get('[data-qa="login-email"]').type(usuario)
    cy.get('[data-qa="login-password"]').type(senha, { log: false })
    cy.get('[data-qa="login-button"]').click()
    }
}
export default new Login();