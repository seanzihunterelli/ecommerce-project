const app = require('../index');
const db = app.get('db');
// console.log(app);
module.exports = {
  getProducts: function(request, response){

    db.run("select * from products", function(dbError, dbResponse){
        if(dbError){
          console.log(dbError);
          return response.status(500).send('Internal Server Error');
        }
        console.log(dbResponse);
        return response.status(200).send({ results: dbResponse });
    });
  },
  getProduct: function(request, response){
    const dbQuery = `select * from products where id=${+request.params.id};`;
		db.run(dbQuery, (dbError, dbResponse) => {
			if (dbError) {
				console.log(dbError);
				return response.status(500).send('Internal Server Error');
			} else if (!dbResponse.length) {
				return response.status(404).send('Not Found');
			} else {
				return response.status(200).send(dbResponse[0]);
			}
		});
  },
};
