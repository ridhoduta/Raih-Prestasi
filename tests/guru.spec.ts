import { test, expect } from '@playwright/test';

test.describe('Guru Management', () => {
  
  test.beforeEach(async ({ page }) => {
    // Login as Guru
    await page.goto('/page/login');
    await page.fill('input[name="email"]', 'wicak@gmail.com');
    await page.fill('input[name="password"]', '12345678');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/\/page\/guru/);
  });

  test('TC-G04: Add new competition', async ({ page }) => {
    await page.goto('/page/guru/competitions/new');
    
    const compTitle = `Lomba ${Date.now()}`;
    await page.fill('#comp-title', compTitle);
    await page.fill('#comp-description', 'Deskripsi lomba yang menarik.');
    
    // Select dates
    await page.fill('#comp-start-date', '2026-05-01');
    await page.fill('#comp-end-date', '2026-05-30');
    
    // Select Category & Level (Must exist in DB)
    await page.selectOption('#comp-category', { index: 1 });
    await page.selectOption('#comp-level', { index: 1 });
    
    await page.click('#save-comp-btn');
    
    await expect(page.locator('text=Berhasil')).toBeVisible();
    await page.click('text=OK');
    await expect(page).toHaveURL(/\/page\/guru\/competitions/);
    await expect(page.locator(`text=${compTitle}`)).toBeVisible();
  });

  test('TC-G15: Add new announcement', async ({ page }) => {
    await page.goto('/page/guru/announcements/new');
    
    const annoTitle = `Pengumuman Penting ${Date.now()}`;
    await page.fill('#anno-title', annoTitle);
    await page.fill('#anno-content', 'Diharapkan seluruh siswa berkumpul di lapangan.');
    
    await page.click('#save-anno-btn');
    
    await expect(page.locator('text=Berhasil')).toBeVisible();
    await page.click('text=OK');
    await expect(page).toHaveURL(/\/page\/guru\/announcements/);
    await expect(page.locator(`text=${annoTitle}`)).toBeVisible();
  });

  test('TC-G08: Accept registration', async ({ page }) => {
    await page.goto('/page/guru/registrations');
    
    // Look for a "Menunggu" registration
    const waitingRow = page.locator('tr:has-text("Menunggu")').first();
    
    if (await waitingRow.isVisible()) {
        await waitingRow.locator('button:has-text("Terima")').click();
        
        // Fill note and confirm
        await page.fill('#reg-action-note', 'Selamat, pendaftaran Anda diterima.');
        await page.click('#reg-confirm-btn');
        
        await expect(page.locator('text=Berhasil')).toBeVisible();
    } else {
        console.log('No waiting registrations to test.');
    }
  });

  test('TC-G09: Reject registration with note', async ({ page }) => {
    await page.goto('/page/guru/registrations');
    
    const waitingRow = page.locator('tr:has-text("Menunggu")').first();
    
    if (await waitingRow.isVisible()) {
        await waitingRow.locator('button:has-text("Tolak")').click();
        
        await page.fill('#reg-action-note', 'Maaf, data tidak lengkap.');
        await page.click('#reg-confirm-btn');
        
        await expect(page.locator('text=Berhasil')).toBeVisible();
    } else {
        console.log('No waiting registrations to test.');
    }
  });
});

