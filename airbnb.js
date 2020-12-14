const axios = require('axios');
const cheerio = require('cheerio');
// const { parse } = require('dotenv/types');

const url = 'https://www.airbnb.com/s/austin/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&source=structured_search_input_header&search_type=search_query'



// function getAirBnbData (){

// getMainPage(url).then((html)=>{
// console.log('-----------')

// const obj = parseHTML(html)
// return obj
// // console.log(obj)
// })  
// }

function getData(){
return new Promise ((resolve,reject)=>{
  getMainPage(url).then((html)=>{
  const Obj = parseHTML(html)
  resolve(Obj)
}).catch((error)=>{ reject(error)})
})
}

async function getMainPage(url) {
try{
 const response = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1' }  })
 return response.data
//  return data = parseHTML(HTML)
 
}
catch (error){
console.log(error)
}
}

function parseHTML (html) {
  const dataArray=[]
  const $ = cheerio.load(html)
  $('._8ssblpx').each((index,element)=>{
  const title=$(element).find('._bzh5lkq').text()
  const description=$(element).find('._kqh46o').text()
  const price=$(element).find('._1p7iugi').html()
  const link=$(element).find('._1048zci').find('a').attr('href')
  const image=$(element).find('._1048zci').find('img').attr('src')
  // console.log('-------DATA------------')
  // console.log(title)
  // console.log(description)
  // console.log(price)
  // console.log(link)
  // console.log(image)
  dataObj = {
    source: 'airbnb',
    title: title,
    description: description,
    price: price,
    link: `https://airbnb.com${link}`,
    image: image, 
  }
dataArray.push(dataObj)

  })
 
  return dataArray
}

module.exports = {
  // getMainPage: getMainPage,
  getData : getData
}

