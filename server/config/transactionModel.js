var db = require('./dbConfig');
db.plugin('registry')
var Contract = require('./contractModel');
var Transaction = db.Model.extend({
  tableName: 'transactions',
  hasTimestamps: true
  // player_contact_id: function() {
  //   return this.belongsTo('Contract', 'player_contact_id');
  // }
});
 

module.exports = db.model('Transaction', Transaction);;
