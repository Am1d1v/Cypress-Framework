/// <reference types="cypress" />

describe('Add product to cart', () => {
  
    it('select product "iphone X" and add it into the cart', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop');

        // The cart is empty
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').contains('0')

        // Add certain product to the cart
        cy.addProduct('iphone X');

        // Product was added to the cart
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').contains('1')
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click();
        cy.get('tbody').should('have.length.above', 0);

    });

    it('select product "Blackberry" and add it into the cart', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop');

        // The cart is empty
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').contains('0')

        // Add certain product to the cart
        cy.addProduct('Blackberry');

        // Product was added to the cart
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').contains('1')
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click();
        cy.get('tbody').should('have.length.above', 0);
    });

    it.only('select products "Blackberry" & "iphone X" then add it into the cart', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop');

        // The cart is empty
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').contains('0')

        // Add multiple products to the cart
        cy.addProduct('Blackberry');
        cy.addProduct('iphone X');

        // Product was added to the cart
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').contains('2')
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click();
        cy.get('tbody').should('have.length.above', 0);
    });
  
  })