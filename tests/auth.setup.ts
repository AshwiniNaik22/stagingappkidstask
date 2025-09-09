import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto('/login');

  await loginPage.emailInput.fill(process.env.TEST_USER_EMAIL!);
  await loginPage.passwordInput.fill(process.env.TEST_USER_PASSWORD!);
  await loginPage.signInButton.click();

  await page.waitForURL('**/playlists');
  await expect(page).toHaveURL(/.*playlists/);

  // Save authenticated state
  await page.context().storageState({ path: authFile });
});
