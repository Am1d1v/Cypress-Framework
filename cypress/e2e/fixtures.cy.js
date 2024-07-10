/// <reference types="cypress" />

describe('Fixtures', () => {

  let data = {};

  before(() => {
    cy.fixture('Customer-Data').then((customerData) =>{
      data = customerData;
    });
  });

  it('should registrate customer', () => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');

    // Select "Name" input field and type and
    cy.get(':nth-child(1) > .form-control').type(data.name);

    // Select "Female" in gender selection field
    cy.get('#exampleFormControlSelect1').select(data.gender);

    // Customer name must matches
    cy.get('input.ng-pristine').then((item) => {
      expect(item[1].value).eq(data.name);
    })

    cy.get('#inlineRadio3').should('be.disabled');

  });

})