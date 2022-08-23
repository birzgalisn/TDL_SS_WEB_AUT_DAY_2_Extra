// Input username
// Input Password
// Click login button
// Press stack/burger icon
// Find element that has active class and
// Validate it with should("have.class", "active")
// Click history
// Validate that there are no appoitments

import BasePage from "../pageObjects/basePage";
import KatalonLoginPage from "../pageObjects/KatalonLoginPage";
import KatalonSummaryPage from "../pageObjects/KatalonSummaryPage";

describe("Katalon QA", () => {
  beforeEach(() => {
    KatalonLoginPage.visit();
    KatalonLoginPage.makeAppointmentButton.click();
    KatalonLoginPage.username.type("John Doe");
    KatalonLoginPage.password.type("ThisIsNotAPassword");
    KatalonLoginPage.login.click();
  });

  it("There are not active appointments", () => {
    BasePage.menu.click();
    BasePage.menuOptions.contains("History").click();
    KatalonSummaryPage.message.should("have.text", "No appointment.");
  });
});
