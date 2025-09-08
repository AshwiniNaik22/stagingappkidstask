// import { Page, expect } from '@playwright/test';

// export class BasePage {
//   constructor(protected readonly page: Page) {}

//   async goto(path: string) {
//     await this.page.goto(path);
//   }

//   async clickButtonByName(name: string) {
//     await this.page.getByRole('button', { name }).click();
//   }

//   async expectTextVisible(text: string, context: string = 'main') {
//     const locator = this.page.locator(context).getByText(text, { exact: true }).first();
//     await expect(locator).toBeVisible();
//   }
// }
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
