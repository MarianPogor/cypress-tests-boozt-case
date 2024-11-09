// ***********************************************************
import './commands'
// cypress/support/e2e.js

// Runs after each test in every test file
beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

