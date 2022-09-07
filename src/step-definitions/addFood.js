const { Given, Then, When } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { config } = require('../../infrastructure/config');
const { dataTable } = require('../support/constants');

Then('I open {string} list', async function(btnName){  
    await page.waitForURL(await page.url() + 'entity-dashboard', {waitUntil: 'load'});
    await page.locator(`text=${btnName}`).click();
});

Given('I select {string}', async function(btnName){   
    await page.locator(`text=${btnName}`).click();
});

Then('I add food details', async function(table){   
    const row = dataTable(table);

    await page.fill('input[name=product]', row.Product);
    await page.click('md-select-value');
    await page.click(`text=${row.Units}`)
    await page.fill('#amount', row.Amount);
});

Given('I add Nutrients', async function(table){   
    const row = dataTable(table);

    await page.fill('input[name=proteins]', row.Proteins);
    await page.fill('input[name=carbs]', row.Carbs);
    await page.fill('input[name=fats]', row.Fats);
    await page.fill('input[name=sugar]', row.Sugar);
    await page.fill('input[name=fiber]', row.Fiber);
    await page.fill('input[name=veggies]', row.Veggies);
    await page.fill('input[name=sodium]', row.Sodium);
});

Given('I add Additional Micro Nutrients', async function(table){   
    const row = dataTable(table);

    await page.click('button:has-text("Add nutrient")');
    await page.click(`#nutrientName`);
    await page.click(`md-option[ng-value=nutrient] :text("${row.Name}")`);
    await page.click(`#measurements`);
    await page.click(`md-option[ng-value=measurement] :text("${row.Measurement}")`);
    await page.click(`.md-dialog-container :text("+ Add")`);
    await page.fill('input[ng-model="nutrient.amount"]', row.Amount);
});

When('I save food', async function(){   
    await page.click('button#save-new-core-food-btn');
    await page.on('response', async res => {
        if (await res.url() === 'https://stage-api.lifebase.solutions/api/web/food/manual?type=core') {
            config.createdCoreFood = await res.json();
        }
    })
    await page.waitForSelector('.md-dialog-container', {state: 'visible'});
});

Then('I verify exists added food on page', async function(table){  
    const row = dataTable(table);
    const itemFood = await page.locator(`a[href="#!/edit-food/core/${config.createdCoreFood.id}"]`);
    await page.click('.close_icon');

    await expect(itemFood).toBeVisible();
    await expect(itemFood.locator('md-switch')).toHaveAttribute('aria-checked', row.StatusActive);
});

Given('I delete the food', async function(){  
    await page.click(`a[href="#!/edit-food/core/${config.createdCoreFood.id}"]`);
    await page.click('text=Delete');
    await page.click('md-dialog >> button:text("Delete")');
    await page.waitForSelector('md-dialog.saved-changes-dialog', {state: 'visible'});
});









