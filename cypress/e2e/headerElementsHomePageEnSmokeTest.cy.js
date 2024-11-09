import {
  headerElementSelector,
  globalSearchButton,
  mainHeader,
  accountButtonEN,
  clubButton,
  favoritesButtonEN,
  cartButtonEN,
} from '../support/constants.js';
const headerCategories_EN = ['Women','Men','Kids','Sport','Beauty','Home','Christmas'];

describe('English version- Header Category Verification', () => {
  it('should verify each category name is present in the header', () => {
    
    cy.visitMainPageAndVerifyTitle();
    cy.changeLanguageToEnglish();
    cy.get(headerElementSelector).should('be.visible');
    headerCategories_EN.forEach((category) => {
      // Search for each category within the header without relying on order
      cy.get(`${headerElementSelector} ul li`).contains(category).should('be.visible');
    });
  });
});

describe('English version- Header Buttons Verification', () => {
  it('should verify each button is present in the header', () => {
    cy.visitMainPageAndVerifyTitle();
    cy.changeLanguageToEnglish();

    const headerElements = [mainHeader,globalSearchButton,accountButtonEN,clubButton,favoritesButtonEN,cartButtonEN];
    headerElements.forEach((element) => {
      cy.get(element).should('be.visible');
    });
  });
});

