
var Chance = require('chance');
var chance = new Chance();
var contract_disposition = ['Current', 'Expired'];
var transaction_type = ['New Contract', 'placed on Injured reserve', 'Activated', 'Waived'];
var status = ['Active', 'Not Active'];
var sub_status= ['Active', 'Injured Reserve', 'Waived'];
var team_id = Math.floor(Math.random() * (1000 - 1) + 1);
module.exports = {
	contract: function (player_contact_id) {
		return {
			'contract_id': Math.floor(Math.random() * (1000 - 1) + 1),
	    'player_contact_id': player_contact_id,
	    'team_id': team_id,
	    'base_salary': Math.floor(Math.random() * (1000000 - 100000) + 100000),
	    'signing_bonus': Math.floor(Math.random() * (100000 - 10000) + 10000),
	    'workout_bonus': Math.floor(Math.random() * (100000 - 10000) + 10000),
	    'cap_value': Math.floor(Math.random() * (2000000 - 10000) + 10000),
	    'cash_value': Math.floor(Math.random() * (100000 - 10000) + 10000),
	    'total_guarantee': Math.floor(Math.random() * (100000 - 10000) + 10000),
	    'signing_date': chance.date(),
	    'contract_disposition': contract_disposition[Math.floor(Math.random() * (2 - 0) + 0)],
	    'contract_disposition_date': chance.date({string: true}),
	    'first_year': chance.year({min: 2000, max:2016 }),
	    'last_year':  chance.year({min: 2000, max:2016 }),
	    'updated_by':  chance.name()
		}
	},

	transaction: function (playerId) {
		return {
			'transaction_id': Math.floor(Math.random() * (1000 - 1) + 1),
			'player_contact_id': playerId,
			'team_id': team_id,
			'transaction_type': transaction_type[Math.floor(Math.random() * (4 - 0) + 0)],
			'transaction_date': chance.date(),
			'status': status[Math.floor(Math.random() * (2 - 0) + 0)],
			'sub_status': sub_status[Math.floor(Math.random() * (3 - 0) + 0)],
			'comments': chance.string(),
			'updated_by': chance.name()
		}
	}
}