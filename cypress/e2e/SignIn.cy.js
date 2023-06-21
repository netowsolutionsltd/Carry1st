import {SignIn} from "../fixtures/selectors.js";


describe("SignIn-Given i am in dashboard", function () {
    beforeEach( function () {
        cy.visit('/')
    })


      it("SignIn- used should be able to Sign in with google", function () {
        cy.get(SignIn.SignInBtn).click()
        cy.get(SignIn.SignInWithGoogle).click()
  });
  it.skip("SignIn_User should not be able to sign in with valid email and wrong password", function(){
    cy.get(SignIn.SignInBtn).click()
    cy.get(SignIn.ContinueWithEmailBtn).click()
    cy.get(SignIn.EmailField).type('goodgold402@gmail.com')
    cy.get(SignIn.PasswordFeild).type('Good123')
    cy.get(SignIn.ViewPasswordIconBtn).click()
    cy.get(SignIn.SignInbtn).click()
    cy.wait('4000')
  })
  it.skip("SignIn_User should not be able to sign in with invalid email and valid password", function(){
    cy.get(SignIn.SignInBtn).click()
    cy.get(SignIn.ContinueWithEmailBtn).click()
    cy.get(SignIn.EmailField).type('olamideoscar1@gmail.com')
    cy.get(SignIn.PasswordFeild).type('Gold@123')
    cy.get(SignIn.ViewPasswordIconBtn).click()
    cy.get(SignIn.SignInbtn).click()
    cy.wait('4000')
  })

    it.skip("SignIn_User should not be able to sign in with valid email and valid password", function(){
      cy.get(SignIn.SignInBtn).click()
      cy.get(SignIn.ContinueWithEmailBtn).click()
      cy.get(SignIn.EmailField).type('olamideoscar1@gmail.com')
      cy.get(SignIn.PasswordFeild).type('Olamide!123')
      cy.get(SignIn.SignInbtn).click()
      cy.wait('4000')
  })
});