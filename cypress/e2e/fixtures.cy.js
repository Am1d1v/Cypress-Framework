/// <reference types="cypress" />

describe('Fixtures', () => {

  it('should registrate customer', () => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');

    // Select "Name" input field and type and
    cy.get(':nth-child(1) > .form-control').type('CustomerName_Female');

    cy.get('#exampleFormControlSelect1').select(1);

  });

})