try {
    await driver.waitUntil(
      async function () {
        try {
          const homeIconDisplayed = await FooterHome.homeIcon.isDisplayed();
          const isHeaderDisplayed =
            await HomeScreen.contentListItem.isDisplayed();
          return homeIconDisplayed && isHeaderDisplayed;
        } catch (error) {
          console.error(`An error occurred: ${error}`);
          return false;
        }
      },
      { timeout: 15000, timeoutMsg: "Element did not become visible" }
    );
  } catch (error) {
    console.error(`An error occurred while waiting: ${error}`);
  }
