import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {

  test('TC-G01: Login with valid Guru account', async ({ page }) => {
    await page.goto('/page/login');
    await page.fill('input[name="email"]', 'wicak@gmail.com');
    await page.fill('input[name="password"]', '12345678');
    await Promise.all([
      page.waitForURL('**/page/guru', { timeout: 10000 }),
      page.click('button[type="submit"]'),
    ]);

    // Should be redirected to Guru dashboard
    await expect(page.locator('h1')).toContainText('Dashboard');
  });

  test('TC-G02: Login with incorrect password', async ({ page }) => {
    await page.goto('/page/login');
    await page.fill('input[name="email"]', 'wicak@gmail.com');
    await page.fill('input[name="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');

    // Check for error message
    // Assuming the error message is displayed in the red box
    await expect(page.locator('div.bg-red-50')).toBeVisible();
    await expect(page.locator('div.bg-red-50')).toContainText('Failed to login');
  });

  test('TC-A01: Login with valid Admin account', async ({ page }) => {
    await page.goto('/page/login');
    await page.fill('input[name="email"]', 'admin@raihprestasi.id');
    await page.fill('input[name="password"]', 'admin123');
    await Promise.all([
      page.waitForURL('**/page/admin', { timeout: 10000 }),
      page.click('button[type="submit"]'),
    ]);
  });

  test('TC-S01: Login with valid Student account (NISN)', async ({ page }) => {
    await page.goto('/page/login');
    // Using email field for NISN if students login via NISN but same form
    // Let's check student login logic. Actually setup-test-users.ts shows student has NISN and password.
    // In LoginPage, it uses email and password for fetch.
    await page.fill('input[name="email"]', '1234567890');
    await page.fill('input[name="password"]', '12345678');
    await Promise.all([
      page.waitForURL('**/', { timeout: 10000 }),
      page.click('button[type="submit"]'),
    ]);
  });
});
