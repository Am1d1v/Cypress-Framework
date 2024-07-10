/// <reference types="cypress" />

describe('Fixtures', () => {

  before(() => {
    cy.fixture('example');
  });

  it('should registrate customer', () => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');

    // Select "Name" input field and type and
    cy.get(':nth-child(1) > .form-control').type('CustomerName_Female');

    // Select "Female" in gender selection field
    cy.get('#exampleFormControlSelect1').select("Female");



  });

})