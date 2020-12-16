
# WEB SCRAPING NOTES  

## AIRBNB.COM
 
 https://www.airbnb.com/s/austin/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&source=structured_search_input_header&search_type=search_query


### AUSTIN


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

---
## VRBO.COM

MAIN LINK: https://www.vrbo.com/search/keywords:austin-texas-united-states-of-america/arrival:2020-12-22/departure:2021-01-27?petIncluded=false


CONTAINER
`<div class="HitCollection" data-wdio="HitCollection" role="list"><div data-wdio="Waypoint1">`

ITEM CONTAINER:
`<div class="Hit media-flex media-flex--left media-flex--xs" data-wdio="hit" role="listitem" hit-index="0">`

IMAGE:
`<div class="SimpleImageCarousel__image SimpleImageCarousel__image--cur" role="img" aria-label="" style="background-image: url(&quot;https://media.vrbo.com/lodging/19000000/18770000/18767600/18767557/9cc6a70a.c6.jpg&quot;);"></div>`

TITLE
`<h2 class="HitInfo__headline hover-text" aria-hidden="true">Just across street!!--Kayak &amp; SUP ALL YEAR LONG. Swim, hike or river float</h2>`

DESCRIPTION:

Details__bedrooms 
Details__bathrooms 
Details__halfbathrooms 
Details__sleeps 

```
<div class="HitInfo__details">
<div class="Details__propertyType Details__label" aria-hidden="true">house</div>

<div class="Details__bedrooms Details__label" aria-hidden="true">3 BR</div>

<div class="Details__bathrooms Details__label" aria-hidden="true">2 BA</div>

<div class="Details__sleeps Details__label" aria-hidden="true">Sleeps 8</div>
<div class="Details__label" aria-hidden="true">1440 Sq. Ft.</div>

<div class="sr-only"><span>Property Typehouse</span><span>3Bedrooms</span>
<span>2Bathrooms</span>
<span>8Sleeps</span>
<span>1,440Square Feet</span>

</div></div>
```

LINK : `<a href="/3641254ha?unitId=3655670&amp;noDates=true" target="_blank" class="media-flex__content" tabindex="0">`

`<div class="Hit media-flex media-flex--left media-flex--xs"`

PRICE: `<span class="DualPrice__amount">$510</span>`


LOCATION: `GeoDistance__text`



Details__bedrooms 
Details__bathrooms 
Details__halfbathrooms 
Details__sleeps 




---
## SONDERS.COM

### AUSTIN
resultsListScrollContainer
SearchResultCard-module__card_container___nttr9
LINK : Link-module__base___1ypHw

TITLE: SearchResultCard-module__title_row___2Ytju
DESCRIPTION: SearchResultCard-module__stats___1sn4g
PRICE :SearchResultCard-module__prices_row___1V0mu
IMAGE:SearchResultCard-module__post_image___1wRUp
LOCATION: SearchResultCard-module__neighborhood_row___28cV4







