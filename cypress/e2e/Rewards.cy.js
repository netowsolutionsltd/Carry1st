import {Rewards} from "../fixtures/selectors.js";
const access = require ('./ValidLogin.cy.js')

describe("SignIn-Given i am in Reward page", function () {
    beforeEach( function () {
        cy.visit('/')
        access.validLogin();
    })
    it("Rewards-used should be able to view Gems page", function () {
        cy.get(Rewards.RewardsBtn).click()
        
    })
    it("Rewards-used should be able to Shop", function () {
        cy.get(Rewards.RewardsBtn).click()
        cy.get(Rewards.ShopNowBtn).click()
        cy.get(Rewards.ItemBtn).click( {force: true})
        cy.get(Rewards.SeeMoreBtn).click( {force: true})
        cy.get(Rewards.AirtimeBtn).click( {force: true})
        cy.get(Rewards.Quantity1Btn).click()
        //cy.get(Rewards.ValidPhoneNumberField).type('07098056436')
        cy.get(Rewards.SaveForNeedTimeBtn).click()
        cy.get(Rewards.AddToCartBtn).click()
        cy.wait(7000)
        cy.get(Rewards.CheckOutNowBtn).click()
        cy.get(Rewards.Quantity2Btn).click()
        cy.get(Rewards.DeleteBtn).click()
        cy.get(Rewards.RemoveBtn).click()
    })


})