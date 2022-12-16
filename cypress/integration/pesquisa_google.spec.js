/// <reference types= "cypress"/>

describe('Realizar pesquisa no Google',() =>{
it('Pesquisar tecnologia',() =>{
cy.visit('https://www.google.com')
cy.wait(3000)
cy.get('.gLFyf').type('Tecnologia')
cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
cy.wait(3000)
cy.get('.Ftghae > .SPZz6b').should('contain','Tecnologia')

})
// vai dar uma mensagem de erro por que já foi cadastrado com esse email ,para fazer um novo cadastro e so colocar outro email 
it('Realizar um cadastro',() =>{
cy.visit('https://demowebshop.tricentis.com/register')
cy.get('#gender-male').click()
cy.get('#FirstName').type('Jose')
cy.get('#LastName').type('santos')
cy.get('#Email').type('jose14s@teste.com')
cy.get('#Password').type('123456')
cy.get('#ConfirmPassword').type('123456')
cy.get('#register-button').click()

})



})