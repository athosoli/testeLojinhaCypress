class Menu {
    acessarProdutos(){
        cy.contains(`Products`).click()
    }
    acessarContateNos(){
        cy.contains(`Contact us`).click()
    }
    acessarLoginCadastro(){
        cy.contains('Signup').click()
    }
    acessarCarrinho(){
        cy.contains('Signup').click()
    }
}
export default new Menu();