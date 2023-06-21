import {ShoppingCart,PaymentDetails} from "../fixtures/selectors.js";
const access = require ('./ValidLogin.cy.js')

describe("Shopping cart-Given i am in dashboard", function () {
    before( function () {
        cy.visit('/')
        access.validLogin();
    })
    it("Shopping cart-used should be able to verify shopping page", function () {
        cy.get(ShoppingCart.ShoppingCartBtn).click()
        cy.get(ShoppingCart.ContinueShopingBtn).click()
        cy.get(ShoppingCart.ItemBtn).click()
        // cy.get(ShoppingCart.SeeLessBtn).click()
        // cy.get(ShoppingCart.SeeMoreBtn).click()
        cy.get(ShoppingCart.ItemBtn2).click({force: true})
        cy.get(ShoppingCart.QuantityBtn).click()
       // cy.get(ShoppingCart.ValidEmailFiled).type('')
        cy.get(ShoppingCart.SaveForNeedTimeBtn).click()
        cy.get(ShoppingCart.AddToCartBtn).click()
        cy.get(ShoppingCart.CheckOutNowBtn).click()
        cy.get(ShoppingCart.ProccedToPayBtn).click()
        cy.get(ShoppingCart.BankTransferBtn).click({force: true})
        cy.get(ShoppingCart.SelectBankBtn).click({force: true})
        cy.wait(5000)
        cy.get(ShoppingCart.PayWithAlertByWemaBtn).click({force: true})
        cy.wait(4000)
    })


    it("Shopping cart-used should be able to purchase game", function () {
        cy.get(PaymentDetails.FirstNameField).type('Good')
        cy.get(PaymentDetails.Surname).type('Bad')
        cy.get(PaymentDetails.EmailField).type('Good@yopmail.com')
        cy.get(PaymentDetails.PhoneNumberField).type('07067584936')
        cy.get(ShoppingCart.MakePaymentBtn).click()
        cy.get(ShoppingCart.CancelBtn).click()
    })
})