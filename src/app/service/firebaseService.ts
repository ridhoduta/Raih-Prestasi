import admin from "firebase-admin";

const serviceAccount = require("../../lib/serviceAccount.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin;