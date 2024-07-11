/// <reference types="cypress" />

describe('Add product to cart', () => {
  
    it('select product and add it into the cart', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop');

        cy.get('h4.card-title').each((product, index) => {
            product.text().includes('iphone X');

            cy.get('button.btn');
        })
    });
  
  })