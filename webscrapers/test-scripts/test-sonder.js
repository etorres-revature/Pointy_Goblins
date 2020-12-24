const sonder = require('../sonder');


const data = sonder.getData('austin').then((data)=>{
  console.log('-------TESTING FILE------')
  console.log(data);

})



