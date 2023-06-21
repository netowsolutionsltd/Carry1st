import {ResetPassword,SignIn} from "../fixtures/selectors.js";

describe("SignIn-Given i am in Reset password page", function () {
    beforeEach( function () {
        cy.visit('/')
    })
    it("Reset Password-Used should able to reset password",function(){
        cy.get(SignIn.SignInBtn).click()
        cy.get(SignIn.ContinueWithEmailBtn).click()
        cy.wait(5000)
        cy.get(ResetPassword.ForgetYourPasswordbtn).click()
        cy.get(ResetPassword.emailfield).type('olamideoscar1@gmail.com')
        //cy.get(ResetPassword. ResetPasswordBtn).click({force: true})
        
    })
    })