/// <reference types="cypress" />

describe('should check env variable', () => {

    it('should visit page using url as environmental variable', () => {
        cy.visit(Cypress.env('url'));
    });

});