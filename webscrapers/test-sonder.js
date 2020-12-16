const sonder = require('./sonder');


const data = sonder.getData().then((data)=>{
  console.log('-------TESTING FILE------')
  console.log(data);

})



