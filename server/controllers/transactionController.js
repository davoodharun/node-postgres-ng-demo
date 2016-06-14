var Transaction = require('../config/transactionModel.js');
var Contract = require('../config/contractModel.js');

module.exports = {
	addTransaction: function (req, res) {
		Transaction.forge(req.body.transaction).save().then(function(transaction){
			console.log('transaction successfull added');
			res.status(201).send(transaction);
		}).catch(function (error) {
			console.log('error adding transaction', error)
			res.status(500).send(error);
		});
	},

	getAllTransactions: function(req, res) {
		Transaction.fetchAll().then(function(transactions) {
			console.log('successfully got all transactions..')
			res.status(200).send(transactions);
		});
	},

	seedDb: function (data, callback) {
		Transaction.forge(data).save().then(function(transaction){
			console.log('transaction successfull added');
			callback(null, transaction);
		}).catch(function (error) {
			console.log('error adding transaction', error)
			callback(error, null);
		});
	},

	getTransactionsByPlayerId: function(req, res) {
		Transaction.query().where('player_contact_id', '=', req.params.id).then(function(transactions) {
			res.status(200).send(transactions);
		}).catch(function(error) {
			res.status(500).send(error);
		});
	},

	getTransactionById: function(req, res) {
		Transaction.forge({transaction_id: req.params.id}).fetch().then(function(transaction) {
			res.status(200).send(transaction);
		}).catch(function(error) {
			res.status(500).send(error);
		});
	},

	deleteTransaction: function(req, res) {
		Transaction.forge({transaction_id: req.params.id}).fetch().then(function(transaction) {
			transaction.destroy().then(function(){
				res.status(200).send(transaction);	
			});
		}).catch(function(error) {
			res.status(500).send(error);
		})
	},

	updateTransaction: function(req, res) {
		Transaction.forge({transaction_id: req.params.id}).fetch().then(function(transaction) {
			transaction.set(req.body).save().then(function(transaction) {
				console.log('updated transaction');
				res.status(200).send(transaction);
			});
		}).catch(function(error) {
			console.log('error updating transaction');
			res.status(500).send(error);
		});
	}
}