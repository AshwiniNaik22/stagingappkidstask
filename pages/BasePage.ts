
import { Page, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async clickButton(name: string) {
    await this.page.getByRole('button', { name }).click();
  }
  

  async expectVisible(text: string) {
    await expect(this.page.getByText(text, { exact: true })).toBeVisible();
  }
}
