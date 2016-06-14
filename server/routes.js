var db = require('./config/dbConfig');
var mockData = require('./config/mockData');
var contractController = require('./controllers/contractController');
var transactionController = require('./controllers/transactionController');
module.exports = function(app) {
	/*=======================================
	=            Contract Routes            =
	=======================================*/
			/*----------  add contract  ----------*/
			app.post('/api/contract', contractController.addContract);
			/*----------  get all contracts  ----------*/
			app.get('/api/contracts', contractController.getAllContracts);
			/*----------  get contract by player contact id  ----------*/
			app.get('/api/contract/pcid/:id', contractController.getContractsByPlayerId);
			/*----------  get contract by contract id  ----------*/
			app.get('/api/contract/:id', contractController.getContractById)
			/*----------  delete contract ----------*/
			app.delete('/api/contract/:id', contractController.deleteContract);
			/*----------  update contract  ----------*/
			app.put('/api/contract/:id', contractController.updateContract);
			
	/*=====  End of Contract Routes  ======*/

	/*==========================================
	=            Transaction Routes            =
	==========================================*/
			/*----------  add transaction  ----------*/
			app.post('/api/transaction', transactionController.addTransaction);
			/*----------  get all transactions  ----------*/
			app.get('/api/transactions', transactionController.getAllTransactions);
			/*----------  get transaction by player contact id  ----------*/
			app.get('/api/transaction/pcid/:id', transactionController.getTransactionsByPlayerId);
			/*----------  get transaction by transaction id  ----------*/
			app.get('/api/transaction/:id', transactionController.getTransactionById);
			/*----------  delete transaction  ----------*/
			app.delete('/api/transaction/:id', transactionController.deleteTransaction);
			/*----------  update transaction  ----------*/
			app.put('/api/transaction/:id', transactionController.updateTransaction);

	/*=====  End of Transaction Routes  ======*/
	
	/*==========================================
	=            Maintenance Routes            =
	==========================================*/
			/*----------  resets db with mock data  ----------*/
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
				 							console.log('success resetting db'); 
				 							// TODO: send response back once last iteration is finished (async!) and refactor this route
				 						}
				 					});
				 				}
				 			}
				 		});	
					}
			 	});
			});
	/*=====  End of Maintenance Routes  ======*/

}
