// Open Katalon page
// Click Make Appoitment button
// ---> Create KatalonLoginPage <---
// Input username
// Input Password
// Click login button
// ---> Create KatalonMakeAnappoitmentPage <---
// Select facility Seoul CURA
// Check Apply for hospital
// Select Medicaid
// Open widget, select date
// set date 30th of August
// Add some comment
// Click book appoitment button
// ---> Create KatalonSummaryPage<---
// Validate that previously added values have been correctly

import KatalonLoginPage from "../pageObjects/KatalonLoginPage";
import KatalonMakeAnappoitmentPage from "../pageObjects/KatalonMakeAnappoitmentPage";
import KatalonSummaryPage from "../pageObjects/KatalonSummaryPage";

describe("Katalon QA", () => {
  beforeEach(() => {
    KatalonLoginPage.visit();
    KatalonLoginPage.makeAppointmentButton.click();
    KatalonLoginPage.username.type("John Doe");
    KatalonLoginPage.password.type("ThisIsNotAPassword");
    KatalonLoginPage.login.click();
  });

  it("Make appointment", () => {
    KatalonMakeAnappoitmentPage.facility.select("Seoul CURA Healthcare Center");
    KatalonMakeAnappoitmentPage.hospitalReadmission.check();
    KatalonMakeAnappoitmentPage.applyForPorgram("Medicaid").check();
    KatalonMakeAnappoitmentPage.calendarButton.click();
    KatalonMakeAnappoitmentPage.calendarDayNodes.contains(30).click();
    KatalonMakeAnappoitmentPage.commentsField
      .click({ force: true })
      .type("Some comment");
    KatalonMakeAnappoitmentPage.bookAppointmentButton.click();

    KatalonSummaryPage.summary.contains("Seoul CURA Healthcare Center");
    KatalonSummaryPage.summary.contains("Yes");
    KatalonSummaryPage.summary.contains("30/08/2022");
    KatalonSummaryPage.summary.contains("Some comment");
  });
});
