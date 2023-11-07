import * as locators from '../../support/locators'

describe('Checkout Feature', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.login('standard_user', 'secret_sauce')
    })

    it('Complete Checkout', () => {
        cy.get(locators.addToCartSauceLabsBackpack).should('be.visible').click()
        cy.get(locators.shoppingIcon).should('be.visible').click()
        cy.get(locators.checkout).should('be.visible').click()
        cy.get(locators.firstName).clear().type('name').should('have.value', 'name')
        cy.get(locators.lastName).clear().type('lastname').should('have.value', 'lastname')
        cy.get(locators.postalCode).clear().type(123456).should('have.value', 123456)
        cy.get(locators.next).should('be.visible').click()
        cy.get(locators.finish).should('be.visible').click()
        cy.get(locators.checkoutComplete).should('exist');
    })
})