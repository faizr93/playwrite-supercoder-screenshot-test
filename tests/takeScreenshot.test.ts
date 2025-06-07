import test from '@playwright/test';

test.describe('Screenshot Test', () => {
  test('Take a screenshot of the page', async ({ page }) => {
    // Navigate to the desired URL
    await page.goto('https://dashboard.supercoder.dev/');

    // Take a screenshot and save it to the specified path
    await page.screenshot({ path: 'screenshot.png' });
  });
});