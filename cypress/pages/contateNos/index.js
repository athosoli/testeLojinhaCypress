import menu from '../menu'
class ContateNos {
    preencherFormularioDeContato(usuario, email, assunto,mensagem){
        menu.acessarContateNos()
        cy.get(`.contact-form h2`).should('be.visible').and('have.text', 'Get In Touch')
        cy.get('[data-qa="name"]').type(usuario)
        cy.get('[data-qa="email"]').type(email)
        cy.get('[data-qa="subject"]').type(assunto)
        cy.get('[data-qa="message"]').type(mensagem)
        cy.fixture('example.json').as('arquivo')
        cy.get('input[name="upload_file"]').selectFile('@arquivo')
        cy.get('[data-qa="submit-button"]').click()
    }
}
export default new ContateNos();