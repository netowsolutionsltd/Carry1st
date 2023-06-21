import {Register, SignIn} from "../fixtures/selectors.js";

describe("Register-Given i am in sign in page", function () {
    beforeEach( function () {
        cy.visit('/')
    })
    it.skip("Register-User should not be register with invalid information",function(){
        cy.get(SignIn.SignInBtn).click()
        cy.get(Register.RegisterBtn).click().should('be.visible')
        cy.get(Register.ContiueWithEmailBtn).click()
        cy.get(Register.EmailFieldBtn).type('good.com')
        cy.get(Register.PasswordFieldBtn).type('Road@123')
        cy.get(SignIn.ViewPasswordIconBtn).click().should('be.visible')
    })
    it.skip("Register-User should not be register with invalid information",function(){
        cy.get(SignIn.SignInBtn).click()
        cy.get(Register.RegisterBtn).click().should('be.visible')
        cy.wait(2000)
        cy.get(Register.ContiueWithEmailBtn).click()
        cy.get(Register.EmailFieldBtn).type('goodgold402@gmail.com', {force: true})
        cy.get(Register.PasswordFieldBtn).type('Gold@123')
        cy.get(Register.CreateAnAccountBtn).click()
        cy.get(Register.VerifyAndEarnPoint)
    })
});