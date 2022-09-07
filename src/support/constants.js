const dataTable = (table) => table.hashes()[0];
const pageNum = (page) => `div[ng-click="vm.changePage(${page})"]`;
const addText = (str) => `text=${str}`;
const selectMeasurementValue = measurement => `md-content[aria-label=Measurement] :text("${measurement}")`;
const stateIsVegetable = isVegetable => `text=${isVegetable}`;
const selectIngredientSection = section => `.all-food-body :text("${section}")`;
const LIFEBASE_URL = "https://stage-dashboard.lifebase.solutions/#!/";
const EMAIL = 'input[name="email"]';
const INPUT_PASSWORD = 'input[name="password"]';
const PASSWORD = "Password";
const REPEAT_PASSWORD = 'input[name="repeatPassword"]';
const EYE = 'md-icon[md-svg-icon="eye-outline"]';
const INPUT_PIN = 'input[name="pincode"]';
const PIN = "Pin-code";
const SUBMIT = 'button[type="submit"]';
const COACH_LIST = "text=Coach list";
const ADD_COACH = "text=+ Add a new coach";
const FIRST_NAME = 'input[name="fname"]';
const LAST_NAME = 'input[name="lname"]';
const PHONE = 'input[name="cellPhone"]';
const ADDRESS = 'input[name="address1"]';
const CITY = 'input[name="city"]';
const STATE = 'md-select[name="state"]';
const CODE = 'input[name="zipCode"]';
const GIVE_DISCOUNT = "text=Allow coach to give discounts";
const DISCOUNT_SETUP = 'input[name="setupDiscountPercent"]';
const DISCOUNT_INVOICE = 'input[name="initialMembershipInvoice"]';
const DISCOUNT_RENEWAL = 'input[name="renewalDiscountPercent"]';
const COACH_CREATE = "text=Create account";
const SAVE = "Save";
const CLOSE = ".close_icon";
const PAGE_NUM = ".page-number";
const ADD_INGREDIENT = 'text=Add ingredient';
const SEARCH_INGREDIENT = 'input[name=searchQuickAdd]';
const ITEM_INGREDIENT = '.food-item';
const ADD_ITEM_BTN_INGREDIENT = '.food_item_add_btn';
const SELECT_MEASUREMENT = `#selectMeasurement`;
const AMOUNT_VALUE_INGREDIENT = `#amountValue`;
const AMOUNT_VEGGIES_VALUE_INGREDIENT = `#veggiesAmountValue`;
const SAVE_INGREDIENT = `.btns-container :text("Add")`;


module.exports = {
  dataTable,
  pageNum,
  addText,
  dataTable,
  selectMeasurementValue,
  stateIsVegetable,
  selectIngredientSection,
  ADD_INGREDIENT,
  SEARCH_INGREDIENT,
  ITEM_INGREDIENT,
  ADD_ITEM_BTN_INGREDIENT,
  SELECT_MEASUREMENT,
  AMOUNT_VALUE_INGREDIENT,
  AMOUNT_VEGGIES_VALUE_INGREDIENT,
  SAVE_INGREDIENT,
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
};
