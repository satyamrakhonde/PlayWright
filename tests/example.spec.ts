import { test, expect, chromium } from '@playwright/test';

test('home page ', async ({page}) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);

//   // create a locator
//   const getStarted = page.locator('text=Get Started');

//   // Expect an attribute "to be strictly equal" to the value.
//   await expect(getStarted).toHaveAttribute('href', '/docs/intro');

//   // Click the get started link.
//   await getStarted.click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);

  const browser = await chromium.launch({
    headless: false
  })
  // ${encodeURIComponent(JSON.stringify(capabilities))}`);
  // const context = await browser.newContext();
  // const page = await context.newPage();

  await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
    await page.click("text=Login")
    // await page.click("'Login'")
    await page.fill("input[name='email']", "satyamrakhonde311@gmail.com")
    await page.fill("input[name='password']", "Satyam@311")
    await page.click("input[value='Login']");


    // const newContext = await browser.newContext();

    // const newPage = await newContext.newPage();
    //  await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
});



