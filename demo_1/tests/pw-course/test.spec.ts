import { test, expect } from '@playwright/test';
test('has title', async ({ page }) => {
    await page.goto('http://material.playwrightvn.com/');

    await expect(page).toHaveTitle(/Tài liệu học automation test/);
});

test('get stated link', async ({ page }) => {
    await page.goto('http://material.playwrightvn.com/');
    await page.getByRole('link', { name: 'Bài học 1: Register Page (có đủ các element)' }).click();
})