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
      const desktopFooterHeight = "60px";
      cy.get("footer").should("have.css", "height", desktopFooterHeight);
    });

    it("has all necessary links", () => {
      // check that each link leads to the correct page
      cy.get("footer").contains("Docs").should("have.attr", "href", "#");

      cy.get("footer").contains("API").should("have.attr", "href", "#");

      cy.get("footer").contains("Help").should("have.attr", "href", "#");

      cy.get("footer").contains("Community").should("have.attr", "href", "#");
    });

    it("displays the correct version information", () => {
      cy.get("footer").contains(`Version: ${version}`).should("exist");
    });

    it("displays the logo", () => {
      cy.get("footer")
        .find("img")
        .should("have.attr", "src", "/icons/logo-small.svg");
    });
  });

  context("mobile resolution", () => {
    beforeEach(() => {
      cy.viewport("iphone-8");
    });

    it("has correct height on mobile", () => {
      const mobileFooterHeight = "177px"; // As defined in your CSS variables
      cy.get("footer").should("have.css", "height", mobileFooterHeight);
    });
  });
});
