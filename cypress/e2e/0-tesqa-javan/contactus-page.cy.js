/// <reference types="cypress" />

describe('Check Form Contact Functionality', () => {
    beforeEach(() => {
        cy.visit('https://javan.co.id')
        cy.url().should('include', 'javan.co.id')
        cy.get('.pr-8 > .text-base').click()
    })
    it('Should try to form contact with invalid data Full Name, Nickname, Phone/Whatsapp', () => {
        cy.contains('Contact Javan Cipta Solusi').should('be.visible')

        cy.get('#in_name').type('12345')
        cy.get('#in_nickname').type('1234')
        cy.get('#in_email').type('siti@gmail.com')
        cy.get('#in_phone').type('abcdefghi')
        cy.get('#in_institution').type('singgah sana')
        cy.get('#in_subject').select('Search Engine')
        //cy.get('#in_message').type('tes tes tes tes tes tes tes tes tes tes tes tes tes tes tes tes')
        //cy.get('.recaptcha-checkbox-checkmark').click()
        cy.get(':nth-child(10) > .card-btn-primary').click()
    })
})