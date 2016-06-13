module.exports = function(app) {
	// app.get('/', function(request, response) {
	// 	response.send('base');
	// });

	 app.get('/api/test', function(request, response) {
	 	response.send('route is working');
	 });

	// app.post('/route1', function(request, response) {
	// 	response.send('route1');
	// });
}
