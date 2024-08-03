import {expect, Page} from "@playwright/test";
export default class MessengerPage{

    constructor (public page: Page){

    }

    async notNow() {
        const notNow = await this.page.getByText('Not now');
        // await expect(notNow).toBeVisible()
        notNow.click();
        await this.page.getByText('Not now').click();
    }

    async sendMessage() {
        await this.page.locator('svg[aria-label="Messenger"]').click();
        
        await this.page.getByText('Nikhil Singh').click();
    
        const message = await this.page.locator('div[aria-label="Message"]');
        await message.fill("hello");
    
        await this.page.getByText('Send').click();
        // await expect(this.page.getByText('just now')).toBeVisible();
        await expect(this.page.locator('div[aria-label="Message"]')).toBeEnabled();
    
    }
}