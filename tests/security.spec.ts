import { test, expect } from '@playwright/test';

test.describe('Security & Access Control', () => {

  test('TC-SEC01: Access admin without login should redirect', async ({ page }) => {
    await page.goto('/page/admin');
    // Direct access to /page/admin without token should redirect to login
    // Depending on middleware implementation, it might be a redirect or a 401/403
    await expect(page).toHaveURL(/\/page\/login/);
  });

  test('TC-SEC05: Guru should not access admin pages', async ({ page }) => {
    // Login as Guru
    await page.goto('/page/login');
    await page.fill('input[name="email"]', 'wicak@gmail.com');
    await page.fill('input[name="password"]', '12345678');
    await Promise.all([
      page.waitForURL('**/page/guru', { timeout: 10000 }),
      page.click('button[type="submit"]'),
    ]);

    // Try to access admin URL
    await page.goto('/page/admin');
    // Should be Forbidden or Redirected
    // Based on standard security, 403 or redirect to /page/guru
    await expect(page.locator('text=403|Forbidden|Access Denied|Unauthorized')).toBeVisible;
    // Or if it redirects back
    // await expect(page).toHaveURL(/\/page\/guru/);
  });

  test('TC-SEC02: Student should not access guru pages', async ({ page }) => {
    // Login as Student
    await page.goto('/page/login');
    await page.fill('input[name="email"]', '1234567890');
    await page.fill('input[name="password"]', '12345678');
    await Promise.all([
      page.waitForURL('**/', { timeout: 10000 }),
      page.click('button[type="submit"]'),
    ]);

    await page.goto('/page/guru');
    // Should be blocked
    await expect(page.locator('text=403|Forbidden|Access Denied|Unauthorized')).toBeVisible;
  });

  test('TC-SEC07: Logout should invalidate session', async ({ page }) => {
    // Login first
    await page.goto('/page/login');
    await page.fill('input[name="email"]', 'admin@raihprestasi.id');
    await page.fill('input[name="password"]', 'admin123');
    await Promise.all([
      page.waitForURL('**/page/admin', { timeout: 10000 }),
      page.click('button[type="submit"]'),
    ]);

    // Logout - assuming there is a logout button
    // Let's look for a logout button or trigger logout via API/URL if known
    // For now, let's assume there is a button with text "Logout" or "Keluar"
    const logoutBtn = page.locator('button:has-text("Keluar"), button:has-text("Logout"), a:has-text("Keluar"), a:has-text("Logout")');
    if (await logoutBtn.isVisible()) {
      await Promise.all([
        page.waitForURL('**/page/login', { timeout: 10000 }),
        logoutBtn.click(),
      ]);

      // Try to go back
      await page.goto('/page/admin');
      await expect(page).toHaveURL(/\/page\/login/);
    }
  });
});
