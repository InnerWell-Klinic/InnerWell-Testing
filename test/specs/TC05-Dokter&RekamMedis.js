describe("TC05-DokterRekamMedis", () => {
  it("tests TC05-DokterRekamMedis", async () => {
    await browser.setWindowSize(1032, 825)
    await browser.url("https://innerwell-webapp.up.railway.app/")
    await expect(browser).toHaveUrl("https://innerwell-webapp.up.railway.app/")
    await browser.$("aria/Sign In").click()
    await expect(browser).toHaveUrl("https://innerwell-webapp.up.railway.app/login")
    await browser.$("aria/Username").click()
    await browser.$("aria/Username").setValue("dokter_safira")
    await browser.$("aria/Password").click()
    await browser.$("aria/Password").setValue("password")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await expect(browser).toHaveUrl("https://innerwell-webapp.up.railway.app/dokter/dashboard")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("//*[@id=\"main-content\"]/div/div[5]/div/table/tbody/tr[1]/td[6]/a").click()
    await expect(browser).toHaveUrl("https://innerwell-webapp.up.railway.app/dokter/medical-record/23f00a0b-2add-4b9d-bd60-93da21730ac6")
  });
});
