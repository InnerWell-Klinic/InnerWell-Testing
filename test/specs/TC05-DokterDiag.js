describe("TC05 - Dokter & Rekam Medis", () => {
  it("tests TC05 - Dokter & Rekam Medis", async () => {
    await browser.setWindowSize(1052, 825);
    await browser.url("https://innerwell-webapp.up.railway.app/");
    await expect(browser).toHaveUrl("https://innerwell-webapp.up.railway.app/");
    await browser.$("aria/Sign In").click();
    await expect(browser).toHaveUrl(
      "https://innerwell-webapp.up.railway.app/login"
    );
    await browser.$("aria/Username").click();
    await browser.$("aria/Username").setValue("dokter_safira");
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
      "https://innerwell-webapp.up.railway.app/dokter/dashboard"
    );
    await browser.performActions([
      {
        type: "key",
        id: "keyboard",
        actions: [{ type: "keyUp", value: "" }],
      },
    ]);
    await browser.$("aria/Diagnosa").click();
    await browser.$("aria/Diagnosa").setValue("aduh jangan begini lah");
    await browser
      .$(
        '//*[@id="main-content"]/div/div[6]/div[2]/table/tbody/tr[1]/td[6]/button'
      )
      .click();
    await browser
      .$(
        '//*[@id="main-content"]/div/div[6]/div[2]/table/tbody/tr[2]/td[6]/button'
      )
      .click();
    await browser.$("aria/Selesai").click();
  });
});
