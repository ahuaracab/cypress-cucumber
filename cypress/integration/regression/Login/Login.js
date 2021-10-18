/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { LoginPage } from '../../../support/pages/LoginPage'

const LOGIN_PAGE = new LoginPage()

When('I click on continue button', async () => {
    await cy
        .get(LOGIN_PAGE.button.login)
        .click()
})

And('I enter the {string} and {string}', async (username, password) => {
    await cy
        .get(LOGIN_PAGE.input.username)
        .type(username)
        
    await cy
        .get(LOGIN_PAGE.input.password)
        .type(password)
})

Then('i can see the alert with {string}', async (text) => {
    await cy
        .get(LOGIN_PAGE.alerts.alert)
        .should('to.contain', text)
})