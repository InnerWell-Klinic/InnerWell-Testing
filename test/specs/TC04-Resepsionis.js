describe("TC04-Resepsionis", () => {
  it("Resepsionis1", async () => {
    await browser.setWindowSize(1920, 1080);
    await browser.url("https://innerwell-webapp.up.railway.app/");
    await expect(browser).toHaveUrl("https://innerwell-webapp.up.railway.app/");
    await browser.$("aria/Sign In").click();
    await expect(browser).toHaveUrl(
      "https://innerwell-webapp.up.railway.app/login"
    );
    await browser.$("aria/Username").click();
    await browser.$("aria/Username").setValue("resepsionis");
    await browser.$("aria/Password").click();
    await browser.$("aria/Password").setValue("password");
    await browser.$("/html/body/div/form/button").click();
    await browser.$("aria/Setujui").click();
    await expect(browser).toHaveUrl(
      "https://innerwell-webapp.up.railway.app/resepsionis/dashboard"
    );
  });
});
