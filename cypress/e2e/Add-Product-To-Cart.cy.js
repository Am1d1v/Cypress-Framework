/// <reference types="cypress" />

describe('Add product to cart', () => {
  
    it('select product and add it into the cart', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop');

        // The cart is empty
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').contains('0')

        // Add certain product to the cart
        cy.addProduct('iphone X');

        // Product was added to the cart
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').contains('1')

    });
  
  })