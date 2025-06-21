describe("TC10-Logout", () => {
  it("tests TC10-Logout", async () => {
    await browser.setWindowSize(1032, 825);
    await browser.url("https://innerwell-webapp.up.railway.app/");
    await expect(browser).toHaveUrl("https://innerwell-webapp.up.railway.app/");
    await browser.$("aria/Sign In").click();
    await expect(browser).toHaveUrl(
      "https://innerwell-webapp.up.railway.app/login"
    );
    await browser.$("aria/Username").click();
    await browser.$("aria/Username").setValue("pasien3");
    await browser.$("aria/Password").click();
    await browser.$("aria/Password").setValue("password");
    await browser.performActions([
      {
        type: "key",
        id: "keyboard",
        actions: [{ type: "keyDown", value: "" }],
      },
    ]);
    await expect(browser).toHaveUrl(
      "https://innerwell-webapp.up.railway.app/pasien/dashboard"
    );
    await browser.performActions([
      {
        type: "key",
        id: "keyboard",
        actions: [{ type: "keyUp", value: "" }],
      },
    ]);
    await browser.$('//*[@id="navbar-toggle"]').click();
    await browser.$("aria/Logout").click();
    await expect(browser).toHaveUrl("https://innerwell-webapp.up.railway.app/");
  });
});
