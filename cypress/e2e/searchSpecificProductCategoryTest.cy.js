// Loading page and status 200 is expected
import * as constants from '../support/constants';
describe('Search Specific Product and Check the Results', () => {
  it('should search for "Tiger Of Sweden" and verify results', () => {
    // Step 1: Visit the homepage and proceed to account creation
    cy.visitHomePage();
    cy.get(constants.globalSearchButton).should('be.visible').click();
    cy.get(constants.searchInput).should('be.visible').type('Tiger Of Sweden');
    cy.get(constants.productsListSelector).should('be.visible');
      
    // Step 5: Iterate over each product and ensure it contains "Tiger Of Sweden"
    cy.get(constants.productsListSelector).each(($el, index) => {
      cy.wrap($el).contains('Tiger of Sweden', { matchCase: false })
        .should('exist', { message: `Product at index ${index} does not contain the expected text "Tiger of Sweden".` });
    });
  });
});

