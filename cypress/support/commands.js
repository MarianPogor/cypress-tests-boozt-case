// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { mainPage, buttonCookies, title ,chooseLanguageButton, englishLanguageButton} from './constants';
import Helper from '../helper/Helper';

const helper = new Helper();

Cypress.Commands.add('visitMainPageAndVerifyTitle', () => {
    cy.visit(mainPage);
    cy.get(buttonCookies).click();
    cy.title().should('eq', title);
  });
// Define the command to visit main page
  Cypress.Commands.add('visitHomePage', () => {
    cy.visit(mainPage);
    cy.get(buttonCookies).click();
  });

// Define the command to change the language to English
Cypress.Commands.add('changeLanguageToEnglish', () => {
  cy.get(chooseLanguageButton).should('be.visible').click();
  cy.get(englishLanguageButton).should('be.visible').click();
});


Cypress.Commands.add('getVerificationMessage', (inbox) => {
  return cy.wrap(null).then(() => {
    return getLatestMessageForEmail(inbox); // Assuming this function returns a promise
  });
});


Cypress.Commands.add('verifyProfile', () => {
  cy.get(constants.profileLinkButton).click();
  cy.get(constants.confirmationEmailButton).click();
});