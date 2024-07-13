/// <reference types="cypress" />
import HomePage from "../pageObjects/HomePage";

describe('Customer Registration', () => {

  let data = {};

  before(() => {
    cy.fixture('Customer-Data').then((customerData) =>{
      data = customerData;
    });
  });

  it('should registrate customer', () => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');

    // Select "Name" input field and type customer name
    cy.get(':nth-child(1) > .form-control').type(data.name);

    // Select "Female" in gender selection field
    cy.get('#exampleFormControlSelect1').select(data.gender);

    // Customer name must matches
    cy.get('input.ng-pristine').then((item) => {
      expect(item[1].value).eq(data.name);
    })

    cy.get('#inlineRadio3').should('be.disabled');

  });

  it.only('should validate Home page using Page Object Design Pattern', () => {

    const homePage = new HomePage();

    cy.visit('https://rahulshettyacademy.com/angularpractice/');

    // Select "Name" input field and type customer name
    homePage.getNameBox().type(data.name);

    // Select "Email" input field and type email
    homePage.getEmailBox().type(`${data.name}@gmail.com`);

    // Select "Password" input field and type password
    homePage.getPassword().type('123456')

    // Select "Female" in gender selection field
    homePage.getGender().select(data.gender);

    // "Entrepreneur" in Employment status must be disabled
    homePage.getEmploymentStatus().should('be.disabled');

  });

})