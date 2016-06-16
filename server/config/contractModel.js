var db = require('./dbConfig');
db.plugin('registry');
var Transaction = require('./transactionModel');
var Contract = db.Model.extend({
  tableName: 'contracts',
  hasTimestamps: true
});
module.exports = Contract
