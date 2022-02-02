/// <reference types="Cypress" />

describe("Contact Us Form Testing On a Test Store", () => {
    it("Should be able to submit the Contact Us form successfully", () => {
        //cypress code
        cy.visit('https://www.automationteststore.com')
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        // cy.xpath("//a[contains(@href,'contact')]").click()
        cy.get('#ContactUsFrm_first_name').type("Cypress")
        cy.get('#ContactUsFrm_email').type("cy-auto@cypress.com")
        cy.get('#ContactUsFrm_enquiry').type("This is test enquiry")
        cy.get('.col-md-6 > .btn').click()
    });
})