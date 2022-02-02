/// <reference types="Cypress" />

describe("Contact Us Form Testing", () => {
    it("Should be able to submit the Contact Us form successfully", () => {
        //cypress code
        // cy.visit('https://www.webdriveruniversity.com')
        // cy.get('#contact-us > .thumbnail').click() 
        // cy.get('#contact-us').click({force: true}) 
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Cypress')
        cy.get('[name="last_name"]').type('Automation')
        cy.get('[name="email"]').type('cy-auto@cypress.com')
        cy.get('textarea.feedback-input').type('This is test comment')
        cy.get('[type="submit"]').click()
        // cy.get('[type="reset"]').click()
    });

    it("Should not be able to submit the Contact Us form successfully as all fields are required", () => {
        //cypress code
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Cypress')
        cy.get('[name="last_name"]').type('Automation')
        cy.get('textarea.feedback-input').type('This is test comment')
        cy.get('[type="submit"]').click()
    });
})