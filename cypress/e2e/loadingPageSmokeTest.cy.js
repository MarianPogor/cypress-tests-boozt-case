// Loading page and status 200 is expected
import { mainPage} from '../support/constants';

describe('Homepage Load Test', () => {
  it('should load the homepage successfully and verify page content', () => {
    // Step 1: Send a request to the homepage and check status
    cy.request(mainPage)
      .its('status')
      .should('eq', 200, 'Homepage did not return status 200');

    // Step 2: Visit the homepage and verify specific elements are present
    cy.visit(mainPage);

    // Step 3: Verify key elements to ensure the page loaded correctly
    cy.get('header')
      .should('exist', 'Header element is missing on the homepage')
      .and('be.visible', 'Header element is not visible');

    cy.get('footer')
      .should('exist', 'Footer element is missing on the homepage')
      .and('be.visible', 'Footer element is not visible');

  });
});
