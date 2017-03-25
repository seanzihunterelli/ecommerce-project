const app = require('../index');

module.exports = {
  getProducts: function(){
    const db = app.get('db');


    db.run("select * from products", function(err, result){
      console.log(result);
    });
  }

};
