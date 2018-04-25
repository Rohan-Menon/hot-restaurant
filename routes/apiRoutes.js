
module.exports = function(app, reservations, waitList) {
    app.post('/api/test', function(req, res) {
        var data = req.body;
        reservations.push({
            name: data.username,
            tel: data.userphone,
            email: data.useremail,
            id: data.userid
        });
        res.redirect(`/tables/${data.username}`);
    });
   
    app.get('/api/tables', function(req, res) {
        res.send(reservations);
    });


    app.get('/api/waitlist', function(req, res) {
        //res.send(JSON.stringify(waitList));
        res.json(reservations);
     });
};
