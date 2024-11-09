import {
  headerCategoriesDK,
  headerElementSelector,
  globalSearchButton,
  mainHeader,
  accountButton,
  clubButton,
  favoritesButton,
  cartButton,
} from '../support/constants.js';
const headerElements = [mainHeader,globalSearchButton,accountButton,clubButton,favoritesButton,cartButton];

describe('Danish version- Header Category Verification DK', () => {
  it('should verify each category name is present in the header DK', () => {
    cy.visitMainPageAndVerifyTitle();
    headerCategoriesDK.forEach((category) => {
      // Search for each category within the header without relying on order
      cy.get(`${headerElementSelector} ul li`).contains(category).should('be.visible');
    });
  });
});

describe('Danish version- Header Buttons Verification DK', () => {
  it('should verify each button is present in the header', () => {
    cy.visitMainPageAndVerifyTitle();
    headerElements.forEach((element) => {
      cy.get(element).should('be.visible');
    });
  });
});
