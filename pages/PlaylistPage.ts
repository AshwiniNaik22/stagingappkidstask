// import { Page, expect } from '@playwright/test';
// import { BasePage } from '../pages/BasePage';

// export class PlaylistPage extends BasePage {
//   constructor(page: Page) {
//     super(page);
//   }

//   async open() {
//     await this.page.goto('/playlists');
//   }

//   async createPlaylist(title: string, description: string) {
//     await this.clickButtonByName('Create Playlist');
//     await this.page.getByLabel('Title').fill(title);
//     await this.page.getByLabel('Description').fill(description);
//     await this.page.getByRole('button', { name: 'Save' }).click();
//     await this.page.locator('.spinner').waitFor({ state: 'detached' });
//   }

//   async assertPlaylistExists(title: string) {
//     await expect(this.page.getByRole('heading', { name: title })).toBeVisible();
//   }
// }


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

//   async editTitle(newTitle: string) {
//     await this.page.getByRole('button', { name: 'Edit Title' }).click();
//     await this.page.getByRole('textbox').fill(newTitle);
//     await this.page.keyboard.press('Enter');
//     await expect(this.page.getByText(newTitle, { exact: true })).toBeVisible();
//   }
}
