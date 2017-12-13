module.exports = function (app) {
    "use strict";

    var mysql = require('mysql');
    console.log("Inside server service");
    app.post('/api/user', createUser);
    app.get('/api/invitees', getInviteeList);
    app.put('/api/user/accept', markUserAcceptance);

    /*var con = mysql.createConnection({
        host: "localhost",
        user: "sneha",
        password: "abcd1234",
        database: "mlldb"
    });*/
	
	var con = mysql.createConnection({
		//host: "localhost",
		host: "tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
		//user: "sneha",
		//password: "abcd1234",
		user: "aav997830lee8hcc",
		password: "c9le739ttx5bv8j8",
		//database: "mlldb",
		database: "gg0kuw6i240upzen"
	});

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });

    function createUser (req, res) {
        console.log("Inside server service");
        var user = req.body;
        con.query('INSERT INTO user (name, email, role, invitedBy) VALUES (?, ?, ?, ?)', [user.name, user.email, 'invitee', null], function(err, result) {
                if (err) throw err;
                con.query('SELECT * FROM user', function(err, results) {
                    if (err) throw err;
                    console.log(results[0].id);
                    console.log(results[0].name);
                    console.log(results[0].email);
                    console.log(results[0].role);
                    console.log(results[0].invitedBy)
                })
            });
    }

    function getInviteeList(req, res) {
        //con.connect(function(err) {
          //  if (err) throw err;
            //console.log("Connected!");

            con.query('SELECT * FROM user', function(err, results) {
                if (err) throw err;
                /*console.log(results[0].id);
                console.log(results[0].name);
                console.log(results[0].email);
                console.log(results[0].role);
                console.log(results[0].invitedBy);*/
                res.send(results);
            });
        //});
    }

    function markUserAcceptance(req, res) {
        var user = req.body;
        console.log("inside server service");
        console.log(user);
        console.log(user.name);
        console.log(user.email);
        console.log(user.password);
        con.query('UPDATE user\n' +
            'SET role = \'musician\'' +
            'WHERE name = ? and email = ?;', [user.name, user.email], function(err, result) {
            if (err) throw err;
            res.send(result);
        });
    }

};