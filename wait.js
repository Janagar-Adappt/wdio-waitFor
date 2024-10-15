 await driver.waitUntil(
    async () => {
      return await FooterHome.homeIcon.isDisplayed();
    },
    {
      timeout: 5000,
      timeoutMsg: "The home screen is not displayed within the timeout period",
    }
  );

  await expect(FooterHome.homeIcon).toBeDisplayed();
  await FooterHome.homeIcon.click();
  await driver.pause(2000);
