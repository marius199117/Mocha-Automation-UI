import * as locators from '../../support/locators'

describe('Logout Feature', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.login('standard_user', 'secret_sauce')
    })

    it('User has succesfully logged out from the page', () => {
        cy.get(locators.burgerButton).should('be.visible').click()
        cy.get(locators.logoutButton).should('be.visible').click()
        cy.get(locators.loginSection).should('exist');
    })
})