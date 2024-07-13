

class ShopPage{

    getCartProducts(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
    }

    getCheckoutButton(){
        return cy.get(':nth-child(5) > :nth-child(5) > .btn');
    }

}
export default ShopPage;