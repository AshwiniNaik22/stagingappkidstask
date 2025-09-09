import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class PlaylistPage extends BasePage {
  readonly createPlaylistButton;
  readonly titleInput;
  readonly descriptionInput;
  readonly saveButton;

  constructor(page: Page) {
    super(page);
    this.createPlaylistButton = page.locator('button:has-text("Create Playlist")');
    this.titleInput = page.getByLabel('Title');
    this.descriptionInput = page.getByLabel('Description');
    this.saveButton = page.getByRole('button', { name: /Save Playlist/i });
  }

    async openCreatePlaylistForm() {
    await this.clickButton('Create Playlist');
  }

  async createPlaylist(name: string, description: string) {
    await this.openCreatePlaylistForm();
    await this.page.getByLabel('Playlist Name').fill(name);
    await this.page.getByLabel('Playlist Description').fill(description);

    // Submit inside the drawer
    const drawer = this.page.locator('.MuiDrawer-paper');
    await drawer.getByRole('button', { name: 'Create Playlist' }).click();
  }


  async assertPlaylistExists(name: string) {
    await expect(this.page.locator('div.MuiTypography-h3', { hasText: name })).toBeVisible();
  }

}
