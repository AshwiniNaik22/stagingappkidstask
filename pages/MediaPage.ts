import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class MediaPage extends BasePage {
  readonly searchBox;

  constructor(page: Page) {
    super(page);
    this.searchBox = page.getByPlaceholder('Search…');
  }

  async addMediaToPlaylist(mediaName: string) {
    await this.searchBox.fill(mediaName);
    await this.page.getByRole('row', { name: new RegExp(mediaName, 'i') })
      .getByRole('checkbox')
      .click();
    await this.page.getByRole('button', { name: 'Add to Queue' }).click();
    await expect(this.page.getByText(mediaName)).toBeVisible();
  }
}
