import {Profile} from "../fixtures/selectors.js";
const access = require ('./ValidLogin.cy.js')

describe("Profile-Given i am in profile page", function () {
    beforeEach( function () {
        cy.visit('/')
        access.validLogin();
    })
    it.skip("Profile-used should be able to View gems balance", function () {
      cy.wait(2000)
      cy.get(Profile.ProfileBtn).click()
      cy.get(Profile.GemsBtn).click()
      cy.get(Profile.BackBtn).click()
    })
    // it("Profile-used should be able to edit there personal information", function () {
    //   cy.get(Profile.PersonalInfornationTbn).click()
    //  })
     it("Profile-used should be able to change profile", function () {
      cy.get(Profile.ProfileBtn).click({force: true})
      cy.get(Profile.PersonalInfornationTbn).click()
       cy.get(Profile.UpdateBtn).click({force: true})
       cy.get(Profile.FirstnameBtn).click()
       cy.get(Profile.SurnameBtn).click()
       cy.get(Profile.UsernameBtn).click()
       cy.wait(2000)
       cy.get(Profile.CountryBtn).click()
       cy.get(Profile.SelectCountryBtn).click()
       cy.get(Profile.SaveBtn).click()
     })
     it.skip("Profile-used should be able to change email", function () {
        cy.get(Profile.ProfileBtn).click()
        cy.get(Profile.PersonalInfornationTbn).click()
        cy.get(Profile.EmailUpdateBtn).type('goodgold40@gmail.com',{force:true})
        cy.get(Profile.ChangeEmailField).type('goodgold40@gmail.com',{force:true})
        cy.get(Profile.ChangeEmailBtn).click({force: true})
        cy.get(Profile.LogOutBtn).click()
     })
     it.skip("Profile-used should be able to change password", function () {
      cy.get(Profile.ProfileBtn).click()
      cy.get(Profile.PersonalInfornationTbn).click()
        cy.get(Profile.passwordupdateBtn).click( {force: true})
        cy.get(Profile.CurrentPasswordField).type('Olamide@123',{force: true})
        cy.get(Profile.NewPasswordField).type('Olamide!123',{force: true})
        cy.get(Profile.ConfirmNewPasswordField).type('Olamide!123', {force: true})
        cy.get(Profile.CurrentPasswordBtn).click()
     })
     it.skip("Profile-used should be able to change phone number", function () {
      cy.get(Profile.ProfileBtn).click()
      cy.get(Profile.PersonalInfornationTbn).click()
        cy.get(Profile.PhoneNumberUpdatebtn).click({force: true})
        cy.get(Profile.PhonenumberField).type('08067598764',{force: true})
        cy.get(Profile.PhonenumberBtn).click()
     })
     it.skip("Profile-used should be able to link unlinked account", function () {
      cy.get(Profile.ProfileBtn).click()
      cy.get(Profile.PersonalInfornationTbn).click()
        cy.get(Profile.LinkAccountBtn).click()
     })
     it.skip("Profile-used should be able to romove linked account", function () {
      cy.get(Profile.ProfileBtn).click({force: true})
      cy.get(Profile.PersonalInfornationTbn).click()
         cy.get(Profile.RemoveBtn).click({force: true})
      })
     it.skip("Profile-used should be able to sign out successfully", function () {
      cy.get(Profile.ProfileBtn).click()
      cy.get(Profile.PersonalInfornationTbn).click()
        cy.get(Profile.SignOutBtn).click()
     })
})
