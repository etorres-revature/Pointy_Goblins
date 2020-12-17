const airbnb = require('../airbnb')

const data = airbnb.getData('denver').then((data)=>{
  console.log('-------TESTING FILE------')
  console.log(data);

})



