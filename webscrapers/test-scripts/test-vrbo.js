const vrbo = require('../vrbo');

const data = vrbo.getData('miami').then((data)=>{
  console.log('-------TESTING FILE------')
  console.log(data);

})



