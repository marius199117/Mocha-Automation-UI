import * as locators from '../../support/locators'

describe('Login Feature', () => {
  it('Succesfull login', () => {
    // tag: smoke
    cy.visit('/')
    cy.get(locators.email).clear().type('standard_user').should('have.value', 'standard_user')
    cy.get(locators.password).clear().type('secret_sauce').should('have.value', 'secret_sauce')
    cy.get(locators.loginButton).should('be.visible').click()
    cy.url().should('contain', '/inventory.html')
  })

  it('Unsuccesfull login', () => {
    cy.visit('/')
    cy.get(locators.email).clear().type('test').should('have.value', 'test')
    cy.get(locators.password).clear().type('test').should('have.value', 'test')
    cy.get(locators.loginButton).should('be.visible').click()
    cy.get(locators.unsuccesfullyLoggedIn).should('exist')
  })
})