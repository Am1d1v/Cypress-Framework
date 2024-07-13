


class HomePage{

    // Name input field
    getNameBox(){
        return cy.get(':nth-child(1) > .form-control');
    }

    // Email input field
    getEmailBox(){
        return cy.get(':nth-child(2) > .form-control');
    }

    getPassword(){
        return cy.get('#exampleInputPassword1');
    }

    // Gender selection field
    getGender(){
        return  cy.get('#exampleFormControlSelect1');
    }

    // Radio buttons
    getEmploymentStatus(){
        return cy.get('#inlineRadio3');
    }

    // Shop button
    getShopButton(){
        cy.get(':nth-child(2) > .nav-link');
    }


}
export default HomePage;