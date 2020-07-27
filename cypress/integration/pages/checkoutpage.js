class CheckoutPage
{
    async getMidtransAmount()
    {
        return cy.get('.input > .text-right')
    }

    async fillMidtransNewAmpount(newAmount)
    {
        await cy.get('.input > .text-right').clear()

        await cy.get('.input > .text-right').type(newAmount)
    }

    async totalAmount()
    {
        return cy.get('tr.total > .amount')
    }

    getcustomerName()
    {
        return cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input')
    }

    getEmail()
    {
        return cy.get('[data-reactid=".0.0.1.0.3.0.0.1"] > .input > input')
    }
    
    getPhone()
    {
        return cy.get('[data-reactid=".0.0.1.0.3.0.0.2"] > .input > input')
    }

    getCity()
    {
        return cy.get('[data-reactid=".0.0.1.0.3.0.0.3"] > .input > input')
    }

    getAddress()
    {
        return cy.get('textarea');
    }

    getPostalCode()
    {
        return cy.get('[data-reactid=".0.0.1.0.3.0.0.5"] > .input > input')
    }
    getCheckoutButton()
    {
        return cy.get('.cart-checkout');
    }
}
export default CheckoutPage