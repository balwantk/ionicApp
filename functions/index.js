const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


exports.onionDetails = functions.database
	.ref('/menuItems/{pushId}')
	.onWrite(event => {
		const original = event.data.val();
		console.log('Change to Onions', event.params.pushId, original);
		original.details = changeToOnion();
		return event.data.ref.set(original);
	});

function changeToOnion(){ 
	return "onions";
}