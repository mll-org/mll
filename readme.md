This repository contains code for Music Licensing Laboratory developed using M*(mysql)EAN stack. This code is deployed on heroku and the app can be accessed here: guarded-caverns-60590.herokuapp.com/#!/

The current functionalities supported are:
1. Login using "anr" and password and see A&R related pages
    a. Global roster - list of people who have been invited to use the app. They are mostly musicians. The status of people that are invited is shown in yellow and after they accept, the status turns to green.
    b. Home - page to create playlists (backend not implemented)
    c. Invite - a page to invite another A&R person or a Musician to use the application. The message content can be edited and on clicking on "Invite" the mail will be sent to the given recipient.
    d. Tracks - page to add any tracks uploaded by the musicians
    e. About - an about page that contains information about the application
2. Login using any other username/password and you will be able to see the pages intended for a Musician

Next steps:
1. Add a proper login module with encryption of credentials and other validations
2. Local roster for an A&R person to see just the list of people they have invited, along with the global roster
3. Musician functionalities
4. Some error handling of the existing code

Notes for the developer:
1. To run the app, simply clone the repository, install mysql using 'npm install', create a schema called 'mllab', change the credentials for the db in the app and start the node server using "node server.js" from the root folder
2. The client and server functionalities are separated by using their respective folders
3. A standard folder structure is used as in any MEAN application(similar to the one followed in CS5610 - Web Development course of NEU)
4. Procfile and .env are used to run the application on heroku. To run the app on heroku, uncomment the heroku database connection code in server.js/invite.service.server.js and deploy the latest code
Links for heroku deployment
- https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up
- database provisioned for the current app is JawsDB, but clearDB can be used as well with some code change
- the command "heroku logs --tail" is most helpful to debug application errors on heroku
- for any reachmailapi issues, you can mail the support and they should reply in a day or two at most

For any other queries, you can write to me at: lakshmisha.s@husky.neu.edu