
# Cypress Tests for Boozt Case

This repository contains end-to-end tests for the Boozt website using [Cypress](https://www.cypress.io/). The tests cover various scenarios such as account creation, gift card purchases, header element verification, loading page checks, and specific product searches.

## Project Structure

```
cypress-framework/
├── cypress/
│   ├── e2e/
│   │   ├── createAccountTest.cy.js
│   │   ├── giftCardPurchaseTest.cy.js
│   │   ├── headerElementsHomePageDKSmokeTest.cy.js
│   │   ├── headerElementsHomePageEnSmokeTest.cy.js
│   │   ├── loadingPageSmokeTest.cy.js
│   │   └── searchSpecificProductCategoryTest.cy.js
│   ├── fixtures/
│   │   └── example.json
│   ├── helper/
│   │   └── Helper.ts
│   ├── screenshots/
│   └── support/
│       ├── commands.js
│       ├── constants.js
│       └── e2e.js
├── cypress.config.js
├── package.json
├── package-lock.json
└── tsconfig.json
```

## Prerequisites

- **Node.js**: Make sure [Node.js](https://nodejs.org/en/) (version 12 or higher) is installed.
- **Git**: Install [Git](https://git-scm.com/) for version control.

Confirm both Node.js and Git are installed and accessible from your terminal or command prompt.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/MarianPogor/cypress-tests-boozt-case.git
   cd cypress-tests-boozt-case
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

## Running Tests

You can execute the Cypress tests in different ways:

### 1. Using Cypress Test Runner (Interactive Mode)

This mode opens the Cypress GUI, allowing you to choose and run individual tests with a visual interface.

```bash
npx cypress open
```

In the Test Runner, select the test you want to run.

### 2. Headless Mode (CLI)

Run all tests in headless mode directly from the command line, which is useful for automation or CI/CD.

```bash
npx cypress run
```

To run a specific test file in headless mode:

```bash
npx cypress run --spec "cypress/e2e/giftCardPurchaseTest.cy.js"
```

## Test File Descriptions

- **`createAccountTest.cy.js`**: Tests for creating a new user account.
- **`giftCardPurchaseTest.cy.js`**: Tests for purchasing a gift card and verifying cart contents.
- **`headerElementsHomePageDKSmokeTest.cy.js`**: Verifies header elements on the Danish homepage.
- **`headerElementsHomePageEnSmokeTest.cy.js`**: Verifies header elements on the English homepage.
- **`loadingPageSmokeTest.cy.js`**: Verifies elements on the loading page.
- **`searchSpecificProductCategoryTest.cy.js`**: Tests for searching a specific product category and validating results.