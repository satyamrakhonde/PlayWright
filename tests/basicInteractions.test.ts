import { expect, test } from "@playwright/test";


//use test.only instead of test to run a particular test case
// test('Interaction with inputs', async ({ page }) => {


//     await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
//     const messageInput = page.locator("input#user-message");
//     // const messageInput = page.locator('xpath=//*[@id="user-message"]');
//     await messageInput.scrollIntoViewIfNeeded();
//     // console.log(await messageInput.getAttribute("placeholder"));
//     await messageInput.getAttribute("placeholder");
//     expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");
//     console.log(await messageInput.inputValue());

//     await messageInput.type("Hi Satyam");
//     console.log('after entering data' + await messageInput.inputValue());
    
// });

// test('Sum', async({ page }) =>{

//     await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
//     const sum1input = page.locator("#sum1");
//     const sum2input = page.locator("#sum2");

//     const getValuesBtn = page.locator("//button[text()='Get values']");
//     let num1 = 121;
//     let num2 = 546;
//     await sum1input.type("" + num1);
//     await sum2input.type("" + num2); //string interpolation
//     await getValuesBtn.click()
//     // const result = page.locator("#addmessage");
//     // console.log(await result.textContent());

//     let expectedResult = num1 + num2;
//     // expect(result).toHaveText("" + expectedResult);
//     // expect(result).toHaveValue("" + expectedResult);

//     await expect(page.locator('#addmessage')).toHaveText(''+expectedResult);
// });


test('CheckBox test', async({ page }) =>{

    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const singleCheckbox = page.locator("id=isAgeSelected");
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    await expect(singleCheckbox).toBeChecked(); //state will changed unchecked to checked ..assertion
    // await expect(page.locator('#txtAge')).toHaveText('Success - Check box is checked');
    
});