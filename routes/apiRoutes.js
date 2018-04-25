
module.exports = function(app, reservations, waitList) {

    app.post('/api/test', function(req, res) {
        var data = req.body;
        res.send(`Thank you for sending your information:
        ${data.username}
        ${data.userphone}
        ${data.useremail}
        `);
    });
   
    app.get('/api/tables', function(req, res) {
        res.send(reservations);
    });


    app.get('/api/waitlist', function(req, res) {
        res.send(JSON.stringify(waitList));   
     });
};
