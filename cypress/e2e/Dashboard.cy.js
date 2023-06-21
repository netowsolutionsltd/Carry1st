import {Dashboard} from "../fixtures/selectors.js";
const access = require ('./ValidLogin.cy.js')

describe("Dashboard-Given i am in dashboard", function () {
    before( function () {
        cy.visit('/')
        access.validLogin();
    })
    it("Dashboard-used should be able to view Gems page", function () {
       cy.get(Dashboard.GamsBtn).click().should('be.visible')
       //cy.get(Dashboard.BackBtn).click()
    })

       it("Dashboard-used should be able to view Reward page", function () {
        cy.get(Dashboard.RewardBtn).click().should('be.visible')
        //cy.get(Dashboard.BackBtn).click()
       })

       it("Dashboard-used should be able to view Contact Uds page", function () {
        cy.get(Dashboard.ContactUs).click().should('be.visible')
       })


       
     it("Dashboard-used should be able to view About Us", function () {
        cy.get(Dashboard.AboutUsBtn).click().should('be.visible')
     })

    it("Dashboard-used should be able to search for product", function () {
      cy.get(Dashboard.SearchField).type('Mtn airtime').should('be.visible')
    })

    it("Dashboard-used should be able to view Profile page", function () {
        cy.get(Dashboard.ProfileBtn).click().should('be.visible')
     })
    it("Dashboard-used should be able to view shoping page", function () {
        cy.get(Dashboard.Shoping).click().should('be.visible')
    })
    
    it("Dashboard-used should be able to view Gams balance", function () {
        cy.get(Dashboard.Gemsbalance).click()
       // cy.get(Dashboard.MyGems).click()
 })
})