const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
// main url for fetch all the html from 
const url = 'https://www.vrbo.com/search/keywords:austin-texas-united-states-of-america/arrival:2020-12-22/departure:2021-01-27?petIncluded=false'



function getData(){
return new Promise ((resolve,reject)=>{
  getMainPage(url).then((html)=>{
  const Obj = parseHTML(html)
  resolve(Obj)
}).catch((error)=>{ reject(error)})
})
}

// function using axios to fetch the main url page for a the given city 
async function getMainPage(url) {
  try {
    const browser = await puppeteer.launch({headless: false});
    const [page] = await browser.pages();
    await page.setViewport({
      width: 1900,
      height: 2600,
      deviceScaleFactor: 1,
    });

    await page.goto('https://www.vrbo.com/search/keywords:austin-texas-united-states-of-america/arrival:2020-12-22/departure:2021-01-27?petIncluded=false', 
    { waitUntil: 'networkidle0' });
    const data = await page.evaluate(() => document.querySelector('*').outerHTML);



    await browser.close();
    return data

  } catch (err) {
    console.error(err);
  }
}

  // try{
//  const response = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1' }  })
//  return response.data
// //  return data = parseHTML(HTML)
 
// }
// catch (error){
// console.log(error)
// }}

// function parses the html from the axios call and parse it for the requied fields.It constructs a JSON object to be returned 
function parseHTML (html) {
  const dataArray=[]


  const $ = cheerio.load(html)
  // console.log(html)
  // console.log('-------START--------------')
  // const test = $('.Hit').html()
  // console.log(test)
  // console.log('-----------END----------')

  $('.Hit').each((index,element)=>{
     const title = $(element).find('.HitInfo__headline').text()
     const details = $(element).find('.HitInfo__details').text()
    //  const link = $(element).find('a').html()
    const image = $(element).find('.SimpleImageCarousel__image--cur').attr('style')
     const price = $(element).find('.DualPrice__amount').html()
    console.log('---------------------')
    
    console.log(title)
    console.log(details)
    console.log(price)
    console.log(image)

   })


 
  // const locationStr=$(html).find('._1lbq8dg').find('h1').text()
  // const location=locationStr.split('Stays in ')

//   $('._8ssblpx').each((index,element)=>{ 
//   const title=$(element).find('._bzh5lkq').text()
//   const description=$(element).find('._kqh46o').text()
//   const priceStr=$(element).find('._1p7iugi').html()
//   const price=priceStr.split('</span>$')
//   const link=$(element).find('._1048zci').find('a').attr('href')
//   const image=$(element).find('._1048zci').find('img').attr('src')
//   dataObj = {
//     source: 'vrbo',
//     location: '',
//     title: '',
//     description: '',
//     price: price[1],
//     link: ``,
//     image: '', 
//   }
// dataArray.push(dataObj)

//   })
 
  return dataArray
}

module.exports = {
  getData : getData
}

