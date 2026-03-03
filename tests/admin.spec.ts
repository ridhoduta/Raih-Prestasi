import { test, expect } from '@playwright/test';

test.describe('Admin Management', () => {
  
  test.beforeEach(async ({ page }) => {
    // Login as Admin
    await page.goto('/page/login');
    await page.fill('input[name="email"]', 'admin@raihprestasi.id');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/\/page\/admin/);
  });

  test('TC-A01: Add new teacher', async ({ page }) => {
    await page.goto('/page/admin/teachers/new');
    
    const teacherName = `Guru Test ${Date.now()}`;
    const teacherEmail = `guru.${Date.now()}@example.com`;
    
    await page.fill('#teacher-name', teacherName);
    await page.fill('#teacher-email', teacherEmail);
    await page.fill('#teacher-password', 'password123');
    
    await page.click('button[type="submit"]');
    
    // Check for success modal
    await expect(page.locator('text=Berhasil')).toBeVisible();
    await expect(page.locator('text=Guru berhasil ditambahkan')).toBeVisible();
    
    // Close modal and verify redirection
    await page.click('text=OK'); // Assuming AlertModal has OK button
    await expect(page).toHaveURL(/\/page\/admin\/teachers/);
    await expect(page.locator(`text=${teacherName}`)).toBeVisible();
  });

  test('TC-A08: Add new category', async ({ page }) => {
    await page.goto('/page/admin/categories');
    
    await page.click('#add-category-btn');
    
    const categoryName = `Category ${Date.now()}`;
    await page.fill('#category-name', categoryName);
    await page.click('#save-category-btn');
    
    await expect(page.locator('text=Berhasil')).toBeVisible();
    await expect(page.locator(`text=${categoryName}`)).toBeVisible();
  });

  test('TC-A05: Add new student', async ({ page }) => {
    await page.goto('/page/admin/students/new');
    
    const nisn = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    const studentName = `Siswa Test ${nisn}`;
    
    await page.fill('#student-nisn', nisn);
    await page.fill('#student-name', studentName);
    await page.fill('#student-kelas', 'XII RPL 1');
    await page.fill('#student-angkatan', '2025');
    
    await page.click('#save-student-btn');
    
    await expect(page.locator('text=Berhasil')).toBeVisible();
    // Redirect happens after 1.5s
    await page.waitForURL(/\/page\/admin\/students/);
    await expect(page.locator(`text=${studentName}`)).toBeVisible();
  });

  test('TC-A10: Add new news', async ({ page }) => {
    await page.goto('/page/admin/news/new');
    
    const newsTitle = `Berita Utama ${Date.now()}`;
    await page.fill('#news-title', newsTitle);
    await page.fill('#news-content', 'Ini adalah konten berita yang sangat penting untuk sekolah.');
    
    // Optional: Thumbnail skip for now if upload is complicated in test
    
    await page.click('#save-news-btn');
    
    await expect(page.locator('text=Berhasil')).toBeVisible();
    await page.click('text=OK');
    await expect(page).toHaveURL(/\/page\/admin\/news/);
    await expect(page.locator(`text=${newsTitle}`)).toBeVisible();
  });
});
