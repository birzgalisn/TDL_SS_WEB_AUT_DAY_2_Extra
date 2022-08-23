import BasePage from "./basePage";

class KatalonSummaryPage extends BasePage {
  static path = "";

  static get summary() {
    return cy.get("div.col-xs-offset-2");
  }

  static get menu() {
    return cy.get("#menu-toggle");
  }

  static get menuOptions() {
    return cy.get(".sidebar-nav");
  }

  static get message() {
    return cy.get(".col-sm-12 > p");
  }
}

export default KatalonSummaryPage;
