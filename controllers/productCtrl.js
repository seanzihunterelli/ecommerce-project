const app = require('../index');
const db = app.get('db');
// console.log(app);
module.exports = {
  getProducts: function(request, response){

    db.run("select * from products", function(err, results){
        if(err){
          console.log(err);
          return response.status(500).send('Internal Server Error');
        }
        console.log(results);
        return response.status(200).send({ results: results });
    });
  }

};
