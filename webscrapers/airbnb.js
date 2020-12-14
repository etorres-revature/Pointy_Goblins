const axios = require('axios');
const cheerio = require('cheerio');

// main url for fetch all the html from 
const url = 'https://www.airbnb.com/s/austin/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&source=structured_search_input_header&search_type=search_query'


// main function that is exported for use 
// function returns a promise and ultimately returns a JSON object of data
// SAMPLE OF RETURNED JSON OBJECTS
// {
//   source: 'airbnb',
//   location: 'Austin',
//   title: 'Stay in the Birdhouse! East/Downtow',
//   description: '2 guests · 1 bedroom · 1 bed · 1 bathAir conditioning · Self check-in · Wifi · Free parking',
//   price: '31',
//   link: 'https://airbnb.com/rooms/240541?previous_page_section_name=1000&federated_search_id=ff93d63b-fedf-4485-9f61-5aad34af6d60',
//   image: 'https://a0.muscache.com/im/pictures/4596765/80c96bbd_original.jpg?im_w=720'
// }

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
try{
 const response = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1' }  })
 return response.data
//  return data = parseHTML(HTML)
 
}
catch (error){
console.log(error)
}}

// function parses the html from the axios call and parse it for the requied fields.It constructs a JSON object to be returned 
function parseHTML (html) {
  const dataArray=[]
  const $ = cheerio.load(html)
  const locationStr=$(html).find('._1lbq8dg').find('h1').text()
  const location=locationStr.split('Stays in ')

  $('._8ssblpx').each((index,element)=>{ 
  const title=$(element).find('._bzh5lkq').text()
  const description=$(element).find('._kqh46o').text()
  const priceStr=$(element).find('._1p7iugi').html()
  const price=priceStr.split('</span>$')
  const link=$(element).find('._1048zci').find('a').attr('href')
  const image=$(element).find('._1048zci').find('img').attr('src')
  dataObj = {
    source: 'airbnb',
    location: location[1],
    title: title,
    description: description,
    price: price[1],
    link: `https://airbnb.com${link}`,
    image: image, 
  }
dataArray.push(dataObj)

  })
 
  return dataArray
}

module.exports = {
  getData : getData
}

