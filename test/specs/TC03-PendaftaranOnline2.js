describe("TC03 - PendaftaranOnline2", () => {
  it("tests TC03 - PendaftaranOnline2", async () => {
    await browser.setWindowSize(1052, 825);
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
    await browser.$("/html/body/div/form/button").click();
    await expect(browser).toHaveUrl(
      "https://innerwell-webapp.up.railway.app/pasien/dashboard"
    );
    await browser.$("#poli_id").selectByVisibleText("Poli Umum");
    await browser.$("#tanggal_berobat").click();
    await browser.execute(() => {
      const input = document.querySelector("#tanggal_berobat");
      input.value = "2025-06-21";
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(new Event("change", { bubbles: true }));
    });
    await browser.$("#jadwal_dokter_id").waitForDisplayed({ timeout: 3000 });
    await browser
      .$("#jadwal_dokter_id")
      .selectByVisibleText("Dr. Safira - pagi (07:00 - 10:00)");
    await browser.$("aria/Keluhan Anda").click();
    await browser.$("aria/Keluhan Anda").setValue("aduh saya pusing");
    await browser.$("aria/Daftar").click();
    await expect(browser).toHaveUrl(
      "https://innerwell-webapp.up.railway.app/pasien/dashboard"
    );
  });
});
