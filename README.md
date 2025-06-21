# InnerWell Automated Testing 🧪

<p align="center">
  <img style="margin-right: 8px;" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img style="margin-right: 8px;" src="https://img.shields.io/badge/WebDriverIO-45A753?style=for-the-badge&logo=webdriverio&logoColor=white" alt="WebDriverIO">
  <img style="margin-right: 8px;" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img style="margin-right: 8px;" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman">
</p>

Proyek ini berisi serangkaian pengujian otomatis yang dirancang untuk memastikan kualitas dan keandalan aplikasi InnerWell. Dibuat menggunakan JavaScript dan WebDriverIO, pengujian ini mencakup berbagai skenario, mulai dari pendaftaran pasien hingga interaksi admin, untuk memvalidasi fungsionalitas inti sistem.

## Fitur Utama ✨

*   **Pengujian End-to-End Lengkap:** Melakukan pengujian menyeluruh dari alur kerja pengguna, mulai dari pendaftaran hingga logout. ✅
*   **Integrasi dengan Postman:** Menyertakan koleksi Postman untuk pengujian API yang mudah. 📦
*   **Struktur Test yang Terorganisir:** Test cases disusun dengan rapi untuk pemeliharaan dan skalabilitas. 📂
*   **Cakupan Luas:** Mencakup pengujian untuk berbagai peran pengguna, termasuk pasien, resepsionis, dokter, dan admin. 👨‍⚕️👩‍⚕️

## Tech Stack 🛠️

*   **Bahasa Pemrograman:** JavaScript ☕
*   **Framework Pengujian:** WebDriverIO 🌐
*   **Runtime:** Node.js ⚙️
*   **Alat Pengujian API:** Postman 📬

## Instalasi & Menjalankan 🚀

Ikuti langkah-langkah berikut untuk menyiapkan dan menjalankan pengujian di lingkungan lokal Anda:

1.  Clone repositori:
    ```bash
    git clone https://github.com/InnerWell-Klinic/InnerWell-Testing
    ```
2.  Masuk ke direktori:
    ```bash
    cd InnerWell-Testing
    ```
3.  Install dependensi:
    ```bash
    npm install
    ```
    ```bash
    npm init -y
    ```
4.  Install WDIO:
    ```bash
    npm install --save-dev @wdio/cli
    npx wdio config
    ```
5.  Install Dependency Lain:
    ```bash
    npm install -g newman
    npm install --save-dev @wdio/allure-reporter allure-commandline
    npm install @faker-js/faker
    ```
6.  Pada wdio.conf.js Tambahkan:
    ```bash
    reporters: ['spec', ['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false,
    }]],
    ```
    ```bash
    maxInstances: 1,
    ```
7.  Jalankan CMD:
    ```bash
    npx wdio run wdio.conf.js
    npx allure generate allure-results --clean -o allure-report
    npx allure open allure-report
    ```

# Rekomendasi saat konfigurasi:

1.  Test runner: local
2.  Framework: mocha
3.  Reporter: allure
4.  Services: chromedriver
5.  Path: ./test/specs/**/*.js

## Struktur Folder

<pre lang="md"> ## 📁 Struktur Folder ```plaintext . ├── test/ │ └── specs/ # Tempat test-case disimpan ├── postman/ # Koleksi Postman Collection (jika digunakan) ├── wdio.conf.js # Konfigurasi WebDriverIO ├── allure-results/ # Output hasil test (mentah) └── allure-report/ # Laporan hasil test dalam bentuk HTML ``` </pre>

## Cara Berkontribusi 🤝

1.  Fork repositori ini.
2.  Buat branch dengan nama fitur/perbaikan Anda: `git checkout -b feature/nama-fitur`.
3.  Lakukan commit perubahan Anda: `git commit -m 'Tambahkan: deskripsi perubahan'`.
4.  Push ke branch Anda: `git push origin feature/nama-fitur`.
5.  Buat Pull Request.
