var db = require('./config/dbConfig');
var mockData = require('./config/mockData');
var contractController = require('./controllers/contractController');
var transactionController = require('./controllers/transactionController');
module.exports = function(app) {
	// app.get('/', function(request, response) {
	// 	response.send('base');
	// });

	app.get('/api/test', function(request, response) {
	 	response.send('route is working');
	});

	app.post('/api/contract', contractController.addContract);
	app.post('/api/transaction', transactionController.addTransaction);
	app.get('/api/transaction/all', transactionController.getAllTransactions);
	app.get('/api/transaction/:playerId', transactionController.getTransactionsByPlayerId);
	app.get('/api/contract/all', contractController.getAllContracts);
	app.get('/api/resetDbWithData', function(request, response) {
	 	db.resetEverythingPromise().then(function() {
	 		var player_contact_ids = [1,2,3,4]
	 		for(var i = 0; i<player_contact_ids.length; i++) {
	 			var data = new mockData.contract(player_contact_ids[i]);
	 			console.log(data)
		 		contractController.seedDb(data, function(error, contract){
		 			if(error) {
		 				console.log(error)
		 			} else {
		 				for(var j = 0; j<player_contact_ids.length; j++) {
		 					var transaction = new mockData.transaction(player_contact_ids[j]);
		 					transactionController.seedDb(transaction, function(error, transaction) {
		 						if(error) {
		 							console.log(error);
		 						} else {
		 							// console.log(transaction);
		 						}
		 					})
		 				}
		 			}
		 		});	
			}
	 	})
	})
	// app.post('/route1', function(request, response) {
	// 	response.send('route1');
	// });
}
