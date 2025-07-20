// scraper.js
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const urls = [
    'https://apis.data.go.kr/B551011/ODMS_STAT_13/callStat13Api?serviceKey=c%2B52952rpj5v12Lp0ObG0A2nNeaC3v5Yt2SCpTbrs4I3SnvboJz5Sj%2F5wXG3aJps2Z2VqioeY7o8ER7Lp2gP%2FA%3D%3D&pageNo=1&numOfRows=10&returnType=XML&seed=73',
    'https://apis.data.go.kr/B551011/ODMS_STAT_13/callStat13Api?serviceKey=c%2B52952rpj5v12Lp0ObG0A2nNeaC3v5Yt2SCpTbrs4I3SnvboJz5Sj%2F5wXG3aJps2Z2VqioeY7o8ER7Lp2gP%2FA%3D%3D&pageNo=1&numOfRows=10&returnType=XML&seed=74',
    'https://apis.data.go.kr/B551011/ODMS_STAT_13/callStat13Api?serviceKey=c%2B52952rpj5v12Lp0ObG0A2nNeaC3v5Yt2SCpTbrs4I3SnvboJz5Sj%2F5wXG3aJps2Z2VqioeY7o8ER7Lp2gP%2FA%3D%3D&pageNo=1&numOfRows=10&returnType=XML&seed=75',
    'https://apis.data.go.kr/B551011/ODMS_STAT_13/callStat13Api?serviceKey=c%2B52952rpj5v12Lp0ObG0A2nNeaC3v5Yt2SCpTbrs4I3SnvboJz5Sj%2F5wXG3aJps2Z2VqioeY7o8ER7Lp2gP%2FA%3D%3D&pageNo=1&numOfRows=10&returnType=XML&seed=76',
    'https://apis.data.go.kr/B551011/ODMS_STAT_13/callStat13Api?serviceKey=c%2B52952rpj5v12Lp0ObG0A2nNeaC3v5Yt2SCpTbrs4I3SnvboJz5Sj%2F5wXG3aJps2Z2VqioeY7o8ER7Lp2gP%2FA%3D%3D&pageNo=1&numOfRows=10&returnType=XML&seed=77',
    'https://apis.data.go.kr/B551011/ODMS_STAT_13/callStat13Api?serviceKey=c%2B52952rpj5v12Lp0ObG0A2nNeaC3v5Yt2SCpTbrs4I3SnvboJz5Sj%2F5wXG3aJps2Z2VqioeY7o8ER7Lp2gP%2FA%3D%3D&pageNo=1&numOfRows=10&returnType=XML&seed=78',
    'https://apis.data.go.kr/B551011/ODMS_STAT_13/callStat13Api?serviceKey=c%2B52952rpj5v12Lp0ObG0A2nNeaC3v5Yt2SCpTbrs4I3SnvboJz5Sj%2F5wXG3aJps2Z2VqioeY7o8ER7Lp2gP%2FA%3D%3D&pageNo=1&numOfRows=10&returnType=XML&seed=79',
    'https://apis.data.go.kr/B551011/ODMS_STAT_13/callStat13Api?serviceKey=c%2B52952rpj5v12Lp0ObG0A2nNeaC3v5Yt2SCpTbrs4I3SnvboJz5Sj%2F5wXG3aJps2Z2VqioeY7o8ER7Lp2gP%2FA%3D%3D&pageNo=1&numOfRows=10&returnType=XML&seed=80',
    'https://apis.data.go.kr/B551011/ODMS_STAT_13/callStat13Api?serviceKey=c%2B52952rpj5v12Lp0ObG0A2nNeaC3v5Yt2SCpTbrs4I3SnvboJz5Sj%2F5wXG3aJps2Z2VqioeY7o8ER7Lp2gP%2FA%3D%3D&pageNo=1&numOfRows=10&returnType=XML&seed=81',
    'https://apis.data.go.kr/B551011/ODMS_STAT_13/callStat13Api?serviceKey=c%2B52952rpj5v12Lp0ObG0A2nNeaC3v5Yt2SCpTbrs4I3SnvboJz5Sj%2F5wXG3aJps2Z2VqioeY7o8ER7Lp2gP%2FA%3D%3D&pageNo=1&numOfRows=10&returnType=XML&seed=82',
  ];

  let totalSum = 0;

  for (const url of urls) {
    await page.goto(url);
    const numbers = await page.$$eval('td', tds => tds.map(td => parseFloat(td.textContent)).filter(Number.isFinite));
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    totalSum += sum;
  }

  console.log(`The total sum of all numbers in the tables is: ${totalSum}`);

  await browser.close();
})();

