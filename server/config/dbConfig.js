var knex;

if (process.env.DEPLOYED) {
  knex = require('knex')({
    client: 'pg',
    connection: {
      host: process.env.DATABASE_URL,
      user: 'postgres',
      port: 5432,
      password: 'postgres',
      database : 'postgres',
      charset  : 'utf8'
    },
    pool: {
      min: 0,
      max: 10
    }
  });
} else {
  knex = require('knex')({
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'nflpa',
      password:'root',
      charset: 'utf8'
    }
  });
}
var db = require('bookshelf')(knex);

var createContractsTable = function () {
  return db.knex.schema.createTable('contracts', function (contract) {
    contract.increments('id').primary();
    contract.integer('contract_id').unique();
    contract.integer('player_contact_id')
    contract.integer('team_id');
    contract.integer('base_salary');
    contract.integer('signing_bonus');
    contract.integer('workout_bonus');
    contract.integer('cap_value');
    contract.integer('cash_value');
    contract.integer('total_guarantee');
    contract.date('signing_date');
    contract.string('contract_disposition');
    contract.date('contract_disposition_date');
    contract.integer('first_year');
    contract.integer('last_year');
    contract.string('updated_by');
    contract.timestamps();
  }).then(function (table) {
    console.log('Created contract Table');
  });
};

var createTransactionsTable = function () {
  return db.knex.schema.createTable('transactions', function (transaction) {
    transaction.increments('id').primary();
    transaction.integer('transaction_id').unique();
    transaction.integer('player_contact_id');
    transaction.integer('team_id');
    transaction.string('transaction_type');
    transaction.date('transaction_date');
    transaction.string('status');
    transaction.string('sub_status');
    transaction.string('comments');
    transaction.string('updated_by');
    transaction.timestamps();
  }).then(function (table) {
    console.log('Created transactions Table');
  });
};



db.knex.schema.hasTable('contracts').then(function(exists) {
  if (!exists) {
    createContractsTable();
  }
});

db.knex.schema.hasTable('transactions').then(function(exists) {
  if (!exists) {
    createTransactionsTable();
  }
});

var resetTransactionsTable = function () {
  return db.knex.schema.dropTable('transactions').then(createTransactionsTable);
};

var resetContractsTable = function () {
  return db.knex.schema.dropTable('contracts').then(createContractsTable);
};

var resetContractsAndTransactionsTable = function () {
  return db.knex.schema.dropTable('transactions').then(function () {
    return db.knex.schema.dropTable('contracts').then(function () {
      createContractsTable();
      createTransactionsTable();
    });
  });
}

db.resetEverything = function (req, res) {
  resetContractsAndTransactionsTable().then(function() {
    res.status(201).end();
  });
};

db.resetEverythingPromise = function () {
  return resetContractsAndTransactionsTable().then(function() {
  }).catch(function(e) {
    console.log(e);
  });
};


module.exports = db;
