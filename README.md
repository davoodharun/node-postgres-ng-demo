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
'''json
{
    contract_id: 587,
    player_contact_id: 3,
    team_id: 704,
    base_salary: 565963,
    signing_bonus: 86159,
    workout_bonus: 32374,
    cap_value: 850077,
    cash_value: 23645,
    total_guarantee: 70155,
    signing_date: Sat Mar 23 2086 11: 45: 36 GMT - 0400(EDT),
    contract_disposition: 'Expired',
    contract_disposition_date: '10/22/2089',
    first_year: '2001',
    last_year: '2008',
    updated_by: 'Scott Jones'
}
'''
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
		

