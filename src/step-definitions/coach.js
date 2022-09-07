const { Given, When, Then } = require("@cucumber/cucumber");
const {
  addCoach,
  addInfo,
  addAddress,
  discounts,
  addPassword,
  coachExists,
  navigate,
} = require("./../page_object/coach.page");

Given("I open page on ui", async () => {
  await navigate()
});

Given("Add a new coach", async (data) => {
  await addCoach(data);
});

When("Additional Information", async (data) => {
  await addInfo(data);
});

When("Filling in address fields", async (data) => {
  await addAddress(data);
});

Then("Discounts", async (data) => {
  await discounts(data);
});

Then("I add password", async (data) => {
  await addPassword(data);
});

Then("I verify if coach exists", async (data) => {
  await coachExists(data);
});
