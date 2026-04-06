import admin from "../src/app/service/firebaseService";

/**
 * FCM Test Script
 * Use this to verify your Firebase Project configuration and FCM manual tokens.
 * 
 * Usage:
 * 1. Open your database and copy a valid token from fcm_tokens table
 * 2. Paste it into the `testToken` variable below
 * 3. Run: npx tsx scripts/test-fcm.ts
 */

async function testFCM() {
  // --- PASTE YOUR TOKEN HERE ---
  const testToken = "esP22ka6TQGLK7YZoogwkA:APA91bGjdgjfPGDzFdzNGdK9fH1c4GfNgzvbAwn7c0KRyOy5SuSAEMxtPueleEI6ImgOMbgkakkoNCe4AK309rZWgUpCf5kB8GQAuejA_nW3beCH3QA6DQA";
  // -----------------------------

  // if (testToken === "esP22ka6TQGLK7YZoogwkA:APA91bGjdgjfPGDzFdzNGdK9fH1c4GfNgzvbAwn7c0KRyOy5SuSAEMxtPueleEI6ImgOMbgkakkoNCe4AK309rZWgUpCf5kB8GQAuejA_nW3beCH3QA6DQA") {
  //   console.error("Error: Please paste a valid FCM token in the script first!");
  //   process.exit(1);
  // }

  console.log("--- Starting FCM Test ---");
  
  const appOptions = admin.app().options;
  console.log("Project ID (Internal):", (appOptions.credential as any)?.projectId || "Unknown");
  
  try {
    const response = await admin.messaging().send({
      token: testToken,
      notification: {
        title: "Test Notifikasi Backend 🚀",
        body: "Selamat! Jika anda melihat ini, konfigurasi FCM anda sudah benar.",
      },
      data: {
        screen: "test_notification",
        id: "test_123"
      }
    });

    console.log("✅ Successfully sent message!");
    console.log("Firebase Response ID:", response);
  } catch (error: any) {
    console.error("❌ Error sending message:");
    console.error("Code:", error.code);
    console.error("Message:", error.message);
    
    if (error.code === 'messaging/invalid-argument') {
      console.error("\nSuggestion: The token formatting is wrong. Make sure you copied the long FCM token correctly.");
    } else if (error.code === 'messaging/registration-token-not-registered') {
      console.error("\nSuggestion: The token is no longer valid. Re-login from your Flutter app to get a new token.");
    } else if (error.code === 'messaging/authentication-error') {
      console.error("\nSuggestion: Your serviceAccount.json might be wrong or doesn't have permission for this project.");
    }
  }
}

testFCM();
