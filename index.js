import { chromium } from 'playwright'
import { checkStock, shops } from './shop.js';
// import { expect } from '@playwright/test'

(async() => {
  const browser = await chromium.launch()
  console.log(shops);
  for (const shop of shops) {
    const result = await checkStock(browser, shop);
    console.log({result});
  }
  console.log("star scraping 1");
})()
