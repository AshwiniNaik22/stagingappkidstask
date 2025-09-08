import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PlaylistPage } from '../pages/PlaylistPage';


test('should create a playlist', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const playlistPage = new PlaylistPage(page);

  await loginPage.login('qa.resource1@yopmail.com', 'Test@123');

  await playlistPage.createPlaylist('My Test Playlist', 'Automated playlist');
  await playlistPage.assertPlaylistExists('My Test Playlist');

});
