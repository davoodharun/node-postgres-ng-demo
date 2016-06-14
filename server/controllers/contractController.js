var Transaction = require('../config/transactionModel.js');
var Contract = require('../config/contractModel.js');
var mockData = require('../config/mockData.js');
module.exports = {
	addContract: function (req, res) {
		console.log(req.body.contract)
		Contract.forge(req.body.contract).save().then(function(contract){
			console.log('contract successfull added');
			res.status(201).send(contract);
		}).catch(function (error) {
			console.log('error adding contract', error)
			res.status(500).send(error);
		})
	},

	getAllContracts: function(req, res) {
		Contract.fetchAll().then(function(contracts) {
			console.log('successfully got all contracts..')
			res.status(200).send(contracts);
		})
	},

	seedDb: function (data, callback) {
		Contract.forge(data).save().then(function(contract){
			console.log('contract successfull added');
			callback(null, contract);
		}).catch(function (error) {
			console.log('error adding contract', error)
			callback(error, null);
		})
	},

	getContractsByPlayerId: function(req, res) {
		Contract.query().where('player_contact_id', '=', req.params.id).then(function(contracts) {
			res.status(200).send(contracts);
		}).catch(function(error) {
			res.status(500).send(error);
		})
	},

	getContractById: function(req, res) {
		Contract.forge({contract_id: req.params.id}).fetch().then(function(contract) {
			res.status(200).send(contract);
		}).catch(function(error) {
			res.status(500).send(error);
		})
	},

	deleteContract: function(req, res) {
		Contract.forge({contract_id: req.params.id}).fetch().then(function(contract) {
			contract.destroy().then(function(){
				res.status(200).send(contract);	
			})
		}).catch(function(error) {
			res.status(500).send(error);
		})
	},

	updateContract: function(req, res) {
		Contract.forge({contract_id: req.params.id}).fetch().then(function(contract) {
			contract.set(req.body).save().then(function(contract) {
				console.log('updated contract')
				res.status(200).send(contract);
			})
		}).catch(function(error) {
			console.log('error updating contract');
			res.status(500).send(error);
		})
	}

}