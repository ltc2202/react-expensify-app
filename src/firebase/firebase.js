import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'rent',
//   note: '',
//   amount: 1000,
//   createdAt: 94839792865
// });

// database.ref('notes/-L1Nhce-aTgpHRJ7Pmn1').remove();

// database.ref('notes').push({
//   title: 'Course Topic',
//   body: 'React Native, Angular, Python'
// })

// const firebaseNotes = {
//   notes: {

//   }
// };

// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'This is my note'
// }, {
//   id: '1sd2',
//   title: 'Another note!',
//   body: 'This is my note'
// }];

// database.ref('notes').set(notes);
// database.ref('notes/')

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//       const val = snapshot.val();
//       console.log(val);
//     }).catch((e) => {
//       console.log('Error fetching data', e);
//     })

// database.ref().set({
//   name: 'Harry Le',
//   age: 23,
//   stressLevel: 8,
//   isSingle: false,
//   job: {
//     title: 'programmer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Melbourne',
//     country: 'Australia'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   'job/company': 'Amazon',
//   'location/city': 'Canberra',
//   stressLevel: 10
// });


// database.ref()
//   .remove()
//   .then(() => {
//     console.log('data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e)
//   });

 