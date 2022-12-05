const {test,expect} = require('@playwright/test');

test('Browser context Playwright test',async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());

//step1 -open brower
//step2 -enter u/p 2 seconds
//step3 -click

});
test('Page Playwright test',async ({page}) =>
{
    await page.goto('https://google.com')
    //get title assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});

