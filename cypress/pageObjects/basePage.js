/// <reference types="cypress" />

class BasePage {
  static path = "";
  static baseUrl = "https://katalon-demo-cura.herokuapp.com";

  static visit() {
    return cy.visit(this.baseUrl + this.path);
  }
}

export default BasePage;
