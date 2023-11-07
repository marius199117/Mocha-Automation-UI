import * as locators from '../../support/locators'

describe('Add To Cart Feature', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.login('standard_user', 'secret_sauce')
    })

    it('Item has succesfully added to cart', () => {
        cy.get(locators.addToCartSauceLabsBackpack).should('be.visible').click()
        cy.get(locators.shoppingIcon).should('be.visible').click()
        cy.get(locators.cartSauceLabsBackpack).should('exist');
    })

    it('Item has succesfully removed from the cart', () => {
        cy.get(locators.addToCartSauceLabsBackpack).should('be.visible').click()
        cy.get(locators.shoppingIcon).should('be.visible').click()
        cy.get(locators.removeSauceLabsBackpack).should('be.visible').click()
        cy.get(locators.cartSauceLabsBackpack).should('not.exist');
    })
})