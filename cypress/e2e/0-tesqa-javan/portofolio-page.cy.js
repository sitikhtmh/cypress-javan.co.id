/// <reference types="cypress" />

describe("Check the filter function on the portfolio page", () => {
  beforeEach(() => {
    cy.visit("https://javan.co.id/portfolio");
    cy.url().should("include", "portfolio");
  });

  it("Should try to portfolio filter by client type 'Perguruan Tinggi Negeri'", () => {
    cy.get("#portfolio-btn-jenis-sistem").click();
    cy.get('[href="https://javan.co.id/portfolio?client_type_id=4"]').click({ force: true });
  });
  it("Should try to portfolio filter by client type 'Perbankan'", () => {
    cy.get("#portfolio-btn-jenis-sistem").click();
    cy.get('[href="https://javan.co.id/portfolio?client_type_id=5"]').click({ force: true });
  });
});
