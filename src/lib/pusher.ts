// lib/pusher.ts
import Pusher from "pusher";

export const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.PUSHER_CLUSTER!,
  useTLS: true,
});

/** Channel Names */
export const CHANNELS = {
  PRESTASI: "prestasi-channel",
  DASHBOARD: "dashboard-channel",
  AKADEMIK: "akademik-channel",
} as const;

/** Event Names */
export const EVENTS = {
  // Prestasi
  PRESTASI_CREATE: "prestasi:create",
  PRESTASI_UPDATE: "prestasi:update",
  PRESTASI_DELETE: "prestasi:delete",
  // Kompetisi
  KOMPETISI_CREATE: "kompetisi:create",
  KOMPETISI_UPDATE: "kompetisi:update",
  KOMPETISI_DELETE: "kompetisi:delete",
  // Registrasi
  REGISTRASI_CREATE: "registrasi:create",
  REGISTRASI_UPDATE: "registrasi:update",
  // Pengajuan Mandiri
  PENGAJUAN_CREATE: "pengajuan:create",
  PENGAJUAN_UPDATE: "pengajuan:update",
  PENGAJUAN_DELETE: "pengajuan:delete",
  // Pengumuman
  PENGUMUMAN_CREATE: "pengumuman:create",
  PENGUMUMAN_UPDATE: "pengumuman:update",
  PENGUMUMAN_DELETE: "pengumuman:delete",
  // Berita
  BERITA_CREATE: "berita:create",
  BERITA_UPDATE: "berita:update",
  BERITA_DELETE: "berita:delete",
  // Notifikasi
  NOTIF_UPDATE: "notif:update",
  NOTIF_CREATE: "notif:create",
  // Dashboard
  DASHBOARD_UPDATE: "dashboard:update",
  // Akademik
  NILAI_CREATE: "nilai:create",
  NILAI_UPDATE: "nilai:update",
  NILAI_DELETE: "nilai:delete",
} as const;

/**
 * Fire-and-forget Pusher trigger.
 * Tidak memblokir response jika trigger gagal.
 */
export function triggerPusher(
  channel: string,
  event: string,
  data: object
): void {
  pusher.trigger(channel, event, data).catch((err) => {
    console.error(`[Pusher] Failed to trigger ${event} on ${channel}:`, err);
  });
}