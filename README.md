# Trello Training Development Application

still in development...

## Usage

1. Install node
2. Install postgres
2. Clone this repo to your local machine
3. Run npm install in your console within the root directory of the cloned repo
4. Run node server/server.js

## API routes
### Contract Routes
1. POST: /api/contract --> add contract to db
		request body example
		{ contract_id: 701,
		  player_contact_id: 4,
		  team_id: 704,
		  base_salary: 902439,
		  signing_bonus: 54463,
		  workout_bonus: 70744,
		  cap_value: 687559,
		  cash_value: 86343,
		  total_guarantee: 15883,
		  signing_date: Wed Apr 12 2062 11:04:54 GMT-0400 (EDT),
		  contract_disposition: 'Expired',
		  contract_disposition_date: '8/30/2067',
		  first_year: '2005',
		  last_year: '2012',
		  updated_by: 'Louise Sandoval' }

2. GET: /api/contracts --> get all contracts from db
3. GET: /api/contract/pcid/:id --> get contracts by player id
4. GET: /api/contract/:id --> get contract by id
5. PUT: /api/contract/:id --> update contract
6. DELETE: /api/contract/:id --> delete contract
		
### Transaction Routes
1. POST: /api/transaction --> add transaction to db
2. GET: /api/transactions --> get all transactions from db
3. GET: /api/transaction/pcid/:id --> get transactions by player id
4. GET: /api/transaction/:id --> get transaction by id
5. PUT: /api/transaction/:id --> update transaction
6. DELETE: /api/transaction/:id --> delete transaction

### Maintenance Routes
1. GET: /api/resetDbWithData --> resets db with mock data
		

