const express = require("express");
const { urlencoded, json } = require("body-parser");
const { initializeApp, auth: _auth, database: _database } = require("firebase");

const app = express();
const port = 3000
const cors = require("cors");

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

app.use(express.static('public'));

// Enter your details from Firebase
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
initializeApp(firebaseConfig);

const auth = _auth();
const database = _database();

// Routes
app.post('/lawyer/signup', (req, res) => {
  const { firstName, lastName, email, barristerId, password } = req.body;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Save user data to the database
      database.ref('lawyers/' + user.uid).set({
        firstName: firstName,
        lastName: lastName,
        email: email,
        barristerId: barristerId
      });
      res.status(200).send('Lawyer signed up successfully');
    })
    .catch((error) => {
      console.error('Lawyer signup error:', error.message);
      res.status(500).send('Error signing up lawyer');
    });
});

app.post('/lawyer/login', (req, res) => {
  const { email, password } = req.body;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      res.status(200).send('Lawyer login successful');
    })
    .catch((error) => {
      console.error('Lawyer login error:', error.message);
      res.status(401).send('Invalid credentials');
    });
});

app.post('/client/signup', (req, res) => {
  const { clientFirstName, clientLastName, clientEmail, clientPassword } = req.body;

  auth.createUserWithEmailAndPassword(clientEmail, clientPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      // Save user data to the database
      database.ref('clients/' + user.uid).set({
        firstName: clientFirstName,
        lastName: clientLastName,
        email: clientEmail
      });
      res.status(200).send('Client signed up successfully');
    })
    .catch((error) => {
      console.error('Client signup error:', error.message);
      res.status(500).send('Error signing up client');
    });
});

app.post('/client/login', (req, res) => {
  const { clientEmail, clientPassword } = req.body;

  auth.signInWithEmailAndPassword(clientEmail, clientPassword)
    .then(() => {
      res.status(200).send('Client login successful');
    })
    .catch((error) => {
      console.error('Client login error:', error.message);
      res.status(401).send('Invalid credentials');
    });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
