import {SignIn} from "../fixtures/selectors";
    export const validLogin = () => {
        cy.get(SignIn.SignInBtn).click()
        cy.get(SignIn.ContinueWithEmailBtn).click()
        cy.get(SignIn.EmailField).type('olamideoscar1@gmail.com')
        cy.get(SignIn.PasswordFeild).type('Olamide!123')
        cy.get(SignIn.SignInbtn).click()
    }