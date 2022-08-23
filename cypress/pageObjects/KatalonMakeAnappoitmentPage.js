import BasePage from "./basePage";

class KatalonMakeAnappoitmentPage extends BasePage {
  static path = "/#appointment";

  static get facility() {
    return cy.get("#combo_facility");
  }

  static get hospitalReadmission() {
    return cy.get("#chk_hospotal_readmission");
  }

  static applyForPorgram(name) {
    return cy.get(`#radio_program_${name.toLowerCase()}`);
  }

  static get calendarButton() {
    return cy.get(".input-group-addon");
  }

  static get calendarDayNodes() {
    return cy.get("td.day");
  }

  static get commentsField() {
    return cy.get("#txt_comment");
  }

  static get bookAppointmentButton() {
    return cy.get("#btn-book-appointment");
  }
}

export default KatalonMakeAnappoitmentPage;
