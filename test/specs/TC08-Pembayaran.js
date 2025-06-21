import { exec } from "child_process";

describe("TC08-Pembayaran", () => {
  it("should run Postman collection with newman", async () => {
    await new Promise((resolve, reject) => {
      exec(
        "npx newman run ./postman/midtrans.postman_collection.json",
        (error, stdout, stderr) => {
          console.log(stdout);
          if (error) {
            console.error("❌ Gagal : ");
            console.error(stderr);
            return reject(error);
          }
          console.log("✅ Berhasil Membayar");
          resolve();
        }
      );
    });
  });
});
