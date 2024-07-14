/// <reference types="cypress" />
import ShopPage from "../pageObjects/ShopPage";

describe('Add product to cart', () => {
    
    // Array of products
        let products;

    before(() => {
        cy.fixture('Shop-Products').then((product) => products = product.productName);
    })

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

    it('select products "Blackberry" & "iphone X" then add them into the cart', () => {
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

    it('select products from fixture array and add them into the cart', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop');

        // The cart is empty
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').contains('0')

        // Add multiple products to the cart
        products.forEach((product) => cy.addProduct(product));

        // Product was added to the cart
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').contains(products.length)
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click();
        cy.get('tbody').should('have.length.above', 0);
        
    });

    it('should validate Shop page using Page Object Design Pattern', () => {
        const shopPage = new ShopPage();

        cy.visit('https://rahulshettyacademy.com/angularpractice/shop');

        // The cart is empty
        shopPage.getCartProducts().contains('0');

        // Add multiple products to the cart
        products.forEach((product) => cy.addProduct(product));

        // Product was added to the cart
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').contains(products.length)
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click();
        cy.get('tbody').should('have.length.above', 0);

        // Checkout
        shopPage.getCheckoutButton().click();

        // Purchase product
        shopPage.getPurchaseButton().contains('Purchase').click();

        // Product was successfully purchased message
        shopPage.getPurchaseMessage().should('contain', 'Success! Thank you! Your order will be delivered in next few weeks');

    });
    it.only('should summarize products price', () => {
        const shopPage = new ShopPage();

        // Total price of the product
        let totalPrice = 0;

        cy.visit('https://rahulshettyacademy.com/angularpractice/shop');

        // The cart is empty
        shopPage.getCartProducts().contains('0');

        // Add multiple products to the cart
        products.forEach((product) => cy.addProduct(product));

        // Product was added to the cart
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').contains(products.length)
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click();
        cy.get('tbody').should('have.length.above', 0);

        // Get price of every product
        cy.get('tr td:nth-child(4) strong').each(element => {
            const productPrice = Number(element.text().slice(2))
            totalPrice += productPrice;
        })

        // Total price assertion
        cy.get('h3 > strong').then(index => {
            const total = Number(index.text().slice(2));
            expect(total).to.be.eq(totalPrice);
        })
       

    });
    
  
  })