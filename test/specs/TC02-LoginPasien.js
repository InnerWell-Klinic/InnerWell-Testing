describe("TC02 - LoginPasien", () => {
  it("tests TC02 - LoginPasien", async () => {
    await browser.setWindowSize(1128, 825);
    await browser.url("https://innerwell-webapp.up.railway.app/");
    await expect(browser).toHaveUrl("https://innerwell-webapp.up.railway.app/");
    await browser.$("aria/Sign In").click();
    await expect(browser).toHaveUrl(
      "https://innerwell-webapp.up.railway.app/login"
    );
    await browser.$("form").click();
    await browser.$("#username").click();
    await browser.$("#username").setValue("pasien1");
    await browser.$("#password").click();
    await browser.$("#password").setValue("password");
    await browser.$("/html/body/div/form/button").click();
    await expect(browser).toHaveUrl(
      "https://innerwell-webapp.up.railway.app/pasien/dashboard"
    );
  });
});
