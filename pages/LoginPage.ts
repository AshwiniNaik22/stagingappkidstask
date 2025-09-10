import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly emailInput;
  readonly passwordInput;
  readonly signInButton;

  constructor(page: Page) {
    super(page);
   this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.signInButton = page.getByRole('button', { name: /Sign in now/i });
  }

  async login(email: string, password: string) {
    await this.goto('/login');
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
      await this.page.waitForURL('https://staging.amazingkids.app/playlists', { timeout: 20000 });
  }
}