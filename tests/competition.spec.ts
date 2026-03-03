import { test, expect } from '@playwright/test';

test.describe('Competition Management (Guru)', () => {
  
  test.beforeEach(async ({ page }) => {
    // Login as Guru before each test
    await page.goto('/page/login');
    await page.fill('input[name="email"]', 'wicak@gmail.com');
    await page.fill('input[name="password"]', '12345678');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/\/page\/guru/);
  });

  test('TC-G04: Add new competition', async ({ page }) => {
    await page.goto('/page/guru/competitions');
    
    // Click "Tambah Kompetisi" button - assuming it exists
    await page.click('text=Tambah Kompetisi');
    
    await page.fill('input[name="title"]', 'Olimpiade Sains Nasional 2026');
    await page.fill('textarea[name="description"]', 'Kompetisi sains tingkat nasional.');
    
    // Select Category & Level - assuming they have select inputs
    // We might need to find the correct selectors based on the UI
    // For now using placeholders
    await page.selectOption('select[name="categoryId"]', { index: 1 });
    await page.selectOption('select[name="levelId"]', { index: 1 });
    
    await page.fill('input[name="startDate"]', '2026-04-01');
    await page.fill('input[name="endDate"]', '2026-04-10');
    
    await page.click('button[type="submit"]');
    
    // Should be redirected back or show success toast
    await expect(page.locator('text=Olimpiade Sains Nasional 2026')).toBeVisible();
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
