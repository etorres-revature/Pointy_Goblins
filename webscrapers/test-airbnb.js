const airbnb = require('./airbnb')

const data = airbnb.getData().then((data)=>{
  console.log('-------TESTING FILE------')
  console.log(data);

})



