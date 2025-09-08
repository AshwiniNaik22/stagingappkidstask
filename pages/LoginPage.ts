// import { Page, expect } from '@playwright/test';

// export class LoginPage {
//   constructor(private readonly page: Page) {}

//   async login(email: string, password: string) {
//     await this.page.goto('/login');
//     await this.page.getByPlaceholder('Email').fill(email);
//     await this.page.getByPlaceholder('Password').fill(password);
//     await this.page.getByRole('button', { name: 'Login' }).click();
//     await this.page.waitForURL('**/dashboard');
//     await expect(this.page).toHaveURL(/.*dashboard/);
//   }
// }

import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly emailInput;
  readonly passwordInput;
  readonly signInButton;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.getByPlaceholder('Email');
    this.passwordInput = page.getByPlaceholder('Password');
    this.signInButton = page.getByRole('button', { name: /Sign in now/i });
  }

  async login(email: string, password: string) {
    await this.goto('/login');
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
      await this.page.waitForURL('https://staging.amazingkids.app/playlists', { timeout: 20000 });
    // await expect(this.page).toHaveURL(/.*playlists/);
  }
}
