const { Given, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { config } = require("../../infrastructure/config");
const { addIngredients, findRecipeOnPage } = require("../page_object/recipe");
const { dataTable } = require("../support/constants");

Given('I add recipe details', async function(table){   
    const row = dataTable(table);

    await page.click('#add-new-recipe-btn');
    await page.fill('input[name=recipeName]', row.Name);
    await page.fill('input[name=servingSize]', row.Servings);
    await page.fill('input[name=amount]', row.Amount);
    await page.click('md-select[name=measurement]');
    await page.click(`md-option[value=${row.Measurements}]`);

    if (!!row.Img) {
        const [fileChooser] = await Promise.all([
            page.waitForEvent('filechooser'),
            await page.click(`.upload-recipe-image-btn`)
        ]);
        await fileChooser.setFiles(row.Img);
    }

    await page.fill('textarea[name=description]', row.Instruction);
});

Given('I add Ingredients', async function(table){   
    await addIngredients(table, page);
});

Then('I save recipe', async function () {
    await page.click('#save-new-recipe-btn');

    const [recipeItem] = await Promise.all([
        page.waitForEvent('response')
    ]);
    config.recipeCreatedItem = await recipeItem.json();
})

Given('I verify exists recipe on page', async function(table) {
    const row = dataTable(table);

    const [allRecipesOnPage] = await Promise.all([
        page.waitForResponse('https://stage-api.lifebase.solutions/api/recipes?owners=all'),
        await page.waitForSelector('text=My Recipes', {state: 'visible'})
    ]);

    expect(await findRecipeOnPage((await allRecipesOnPage.json()))).toBeTruthy();
    await page.click(`pagination :text("${config.recipeCurrentPage + 1}")`);
    const recipeItem = await page.locator(`a[href="#!/edit-recipe/${config.recipeCreatedItem.id}"]`);
    await expect(recipeItem).toBeVisible();
    await expect(recipeItem.locator('md-switch')).toHaveAttribute('aria-checked', row.StatusActive);
})

Given('I delete the recipe', async function(){   
    await page.click(`a[href="#!/edit-recipe/${config.recipeCreatedItem.id}"]`);
    await page.click('text=Delete');
    await page.waitForSelector('.list', {state: 'visible'});
});
