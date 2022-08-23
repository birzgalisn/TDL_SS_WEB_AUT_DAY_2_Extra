import BasePage from "./basePage";

class KatalonSummaryPage extends BasePage {
  static path = "";

  static get summary() {
    return cy.get("div.col-xs-offset-2");
  }
}

export default KatalonSummaryPage;
