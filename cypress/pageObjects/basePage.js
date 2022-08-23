/// <reference types="cypress" />

class BasePage {
  static path = "";
  static baseUrl = "https://katalon-demo-cura.herokuapp.com";

  static visit() {
    return cy.visit(this.baseUrl + this.path);
  }

  static get menu() {
    return cy.get("#menu-toggle");
  }

  static get menuOptions() {
    return cy.get(".sidebar-nav");
  }
}

export default BasePage;
