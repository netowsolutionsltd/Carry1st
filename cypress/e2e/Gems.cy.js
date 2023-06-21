import {Gems} from "../fixtures/selectors.js";
const access = require ('./ValidLogin.cy.js')

describe("Gems-Given i am in Gams page", function () {
    beforeEach( function () {
        cy.visit('/')
        access.validLogin();
    })

    it.skip("Gems-used should be able to view Gems page", function () {
        cy.get(Gems.GemsBtn).click()
        cy.get(Gems.BalanceBtn).should('be.visible')
    })

it.skip("Gems-I should able to view Transaction history",function(){
   cy.get(Gems.GemsBtn).click()
   cy.get(Gems.TransactionHistoryBtn).click()
   cy.get(Gems.SearchField).type('Airtime',{force:true})
   cy.get(Gems.backbtn).click()
})

it("Gems-I should able to spend Gems",function(){
    cy.get(Gems.GemsBtn).click()
    cy.get(Gems.SpendGemsBtn).click()
    cy.get(Gems.SeeAllBtn).should('be.visible')
    //cy.get(Gems.ShopNowBtn).click()
    cy.get(Gems.Carry1stGemsBtn).click()
    cy.get(Gems.ItemBtn).click()
    cy.get(Gems.SaveForNeedTimeBtn).click()
    cy.get(Gems.AddToCartBtn).click()
    cy.wait(7000)
    cy.get(Gems.CheckOutNowBtn).click()
    cy.get(Gems.DeleteBtn).click()
    cy.get(Gems.RemoveBtn).click()
})

it.skip("Gems-I should able to Transfer Gems",function(){
    cy.get(Gems.GemsBtn).click()
    cy.get(Gems.TransferGemsBtn).click()
    cy.get(Gems. RecipientEmailBtn).type('goodgold48@gmail.com',{force: true})
    cy.get(Gems.GemsAmountBtn).type('0')
    cy.get(Gems.TransferBtn).click()
})

})