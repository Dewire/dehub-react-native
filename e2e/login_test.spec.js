/* eslint-disable no-undef */

describe('Example', () => {
  beforeEach(async () => {
    // await device.reloadReactNative();
  });

  it('should have input fields and a login button', async () => {
    await expect(element(by.id('loginButton'))).toBeVisible();
    await expect(element(by.id('usernameInput'))).toBeVisible();
    await expect(element(by.id('passwordInput'))).toBeVisible();
  });

  it('should show the login button when the wrong credentials are entered', async () => {
    await element(by.id('usernameInput')).replaceText('ausername');
    await element(by.id('passwordInput')).replaceText('wrongpassword');
    await element(by.id('loginButton')).tap();
    await expect(element(by.id('loginButton'))).toBeVisible();
  });

  it('should show the gists page on a successful login', async () => {
    await device.reloadReactNative();
    await element(by.id('usernameInput')).replaceText(process.env.DEHUB_USERNAME);
    await element(by.id('passwordInput')).replaceText(process.env.DEHUB_PASSWORD);
    await element(by.id('loginButton')).tap();
    await expect(element(by.id('gistsContainer'))).toBeVisible();
  });
});
