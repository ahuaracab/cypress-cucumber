/// <reference types="cypress" />
const cucumber = require('cypress-cucumber-preprocessor').default
require('dotenv').config()

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
  config.env.baseUrl = process.env.BASE_URL || 'http://localhost:3000'
  return config
}