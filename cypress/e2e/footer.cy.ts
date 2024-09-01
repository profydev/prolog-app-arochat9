import { version } from "package.json";

describe("Footer Bar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("has correct height on desktop", () => {
      const desktopFooterHeight = "60px"; // As defined in your CSS variables
      cy.get(".footerContainer").should(
        "have.css",
        "height",
        desktopFooterHeight,
      );
    });

    it("has all necessary links", () => {
      // check that each link leads to the correct page
      cy.get(".footerContainer")
        .contains("Docs")
        .should("have.attr", "href", "#");

      cy.get(".footerContainer")
        .contains("API")
        .should("have.attr", "href", "#");

      cy.get(".footerContainer")
        .contains("Help")
        .should("have.attr", "href", "#");

      cy.get(".footerContainer")
        .contains("Community")
        .should("have.attr", "href", "#");
    });

    it("displays the correct version information", () => {
      cy.get(".version").should("contain", `Version: ${version}`);
    });

    it("displays the logo", () => {
      cy.get(".logoContainer img").should(
        "have.attr",
        "src",
        "/icons/logo-small.svg",
      );
    });

    it("has correct height on desktop", () => {
      const desktopFooterHeight = "60px"; // As defined in your CSS variables
      cy.get(".footerBar").should("have.css", "height", desktopFooterHeight);
    });
  });

  context("mobile resolution", () => {
    beforeEach(() => {
      cy.viewport("iphone-8");
    });

    it("has correct height on mobile", () => {
      const mobileFooterHeight = "177px"; // As defined in your CSS variables
      cy.get(".footerContainer").should(
        "have.css",
        "height",
        mobileFooterHeight,
      );
    });
  });
});
