import { test, expect } from '@playwright/test';

test.describe('Integration Flow: Admin to Guru', () => {

  test('TC-INT01: Admin creates Category/Level and Guru uses it for Competition', async ({ page }) => {
    const timestamp = Date.now();
    const categoryName = `IntCat ${timestamp}`;
    const levelName = `IntLevel ${timestamp}`;
    const competitionTitle = `IntComp ${timestamp}`;

    // 1. Admin creates Category
    await page.goto('/page/login');
    await page.fill('input[name="email"]', 'admin@raihprestasi.id');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/\/page\/admin/);

    await page.goto('/page/admin/categories');
    await page.click('#add-category-btn');
    await page.fill('#category-name', categoryName);
    await page.click('#save-category-btn');
    await expect(page.locator(`text=${categoryName}`)).toBeVisible();

    // 2. Admin creates Level
    await page.goto('/page/admin/levels');
    await page.click('#add-level-btn');
    await page.fill('#level-name', levelName);
    await page.click('#save-level-btn');
    await expect(page.locator(`text=${levelName}`)).toBeVisible();

    // 3. Logout
    await page.goto('/page/login'); // Simple way to reset or trigger logout if implemented

    // 4. Guru logs in and creates Competition with new Category/Level
    await page.fill('input[name="email"]', 'wicak@gmail.com');
    await page.fill('input[name="password"]', '12345678');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/\/page\/guru/);

    await page.goto('/page/guru/competitions/new');
    await page.fill('#comp-title', competitionTitle);
    await page.fill('#comp-description', 'Integration test competition.');
    await page.fill('#comp-start-date', '2026-06-01');
    await page.fill('#comp-end-date', '2026-06-30');
    
    // Select the newly created category and level
    await page.selectOption('#comp-category', { label: categoryName });
    await page.selectOption('#comp-level', { label: levelName });
    
    await page.click('#save-comp-btn');
    
    await expect(page.locator('text=Berhasil')).toBeVisible();
    await page.click('text=OK');
    await expect(page).toHaveURL(/\/page\/guru\/competitions/);
    await expect(page.locator(`text=${competitionTitle}`)).toBeVisible();
  });
});
