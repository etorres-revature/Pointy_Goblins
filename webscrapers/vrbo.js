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
    const browser = await puppeteer.launch({headless: true});
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
     const bedrooms =$(element).find('.Details__bedrooms').html()
     const bathrooms=$(element).find('.Details__bathrooms').html()
     const halfbath=$(element).find('.Details__halfbathrooms').html()
     const sleeps=$(element).find('.Details__sleeps').html()
    //  const description = $(element).find('.HitInfo__details').text()
    const description = `${bedrooms} ${bathrooms} ${halfbath} ${sleeps}`
    const link = $(element).find('.media-flex__content').attr('href')
    const imageSrt = $(element).find('.SimpleImageCarousel__image--cur').attr('style')
    let image = imageSrt.split('url("')
    image = image[1].replace('");','')
    const priceSrt = $(element).find('.DualPrice__amount').html()
    const price = priceSrt.replace('$','')
    const location = $(element).find('.GeoDistance__text').text()

    // console.log('---------------------')
    
    // console.log(title)
    // console.log(description)
    // console.log(price)
    // console.log(image)

      dataObj = {
    source: 'vrbo',
    location: location,
    title: title,
    description: description,
    // bedrooms: bedrooms,
    // bath: bathrooms,
    // halfbath: halfbath,
    // sleeps: sleeps,
    price: price,
    link: `https://www.vrbo.com${link}`,
    image: image, 
  }
  dataArray.push(dataObj)
   })

  return dataArray
}

module.exports = {
  getData : getData
}

