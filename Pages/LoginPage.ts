import {Page} from "@playwright/test";

export default class LoginPage{


  constructor (public page: Page){

  }

  async loginButton(){
       const login = await this.page.locator('button[type="submit"]');
       await login.click();
  }
 
  async enterEmail() {
    const emailfield = await this.page.locator('input[name="username"]');
    // Replace with your user id
    await emailfield.fill("email@gmail.com");
  }


  async enterPassword() {
   const passwordField = await this.page.locator('input[name="password"]');
   // password can't be shared just demo password
    await passwordField.fill('123478')
  }


}
