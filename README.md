a basic express api which uses dynamo db with aws to host a database very similare to mongobd.

To make the connection to dynamo db was very simple, jsut laod up aws and type in dynamo db at the serach bar and go through the steps to make a 
basic database and make the key id: id (S).  I set the location to be N.Virginia which is default I believe.  Note down the passcode and save
that right away in a .env file.  There is no need for the secret access key any more as far as I can tall on the AWS_ACCESS_KEY_ID.

Follow the model for setting up connections to the dynamo db in dynamo.js
Follow the model for setting up calls to the api in app.js
Follow the model for seeding the database in seed.js (warning there are > 300 items in the character list though...)
see the dependencies in package.json for differnt packages used but they are not complex.
All testing was done via insomnia.