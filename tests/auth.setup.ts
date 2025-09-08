// import { test as setup } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage';

// const email = process.env.TEST_USER_EMAIL!;
// const password = process.env.TEST_USER_PASSWORD!;

// setup('authenticate', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.login(email, password);

//   await page.context().storageState({ path: 'storageState.json' });
// });

// tests/auth.setup.ts
// import { test as setup } from '@playwright/test';

// const authFile = 'playwright/.auth/user.json';

// setup('authenticate', async ({ page }) => {
//   await page.goto('https://staging.amazingkids.app/login');

//   await page.locator('input[name="email"]').fill('qa.resource1@yopmail.com');
//   await page.locator('input[name="password"]').fill('Test@123');

//   await page.locator('button[type="submit"]').click();

//   await page.waitForURL('**/playlists');

//   // Save session storage/cookies into authFile
//   await page.context().storageState({ path: authFile });
// });


// tests/auth.setup.ts
import fs from 'fs';
import path from 'path';
import { test as setup } from '@playwright/test';

const AUTH_FILE = path.resolve('playwright/.auth/user.json');
const AUTH_DIR = path.dirname(AUTH_FILE);

setup('authenticate', async ({ page }) => {
  fs.mkdirSync(AUTH_DIR, { recursive: true });

  await page.goto('https://staging.amazingkids.app/login');
  await page.fill('input[name="email"]', process.env.TEST_USER_EMAIL!);
  await page.fill('input[name="password"]', process.env.TEST_USER_PASSWORD!);
  await page.getByRole('button', { name: 'Sign in now' }).click();
  await page.waitForURL('**/playlists');

  await page.context().storageState({ path: AUTH_FILE });
});
