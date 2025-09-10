import { Page, expect } from '@playwright/test';

export class PlaylistPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Create a playlist with required fields and optional description
   * @param name - Playlist name
   * @param description - Playlist description
   */
  async createPlaylist(name: string, description: string) {
    // Open the create playlist modal
    await this.page.getByRole('button', { name: /create playlist/i }).click();

    // Fill Playlist Name
    await this.page.getByLabel('Playlist Name').fill(name);

    // Fill Playlist Description
      if (description) {
    await this.page.getByLabel('Playlist Description').fill(description);
  }


    // Wait until the "Create Playlist" button becomes enabled
    const createButton = this.page.getByRole('button', { name: 'Create Playlist' });
   await expect(createButton).toBeEnabled({ timeout: 20000 });

    // Click to create the playlist
    await createButton.click();

    //  Verify playlist is visible in the list
     const playlistCard = this.page.locator('div.MuiTypography-h3', { hasText: name });
    await expect(playlistCard).toBeVisible({ timeout: 10000 });
  }

  /**
   * Add a track to the currently selected playlist
   * @param trackName - Name of the track to add
   * @param playlistName - Name of the playlist to scope the button
   */
async addTracks(trackNames: string[], playlistName: string) {
  // Locate the playlist container
  const playlistCard = this.page.locator('div.MuiTypography-h3', { hasText: playlistName }).locator('..');
  await expect(playlistCard).toBeVisible({ timeout: 10000 });

  // Open the Add Tracks modal
  const addTracksButton = this.page.getByText('Summer', { exact: true });
  await expect(addTracksButton).toBeVisible();
  await addTracksButton.click();

  // Wait for search input
  const searchInput = this.page.getByPlaceholder('Search…');
  await expect(searchInput).toBeVisible({ timeout: 10000 });

  const resultsContainer = this.page.locator('div[role="rowgroup"]');
  await expect(resultsContainer).toBeVisible({ timeout: 20000 });

  // Add each track
  for (const trackName of trackNames) {
    // Search the track
    await searchInput.fill(trackName);
    await this.page.waitForTimeout(500); // optional short wait for search results

    const trackRow = resultsContainer.locator('div[role="row"]', { hasText: trackName });
    await expect(trackRow).toHaveCount(1, { timeout: 25000 });

    const addButton = trackRow.first().locator('button:has(svg)');
    await expect(addButton).toBeVisible({ timeout: 20000 });
    await addButton.click();
  }

  // Close modal
  const doneButton = this.page.getByRole('button', { name: 'Save Playlist' });
  await expect(doneButton).toBeVisible({ timeout: 20000 });
  await doneButton.click();
}

}
