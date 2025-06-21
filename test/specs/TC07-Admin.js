describe("TC07-Admin", () => {
  it("tests TC07-Admin", async () => {
    await browser.setWindowSize(1052, 825);
    await browser.url("https://innerwell-webapp.up.railway.app/");
    await expect(browser).toHaveUrl("https://innerwell-webapp.up.railway.app/");
    await browser.$("aria/Sign In").click();
    await expect(browser).toHaveUrl(
      "https://innerwell-webapp.up.railway.app/login"
    );
    await browser.$("aria/Username").click();
    await browser.$("aria/Username").setValue("admin");
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
      "https://innerwell-webapp.up.railway.app/admin/dashboard"
    );
    await browser.performActions([
      {
        type: "key",
        id: "keyboard",
        actions: [{ type: "keyUp", value: "" }],
      },
    ]);
    await browser
      .$("/html/body/div/div/main/div/div[2]/div[2]/table/tbody/tr[1]/td[6]/a")
      .click();
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain("/pembayaran/create/");
    await browser
      .$("/html/body/div/div/main/div/div[2]/div/form/div[2]/button")
      .click();
    await expect(browser).toHaveUrl(
      "https://innerwell-webapp.up.railway.app/admin/dashboard"
    );
  });
});
