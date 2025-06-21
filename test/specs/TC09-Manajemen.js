describe("TC07-Manajemen", () => {
  it("tests TC07-Manajemen", async () => {
    await browser.setWindowSize(1032, 825)
    await browser.url("https://innerwell-webapp.up.railway.app/")
    await expect(browser).toHaveUrl("https://innerwell-webapp.up.railway.app/")
    await browser.$("aria/Sign In").click()
    await expect(browser).toHaveUrl("https://innerwell-webapp.up.railway.app/login")
    await browser.$("aria/Username").click()
    await browser.$("aria/Username").setValue("manajemen")
    await browser.$("aria/Password").click()
    await browser.$("aria/Password").setValue("password")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await expect(browser).toHaveUrl("https://innerwell-webapp.up.railway.app/manajemen/dashboard")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("//*[@id=\"invoiceTableBody\"]/tr[1]/td[8]/a").click()
    await expect(browser).toHaveUrl("https://innerwell-webapp.up.railway.app/manajemen/invoice/9f14ddf8-7bc6-4510-8ff5-931c06ad95e3")
  });
});
