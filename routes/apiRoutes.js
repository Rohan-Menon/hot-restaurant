
module.exports = function(app, reservations, waitList) {

   
    app.get('/api/tables', function(req, res) {
        res.send(reservations);
    });


    app.get('/api/waitlist', function(req, res) {
        res.send(JSON.stringify(waitList));   
     });
};
