const { webkit, firefox,chromium} = require('playwright');
import {test, expect , Browser, Page} from '@playwright/test';
import { mkdirSync } from 'fs';

// test not based on Pom structure just for demo

// test('login test', async ()=>{
//     const browsers:Browser = await chromium.launch({headless: false});
//     const page:Page = await browsers.newPage();
//     await page.goto('https://www.instagram.com/');
//     const emailId = await page.locator('input[name="username"]');
//     const password = await page.locator('input[name="password"]');
//     const loginbutton = await page.locator('button[type="submit"]');

//     await emailId.fill('mishrapampam319@gmail.com');
//     await password.fill('1234');
//     await loginbutton.click();
    
//     await page.getByText('Not now').click();
//     await page.getByText('Not now').click();
//     const messenger = await page.locator('svg[aria-label="Messenger"]');
//     await messenger.click();
//     await page.getByText('Nikhil Singh').click();

//     const message = await page.locator('div[aria-label="Message"]');
//     await message.fill("hello");

//     await page.getByText('Send').click();
//     await expect(page.getByText('just now')).toBeVisible();

//     await browsers.close();

// })
