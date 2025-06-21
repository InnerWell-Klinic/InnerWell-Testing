import { faker } from "@faker-js/faker";

describe("TC01 - RegisterPasien", () => {
  it("tests TC01 - RegisterPasien", async () => {
    const namaLengkap = faker.person.fullName();
    const nik = faker.string.numeric(16);
    const noTelp = faker.string.numeric(12);
    const email = faker.internet.email();
    const username = faker.internet.userName();
    const password = "password";
    const alamat = faker.location.city();
    const tanggalLahir = faker.date
      .birthdate({ min: 1980, max: 2005, mode: "year" })
      .toISOString()
      .split("T")[0];

    await browser.setWindowSize(1280, 900);
    await browser.url("https://innerwell-webapp.up.railway.app/");
    await expect(browser).toHaveUrl("https://innerwell-webapp.up.railway.app/");
    await browser.$("aria/Register").click();
    await expect(browser).toHaveUrl(
      "https://innerwell-webapp.up.railway.app/register"
    );

    await browser.$("#nama_lengkap").setValue(namaLengkap);
    await browser.$("#nik").setValue(nik);
    await browser.$("#no_telp").setValue(noTelp);
    await browser.$("#email").setValue(email);
    await browser.$("#jenis_kelamin").selectByAttribute("value", "laki-laki");
    await browser.$("#golongan_darah").setValue("AB");
    await browser.$("#username").setValue(username);
    await browser.$("#password").setValue(password);
    await browser.$("#password_confirmation").setValue(password);
    await browser.$("#alamat").setValue(alamat);
    await browser.$("#tanggal_lahir").setValue(tanggalLahir);

    await browser.$("/html/body/div/form/div[2]/button").click();
  });
});
