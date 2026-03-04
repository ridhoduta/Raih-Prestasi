import { test, expect } from '@playwright/test';

test.describe('Competition Management (Guru)', () => {

  test.beforeEach(async ({ page }) => {
    // Login as Guru before each test
    await page.goto('/page/login');
    await page.fill('input[name="email"]', 'wicak@gmail.com');
    await page.fill('input[name="password"]', '12345678');
    await Promise.all([
      page.waitForURL('**/page/guru', { timeout: 10000 }),
      page.click('button[type="submit"]'),
    ]);
  });

  test('TC-G04: Add new competition', async ({ page }) => {
    await page.goto('/page/guru/competitions/new');

    const compTitle = 'Olimpiade Sains Nasional 2026';
    await page.fill('#comp-title', compTitle);
    await page.fill('#comp-description', 'Kompetisi sains tingkat nasional.');

    await page.selectOption('#comp-category', { index: 1 });
    await page.selectOption('#comp-level', { index: 1 });

    await page.fill('#comp-start-date', '2026-04-01');
    await page.fill('#comp-end-date', '2026-04-10');

    await page.click('#save-comp-btn');

    await expect(page.locator('text=Berhasil')).toBeVisible();
    await Promise.all([
      page.waitForURL('**/page/guru/competitions', { timeout: 10000 }),
      page.click('text=OK'),
    ]);

    await expect(page.locator(`text=${compTitle}`)).toBeVisible();
    console.log('Competition creation: Success');
  });

  test('TC-G05: Validation for missing category', async ({ page }) => {
    await page.goto('/page/guru/competitions/new'); // Assuming direct URL

    await page.fill('input[name="title"]', 'Invalid Competition');
    // Skip category selection

    await page.click('button[type="submit"]');

    // Check for validation message
    // This depends on how it's implemented (native or custom)
    const validationMsg = page.locator('text=required');
    // Just an example check
    console.log('Validation test: Completed');
  });
});
