import { prisma } from "@/lib/prisma";
import admin from "./firebaseService";

export async function sendNotification(
  tokens: string[],
  title: string,
  body: string,
  data?: any
) {
  if (tokens.length === 0) {
    console.log("❌ No FCM tokens found");
    return;
  }
  try {
    const app = admin.app();
    console.log("📌 App Name:", app.name);
    console.log("📌 Project ID (raw):", (app.options.credential as any)?.projectId);
  } catch (err) {
    console.log("❌ Error getting app info:", err);
  }
  console.log("📌 Total Tokens:", tokens.length);
  console.log("📌 Tokens:", tokens);

  const safeData =
    data
      ? Object.fromEntries(
        Object.entries(data).map(([k, v]) => [k, String(v)])
      )
      : {};

  console.log("📌 Payload Data:", safeData);
  console.log("\n🧪 TEST 2: MULTICAST SEND");

  const payload = {
    tokens,
    notification: {
      title,
      body,
    },
    data: safeData,
  };

  try {
    const response = await admin.messaging().sendEachForMulticast(payload);
    const failedTokens: string[] = [];

    response.responses.forEach((resp, idx) => {
      if (resp.success) {
        console.log(`✅ Token[${idx}] SUCCESS`);
      } else {
        console.log(`❌ Token[${idx}] FAILED`);
        failedTokens.push(tokens[idx]);
      }
    });
    if (failedTokens.length > 0) {
      console.log("🧹 Cleaning invalid tokens:", failedTokens);
      await prisma.fCMToken.deleteMany({
        where: { token: { in: failedTokens } },
      });
    }

  } catch (error) {
    console.log("💥 MULTICAST ERROR:", error);
  }
}

export async function createAndSendNotification({
  studentId,
  title,
  body,
  type,
  data
}: {
  studentId: string;
  title: string;
  body: string;
  type: 'ACHIEVEMENT' | 'SUBMISSION' | 'REGISTRATION';
  data?: any;
}) {
  try {
    await prisma.notification.create({
      data: {
        studentId,
        title,
        body,
        type,
        data: data || {},
      },
    });

    const fcmTokens = await prisma.fCMToken.findMany({
      where: { studentId },
      select: { token: true },
    });
    const tokens = fcmTokens.map((t: { token: string }) => t.token);
    if (tokens.length > 0) {
      await sendNotification(tokens, title, body, data);
    }
  } catch (error) {
    console.error("Error in createAndSendNotification:", error);
  }
}