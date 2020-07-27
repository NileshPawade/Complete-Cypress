/// <reference types="cypress" />

import HomePage from '../pages/HomePage'
import CheckoutPage from "../pages/checkoutpage"
const homepage = new HomePage();
const checkoutpage=new CheckoutPage()
context('To Verify home page details', () => {
let credential
  before(function(){
    cy.fixture('credentials')
      .then(function(data){
        credential = data;
      })
      
  })
  it('Home Page verification', async () => {

    let midtransAmount;
    let actualAmount
    await cy.visit(credential.url)
    midtransAmount=await homepage.getPillowPrice().invoke('text')
    await console.log(midtransAmount)
    await homepage.getBuyNowButton().should('be.visible').click()
    
  })
})