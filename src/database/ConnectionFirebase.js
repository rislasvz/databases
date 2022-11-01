const admin = require('firebase-admin')
const fs = require('fs')

var serviceAccount = JSON.parse(fs.readFileSync("./src/key/serviceAccountKey.json", 'utf-8'));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

const db = admin.firestore()

module.exports = db
