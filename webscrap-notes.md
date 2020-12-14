
SONDERS.COM

AUSTIN

`https://www.sonder.com/destinations/austin/search?sleeps=1&neighborhood=%22all_neighborhoods%22&bedroom_count=0&bed_count=1&bathroom_count=1`

CONTAINER: `<div class="Column-module__column___R-LzP Column-module__align_items_center___1L1Uc Column-module__justify_content_start___a1-eO Column-module__half___1vH7z" target="listing_20014">`

IMAGE: `<img class="Image-module__image___357yU SearchResultCard-module__post_image___1wRUp" src="https://res.cloudinary.com/sonder-development/image/private/s--Rp5XT_EV--/c_fill,w_800/v1/s3assets/unit_images/images/000/078/369/original/jREWa5yt.jpg?1536853484" alt="Lovely 2BR at Bouldin Townhome">`



DESCRIPTION: `<p class="Text-module__base___3jyR6 Text-module__h5___1Xaez Text-module__title___1nEqH Text-module__truncate___3XwKg">Lovely 2BR at Bouldin Townhome</p>`

LOCATION: `<p class="Text-module__base___3jyR6 Text-module__h5___1Xaez Text-module__title___1nEqH Text-module__truncate___3XwKg">Lovely 2BR at Bouldin Townhome</p>`

PRICE: <p class="Text-module__base___3jyR6 Text-module__body___tXgxC">US$117</p>

LINK: `<a class="Link-module__base___1ypHw" href="/destinations/austin/Sonder-Bouldin-Townhome-Lovely-2BR-Patio/c20014?sleeps=1" target="_blank" data-testid="SearchResultCard-listing_url">`



AIRBNB
 
 https://www.airbnb.com/s/austin/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&source=structured_search_input_header&search_type=search_query


## AUSTIN


**CONTAINER:**  `<div class="_8ssblpx">`

**LOCATION:** `_1lbq8dg` 
```
const locationStr=$(html).find('._1lbq8dg').find('h1').text()
const location=locationStr.split('Stays in ')
``` 


**TITLE:**  `._bzh5lkq`  |  
```
const title=$(element).find('._bzh5lkq').text()
```
**DESCRIPTION:** 
```
const description=$(element).find('._kqh46o').text()
```

`<div class="_kqh46o" style="margin-top: 9px;">2 guests<span aria-hidden="true"> · </span>1 bedroom<span aria-hidden="true"> · </span>1 bed<span aria-hidden="true"> · </span>1 private bath</div>`

**PRICE:**

```
const priceStr=$(element).find('._1p7iugi').html() 
const price=priceStr.split('</span>$')
```

`<span class="_1p7iugi"><span class="_krjbj">Price:</span>$17</span>`

**LINK:** 
```
const link=$(element).find('._1048zci').find('a').attr('href')
```

`<a aria-label="Cheap private bedroom and private bathroom" data-check-info-section="true" href="/rooms/46768522?previous_page_section_name=1000&amp;federated_search_id=c56d5cf5-36ae-414a-a537-adcd91a5d128" rel="noopener noreferrer" target="listing_46768522" class="_gjfol0"></a>`

**IMAGE:**
 ```
 const image=$(element).find('._1048zci').find('img').attr('src')
```


