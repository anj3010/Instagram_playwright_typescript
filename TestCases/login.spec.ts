// @ts-check
import{test , expect, Browser,Page} from '@playwright/test';
import LoginPage from '../Pages/LoginPage';
import MessengerPage from '../Pages/MessengerPage';


test.beforeEach(async ({ page }) => {
    await page.goto('https://www.instagram.com/')
  });

 

test('login to account', async ({page }) => {
    const loginPage = new LoginPage(page);
   await expect(page).toHaveTitle(/Instagram/);
   await loginPage.enterEmail();
   await loginPage.enterPassword();
   await loginPage.loginButton();

   const messengerPage = new MessengerPage(page);
    await messengerPage.notNow();
    await messengerPage.sendMessage();
   

});

