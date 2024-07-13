

class ShopPage{

    getCartProducts(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
    }

    getCheckoutButton(){
        return cy.get(':nth-child(5) > :nth-child(5) > .btn');
    }

    getPurchaseButton(){
        return cy.get('form.ng-untouched > .btn');
    }

    getPurchaseMessage(){
        return cy.get('.alert');
    }

}
export default ShopPage;