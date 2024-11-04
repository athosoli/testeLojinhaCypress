class CarrinhoCompras {
    dadosPagamento(nome, numero, cvv, mes, ano){
        cy.contains("Add to cart").click()
        cy.contains("View Cart").click()
        cy.get('.btn-default.check_out').should('be.visible')
        cy.get('.btn-default.check_out').click()
        cy.get('.heading').first().should('have.text', 'Address Details')
        cy.get('.heading').last().should('have.text', 'Review Your Order')
        cy.get('.form-control').type('378 98562-8781')
        cy.get('.btn-default.check_out').click()
        cy.get('[data-qa="name-on-card"]').type(nome)
        cy.get('[data-qa="card-number"]').type(numero)
        cy.get('[data-qa="cvc"]').type(cvv)
        cy.get('[data-qa="expiry-month"]').type(mes)
        cy.get('[data-qa="expiry-year"]').type(ano)
        cy.get('[data-qa="pay-button"]').click()
        cy.get('[data-qa="order-placed"]').should('be.visible')
        cy.get('[href *="delete"]').click()
        cy.get('b').should('contain', 'Account Deleted!')
        cy.get('[data-qa="continue-button"]').click()
    }
}
export default new CarrinhoCompras();