/// <reference types="cypress" />

describe("Login & Logout Test", () => {
  beforeEach(() => {
    cy.visit("https://javan.co.id");
    cy.url().should("include", "javan.co.id");
  });
  it("Should try to login with invalid data", () => {
    cy.contains("Let’s Learn & Train!").scrollIntoView().should("be.visible");
    cy.get(":nth-child(1) > a > .bg-blue-600").click();
  });
});
