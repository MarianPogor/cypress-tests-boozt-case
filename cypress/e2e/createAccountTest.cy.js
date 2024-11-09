// Loading page and status 200 is expected
import Helper from '../helper/Helper';

import * as constants from '../support/constants';
const EMAIL_DOMAIN = '@team912904.testinator.com';
const helper = new Helper();

describe('Account Creation Test with Email Verification', () => {
  it('should create an account and verify email', () => {
    // Step 1: Visit the homepage and proceed to account creation
    cy.visitHomePage();

    // Click on the account button to go to the login page
    cy.get(constants.accountButton).click();
    cy.url().should('include', '/login');
    

    // Click on the "Create Account" button to navigate to the account creation page
    cy.get(constants.createAccountButton).click();
    cy.url().should('include', '/customer/create');

    // Step 2: Generate unique user data
    const randomFirstNameUser = `FirstName_${Date.now()}`;
    const randomLastNameUser = `LastName_${Date.now()}`;
    const email = `${randomFirstNameUser}@team912904.testinator.com`;
    const password = helper.generateRandomPassword();

    // Step 3: Fill out the account creation form
    cy.get(constants.firstNameInput).type(randomFirstNameUser);
    cy.get(constants.lastNameInput).type(randomLastNameUser);
    cy.get(constants.emailInput).type(email); // Fixed typo here
    cy.get(constants.firstPasswordInput).type(password);
    cy.get(constants.confirmedPasswordInput).type(password);

    // Submit the account creation form
    cy.get(constants.submitAccountButton).click();

    // Step 4: Verify that account creation was successful by checking the URL and welcome message
    cy.url().should('include', '/customer');
    cy.get('.dashboard-header__user').within(() => {
      cy.contains('Du er logget ind som').should('be.visible');
      cy.contains(email).should('be.visible');
    });

  });
});
