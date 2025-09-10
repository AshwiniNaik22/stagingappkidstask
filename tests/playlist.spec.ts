import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PlaylistPage } from '../pages/PlaylistPage';

test.describe('Playlist functionality', () => {
  test('should create a playlist with tracks', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const playlistPage = new PlaylistPage(page);

    // Step 1: Login
   await loginPage.login('qa.resource1@yopmail.com', 'Test@123');

    // Step 2: Create Playlist
    await playlistPage.createPlaylist('Functional Playlist','Automated Functional Playlist Desc');

    // Step 3: Add tracks
    await playlistPage.addTracks(['Upload single','videoplayback (4).mp4','Confidence (Short Film).mp4'],'Functional Playlist');
  });
});
