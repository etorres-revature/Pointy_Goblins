const sonder = require('../sonder');


const data = sonder.getData('boston').then((data)=>{
  console.log('-------TESTING FILE------')
  console.log(data);

})



