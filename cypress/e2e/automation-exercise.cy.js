/// <reference types="cypress" />
import cadastro from '../pages/cadastro'
import login from '../pages/login'
import carrinho from '../pages/carrinho'
import contato from '../pages/contateNos'
import menu from '../pages/menu'
import { faker } from '@faker-js/faker'

describe('Automation Exercise', () => {
  beforeEach(() => {
    cy.visit('/')
  })

// it('teste',()=>{
//   cy.log(process.env.AMBIENTE)
// })


  it('Test Case 1: Cadastrar um usuário', () => {
    cadastro.preencherNovoUsuario()
  })

  it('Test Case 2: Login Usuário com e-mail e senha corretos', () => {
    cadastro.preencherNovoUsuario()
    login.preencherLogin(Cypress.env('email'), "12345")
    cy.get('i.fa-user').parent().should('contain', Cypress.env('signUpName'))
  })


  it('Test Case 3: Login Usuário com e-mail e senha incorretos', () => {
    login.preencherLogin('teste@mail.com', "54321")
    cy.get('p').should('contain', 'Your email or password is incorrect!')
  })

  it('Test Case 4: Logout Usuário', () => {
    cadastro.preencherNovoUsuario()
    cy.url().should('contain', 'login')
    cy.contains("Login to your account").should("be.visible")
  })

  it('Test Case 5: Registrar usuário com e-mail existente', () => {
    cadastro.preencherNovoUsuario()
    cadastro.preencherUsuario(Cypress.env('signUpName'), Cypress.env('email'))
    cy.get(`.signup-form form p`).should('be.visible')
      .and('contain', 'Email Address already exist!')
  })

  it('Test Case 6: Formulário de contato', () => {
    menu.acessarContateNos()
    contato.preencherFormularioDeContato(`Tester`, `tester-qa@mail.com`, `Test Automation`, `Learning Test Automation`)
    cy.get('.status')
      .should('have.text', 'Success! Your details have been submitted successfully.')
  })

  it('Test Case 8: Verifique todos os produtos e a página de detalhes do produto', () => {
    menu.acessarProdutos()
    cy.url().should('contain', 'products')
    cy.get('.title').should('be.visible').and('contain', 'All Products')
    cy.get('.single-products')
      .should('be.visible')
      .and('have.length.at.least', 1)
      .first()
      .parent()
      .contains('View Product')
      .click()

    cy.get('.product-information > h2').should('be.visible')
    cy.get('.product-information p').should('be.visible').and('have.length', 4)
    cy.get('.product-information span span').should('be.visible')
  })

  it('Test Case 9: Pesquisar produto', () => {
    menu.acessarProdutos()
    cy.url().should('contain', 'products')
    cy.get('.title').should('be.visible').and('contain', 'All Products')
    cy.get('input#search_product').type('Shirt')
    cy.get('button#submit_search').click()
    cy.get('.title').should('be.visible').and('contain', 'Searched Products')
    cy.get('.single-products').should('be.visible').and('have.length.at.least', 1)
  })

  it('Test Case 10: Verificar assinatura na página inicial', () => {
    cy.get('input#susbscribe_email').scrollIntoView().type('tester-qa@mail.com')
    cy.get('button#subscribe').click()
    cy.contains('You have been successfully subscribed!').should('be.visible')
  })

  it('Test Case 15: Fazer pedido: Registre-se antes de finalizar a compra', () => {
    cadastro.preencherNovoUsuario()
    login.preencherLogin(Cypress.env('email'), "12345")
    cy.get('i.fa-user').parent().should('contain', Cypress.env('signUpName'))
    carrinho.dadosPagamento(faker.person.fullName(), faker.finance.creditCardNumber(), faker.finance.creditCardCVV(), 11, 2035)
  })
})

