
import Helper from '../helper/Helper';
import * as constants from '../support/constants';

const helper = new Helper();

describe('Gift Card Purchase and Cart Verification', () => {
  it('should add a gift card to the cart and verify the cart contents', () => {
    // Step 1: Visit the homepage and initiate the gift card selection
    cy.visitHomePage();
    cy.scrollTo('bottom');
    cy.get(constants.giftCardLinkButton).click();
    cy.get(constants.booztGiftCardLink).first().click();

    // Step 2: Interact with the cross-origin page to select options and fill in details
    cy.origin('https://engine.gogift.com/boozt-dk/product/757493252708007936', () => {
      // selectors
      const emailButtonSelector = 'div.delivery-buttons span:contains("E-mail")';
      const listBoxButtonSelector = '#headlessui-listbox-button-\\:r8\\:'
      const deliveryDateSelector = 'input[name="deliveryDate"]';
      
      const quantityInputSelector = 'input[name="quantity"]';
      const giftValueOptionSelector = 'li[role="option"]';
      const nameInputSelector = 'input[name="recipients.0.recipientName"]';
      const emailInputSelector = 'input[name="recipients.0.recipientEmail"]';
      const emailRepeatInputSelector = 'input[name="recipients.0.recipientEmailRepeat"]';
      const submitButtonSelector = 'button[type="submit"]';

      //inputs value for the gift card
      const nameInput = 'John Doe';
      const emailInput = 'john.doe@example.com';
      const giftValueLabel ='500 DKK';
      const quantityInput = '2'; 

      
      // Select the "E-mail" delivery method
      cy.get(emailButtonSelector).click();

      // Set the delivery date to today
      const getCurrentDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        return `${yyyy}-${mm}-${dd}`;
      };

      // Fill in recipient details and submit
      cy.get(deliveryDateSelector).type(getCurrentDate(), { force: true });
      cy.get(listBoxButtonSelector).should('be.visible').click();
      cy.contains(giftValueOptionSelector, giftValueLabel).click();
      cy.get(quantityInputSelector).clear().type(quantityInput); // corrected line
      cy.get(nameInputSelector).type(nameInput);
      cy.get(emailInputSelector).type(emailInput);
      cy.get(emailRepeatInputSelector).type(emailInput);

      cy.get(submitButtonSelector)
      .should('not.be.disabled') // Wait until the button is enabled
      .click();

      cy.get('h3.heading3', { timeout: 10000 })
      .should('contain', 'Din kurv')
      .then(() => cy.log('Cart opened successfully.'));

    // Select the first product-summary element and verify details
    cy.get('.product-summary').first().within(() => {
      const expectedValueLabelInput = 'Værdi:';
      const expectedQuantityLabelInput = 'Antal: 2';
      const expectedDeliveryMethodLabelInput = 'Leveres via E-mail';

      cy.get('h4').should('contain', 'Boozt'); // Check product name
      cy.get('span[data-translation-key="value_label"]').should('contain', expectedValueLabelInput); // Check gift card value
      cy.get('span[data-translation-key="quantity_label"]').should('contain', expectedQuantityLabelInput); // Check quantity
      cy.get('span[data-translation-key="delivery_method_label"]').should('contain', expectedDeliveryMethodLabelInput); // Check delivery method
    });

      cy.scrollTo('bottom');
      const giftValueCartSelector = "div.total-footer > p:has(span[data-translation-key='order_summary_value']) > span:nth-child(2)";
      const totalPaymentSelector = "div.total-footer > p:has(span[data-translation-key='total_payment_label']) > span:nth-child(2)";
      let actualGiftValue = "1.000,00 kr.";
      let actualTotalPayment = "1.000,00 kr.";
    
      // Retrieve and log the gift card value
      cy.get(giftValueCartSelector).contains(actualGiftValue);
      cy.get(totalPaymentSelector).contains(actualTotalPayment);

      
    });
     
      
  });
    
});
