module.exports = function (app) {
    "use strict";

    var mysql = require('mysql');
	var reachmail = require('reachmailapi');
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
		//inialize the wrapper to the variable api using a token generated from the User Interface at https://go.reachmail.net
		var api = new reachmail({token: 'J2Nk3swGupRcfzb2mVPhJOMlKTT5bxpTUMULWxP30E19HM7GgrEu6C6hIASfwGQ2'});

		//The following builds the content of the message
		var body={
			FromAddress: 'lakshmisha.s@husky.neu.edu',
			Recipients: [
			{
				Address: 'lsneha213@gmail.com'
			}
			],
			Headers: { 
				Subject: 'Test Subject Goes Here' , 
				From: 'From Name <from@domain.tld>', 
				'X-Company': 'Company Name', 
				'X-Location': 'Your Location Header' 
			}, 
			BodyText: 'this is the text version of the ES API test',
			BodyHtml: 'this is the <a href=\"http://www.google.com\">HTML</a> version of the ES API test', 
			Tracking: true
		};
		//JSON encode the message body for transmission
		var jsonBody = JSON.stringify(body);

		/* 
		The function below retreieves the account GUID. Only when succefful will the 
		function proceed to them schedule the message for delivery.
		Information is printed to screen through the use of console.log(...)
		*/
		api.get('/administration/users/current', function (http_code, response) {
			if (http_code===200) {
				console.log(response);
				console.log("AccID: "+ response.AccountId);
				var accountId = response.AccountId; //extracts account GUID from response obj
				console.log("Success!  Account GUID: " + AccountId); //prints out the Account GUID
				//Next Function sends the message
				api.post ("/easysmtp/" + accountId, jsonBody, function (http_code, response) {
					if (http_code===200) {
						console.log("successful connection to EasySMTP API");
						console.log(response);
					}else { 
						console.log("Oops, looks like an error on send. Status Code: " + http_code);
						console.log("Details: " + response);
					}
				});
			} else {
				console.log("Oops, there was an error when trying to get the account GUID. Status Code: " + http_code);
				console.log("Details: " + response);
			}
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
        con.query('UPDATE user\n' +
            'SET role = \'musician\'' +
            'WHERE name = ? and email = ?;', [user.name, user.email], function(err, result) {
            if (err) throw err;
            res.send(result);
        });
    }

};