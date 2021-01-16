const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
// main url for fetch all the html from
// const url = 'https://www.sonder.com/destinations/austin/search?sleeps=1&neighborhood=%22all_neighborhoods%22&bedroom_count=0&bed_count=1&bathroom_count=1'

// SAMPLE OUTPUT
// {
//   source: 'sonder',
//   location: 'Bouldin, Austin',
//   title: 'Sleek Studio at The Catherine ',
//   description: 'Studio·2 Guests·1 Bathroom',
//   price: '121',
//   link: 'https://sonder/destinations/austin/Sonder-Studio-in-Bouldin-Weekly-Specials/c28110?sleeps=1',
//   image: 'https://res.cloudinary.com/sonder-development/image/private/s--Rp5XT_EV--/c_fill,w_800/v1/s3assets/unit_images/images/000/209/647/original/EU_E5BON.jpg?1575138028'
// }

function getData(city) {
  const url = `https://www.sonder.com/destinations/${city}/search?`;
  return new Promise((resolve, reject) => {
    getMainPage(url)
      .then((html) => {
        const Obj = parseHTML(html);
        resolve(Obj);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// function using axios to fetch the main url page for a the given city
async function getMainPage(url) {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const [page] = await browser.pages();
    await page.setViewport({
      width: 1900,
      height: 3600,
      deviceScaleFactor: 1,
    });

    await page.goto(url, { waitUntil: "networkidle0" });
    const data = await page.evaluate(
      () => document.querySelector("*").outerHTML
    );

    await browser.close();
    return data;
  } catch (err) {
    console.error(err);
  }
}

// function parses the html from the axios call and parse it for the requied fields.It constructs a JSON object to be returned
function parseHTML(html) {
  const dataArray = [];
  const $ = cheerio.load(html);
  $(".SearchResultCard-module__card_container___nttr9").each(
    (index, element) => {
      const linkStr = $(element)
        .find(".Link-module__base___1ypHw")
        .attr("href");
      const link = `https://sonder.com${linkStr}`;
      const title = $(element)
        .find(".SearchResultCard-module__title_row___2Ytju")
        .text();
      const description = $(element)
        .find(".SearchResultCard-module__stats___1sn4g")
        .text();
      const image = $(element)
        .find(".SearchResultCard-module__post_image___1wRUp")
        .attr("src");
      const priceStr = $(element)
        .find(".SearchResultCard-module__prices_row___1V0mu")
        .text();
      const price = priceStr.split("US$");
      const location = $(element)
        .find(".SearchResultCard-module__neighborhood_row___28cV4")
        .text();

      dataObj = {
        source: "sonder",
        location: location,
        title: title,
        description: description,
        price: price[2],
        link: link,
        image: image,
      };
      dataArray.push(dataObj);
    }
  );

  return dataArray.slice(0, -2);
}

module.exports = {
  getData: getData,
};
