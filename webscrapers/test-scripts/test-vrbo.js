const vrbo = require("../vrbo-updated");

const data = vrbo.getData("miami").then((data) => {
  console.log("-------TESTING FILE------");
  console.log(data);
});
