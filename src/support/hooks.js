const {
  BeforeAll,
  Before,
  AfterAll,
  After,
  setDefaultTimeout,
} = require("@cucumber/cucumber");
const { chromium } = require("playwright");

const { navigate } = require("../page_object/coach.page");

setDefaultTimeout(60 * 1000);

BeforeAll(async () => {
  global.browser = await chromium.launch({
    headless: false,
  });
});

AfterAll(async () => {
  await global.browser.close();
});

Before(async () => {
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

After(async () => {
  await global.page.close();
});
