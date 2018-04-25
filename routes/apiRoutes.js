
// Export API routes
module.exports = function(app, reservations, waitList) {
    console.log('export worked html');

   
    app.get('/api/tables', function(req, res) {
        res.send(JSON.stringify(reservations));
    });


    app.get('/api/waitlist', function(req, res) {
        res.send(JSON.stringify(waitList));   
     });
};