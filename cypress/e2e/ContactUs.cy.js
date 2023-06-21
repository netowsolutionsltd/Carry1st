import {ContactUs} from "../fixtures/selectors.js";
const access = require ('./ValidLogin.cy.js')

describe("SignIn-Given i am in contact page", function () {
    beforeEach( function () {
        cy.visit('/')
        access.validLogin();
    })
    // it("Gems-used should be able to send feed back", function () {
    //     cy.get(ContactUs.ContactUs).click()
    //     cy.get(ContactUs.EmailField).type('olamideoscar1@gmail.com')
    //     cy.get(ContactUs.SubjectField).type('Product is out of stock')
    //     cy.get(ContactUs.MessageBox).type('45gty')
    //     cy.get(ContactUs.Carry1stShopBtn).click()
    // })
    //it("Gems-used should be able to search for articles", function () {
        //cy.get(ContactUs.ContactUs).click()
       // cy.get(ContactUs.SearchArticleBtn).click()
        // cy.get(ContactUs.SearchField).click()
    //})
    it("Gems-used should be able to verify get in touch page", function () {
        cy.get(ContactUs.ContactUs).click()
        cy.get(ContactUs.GetInTouchHere).click()
        cy.get(ContactUs.Carry1stShopBtn).click()
    })
})