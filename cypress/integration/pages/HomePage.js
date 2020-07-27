class HomePage
{
    getPurchaseBox() { 
        return cy.get('.ad-box-inner')
    }

    getSignUpBox()
    {
        return cy.get('.midtrans-signup')
    }

    getBuyNowButton() { 
        return cy.get('.buy')
    }

    getSignUpButton()
    {
        return cy.get('.midtrans-signup > .btn')
    }

    getPillowPrice()
    {
        return cy.get('[data-reactid=".0.0.0.2.0.0.2.1"]')
    }

    getDisclaimerContents()
    {
        return cy.get('.desc > i')
    }
} export default HomePage