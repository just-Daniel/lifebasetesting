const { expect } = require("@playwright/test");
const {
  dataTable,
  pageNum,
  addText,
  LIFEBASE_URL,
  EMAIL,
  INPUT_PASSWORD,
  PASSWORD,
  REPEAT_PASSWORD,
  EYE,
  INPUT_PIN,
  PIN,
  SUBMIT,
  COACH_LIST,
  ADD_COACH,
  FIRST_NAME,
  LAST_NAME,
  PHONE,
  ADDRESS,
  CITY,
  STATE,
  CODE,
  GIVE_DISCOUNT,
  DISCOUNT_SETUP,
  DISCOUNT_INVOICE,
  DISCOUNT_RENEWAL,
  COACH_CREATE,
  SAVE,
  CLOSE,
  PAGE_NUM,
} = require("./../support/constants");

const navigate = async () => {
  await page.goto(LIFEBASE_URL);
};

const login = async (username, password) => {
  await page.fill(EMAIL, username);
  await page.fill(INPUT_PASSWORD, password);
  await page.click(SUBMIT);
};

const addCoach = async (data) => {
  const row = dataTable(data);

  await page.waitForNavigation();
  await page.click(COACH_LIST);
  await page.waitForTimeout(2000);
  await page.click(ADD_COACH);
  await page.fill(FIRST_NAME, row.FName);
  await page.fill(LAST_NAME, row.LName);
};

const addInfo = async (data) => {
  const row = dataTable(data);

  await page.fill(EMAIL, row.Email);
  await page.fill(PHONE, row.Phone);
};

const addAddress = async (data) => {
  const row = dataTable(data);

  await page.fill(ADDRESS, row.Address);
  await page.fill(CITY, row.City);
  await page.click(STATE);
  await page.click(addText(row.State));
  await page.fill(CODE, row.Code);
};

const discounts = async (data) => {
  const row = dataTable(data);

  await page.click(GIVE_DISCOUNT);
  await page.fill(DISCOUNT_SETUP, row.Setup);
  await page.fill(DISCOUNT_INVOICE, row.Invoice);
  await page.fill(DISCOUNT_RENEWAL, row.Renewal);
  await page.click(COACH_CREATE);
  await page.waitForNavigation();
};

const addPassword = async (data) => {
  const row = dataTable(data);

  await page.click(addText(row.Email));
  await page.click(addText(PASSWORD));
  await page.fill(INPUT_PASSWORD, row.Password);
  await page.fill(REPEAT_PASSWORD, row.Password);
  await page.click(EYE);
  await page.click(addText(SAVE));
  await page.click(CLOSE);
  await page.click(addText(PIN));
  await page.fill(INPUT_PIN, row.Pin);
  await page.click(addText(SAVE));
  await page.click(CLOSE);
  await page.click(COACH_LIST);
};

const coachExists = async (data) => {
  const row = dataTable(data);
  const pages = await page.locator(PAGE_NUM).count();

  if (pages > 1) {
    for (let i = 1; i <= pages; i++) {
      await page.locator(pageNum(i)).click();
      await page.waitForTimeout(2000);

      if ((await page.locator(addText(row.Email)).count()) > 0) {
        await expect(await page.locator(addText(row.Email))).toBeVisible();
        return;
      } else {
        if (i === pages) {
          await expect(await page.locator(addText(row.Email))).toBeVisible();
        }
      }
    }
  } else {
    await expect(await page.locator(addText(row.Email))).toBeVisible();
  }
};

module.exports = {
  navigate,
  login,
  addCoach,
  addInfo,
  addAddress,
  discounts,
  addPassword,
  coachExists,
};
