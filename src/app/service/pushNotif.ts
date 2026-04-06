import { prisma } from "@/lib/prisma";
import admin from "./firebaseService";

export async function sendNotification(tokens: string[], title: string, body: string, data?: any) {
  if (tokens.length === 0) return;

  const payload = {
    notification: {
      title,
      body,
    },
    data: data ? Object.entries(data).reduce((acc, [key, value]) => ({ ...acc, [key]: String(value) }), {}) : {},
    tokens: tokens,
  };

  try {
    const response = await admin.messaging().sendEachForMulticast(payload);
    console.log(`Successfully sent ${response.successCount} messages`);
    
    if (response.failureCount > 0) {
      const failedTokens: string[] = [];
      response.responses.forEach((resp, idx) => {
        if (!resp.success) {
          failedTokens.push(tokens[idx]);
        }
      });
      console.log('Failure tokens:', failedTokens);
      
      // Cleanup invalid tokens if necessary
      if (failedTokens.length > 0) {
        await prisma.fCMToken.deleteMany({
          where: { token: { in: failedTokens } }
        });
      }
    }
  } catch (error) {
    console.error('Error sending multicast message:', error);
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
    // 1. Simpan ke database
    await prisma.notification.create({
      data: {
        studentId,
        title,
        body,
        type,
        data: data || {},
      },
    });

    // 2. Ambil token FCM student
    const fcmTokens = await prisma.fCMToken.findMany({
      where: { studentId },
      select: { token: true },
    });

    const tokens = fcmTokens.map((t: { token: string }) => t.token);

    // 3. Kirim via FCM jika ada token
    if (tokens.length > 0) {
      await sendNotification(tokens, title, body, data);
    }
  } catch (error) {
    console.error("Error in createAndSendNotification:", error);
  }
}