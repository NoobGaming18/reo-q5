// scraper.js
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const urls = [
    'https://sanand0.github.io/tdsdata/js_table/?seed=73',
    'https://sanand0.github.io/tdsdata/js_table/?seed=74',
    'https://sanand0.github.io/tdsdata/js_table/?seed=75',
    'https://sanand0.github.io/tdsdata/js_table/?seed=76',
    'https://sanand0.github.io/tdsdata/js_table/?seed=77',
    'https://sanand0.github.io/tdsdata/js_table/?seed=78',
    'https://sanand0.github.io/tdsdata/js_table/?seed=79',
    'https://sanand0.github.io/tdsdata/js_table/?seed=80',
    'https://sanand0.github.io/tdsdata/js_table/?seed=81',
    'https://sanand0.github.io/tdsdata/js_table/?seed=82',
  ];

  let totalSum = 0;

  for (const url of urls) {
    try {
      await page.goto(url, { waitUntil: 'networkidle' });
      
      // Scrape all numbers from the table cells (<td>)
      const numbers = await page.$$eval('td', tds => 
        tds.map(td => parseFloat(td.textContent.trim())).filter(num => !isNaN(num))
      );
      
      const pageSum = numbers.reduce((acc, curr) => acc + curr, 0);
      totalSum += pageSum;
    } catch (error) {
      console.error(`Failed to process ${url}:`, error);
    }
  }

  console.log(`The total sum of all numbers in the tables is: ${totalSum}`);

  await browser.close();
})();
