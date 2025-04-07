import path from 'node:path';
import fs from 'fs-extra';
import CryptoJS from 'crypto-js';
import dotenv from 'dotenv';
export const downloadDir = path.resolve('./tmp');
const jsonPath = path.resolve('./framework/configs/textBoxData.json');
const rawData = fs.readFileSync(jsonPath);
export const data = JSON.parse(rawData);
dotenv.config();
export const mainConfig = {
    runner: 'local',
    exclude: [
    ],
    headless: true,
    maxInstances: 1,
    logLevel: 'warn',
    bail: 0,
    userName: process.env.EMAIL,
    password: process.env.PASSWORD,
    secret: process.env.SECRET,
    baseUrl: "https://www.saucedemo.com/",
    waitforTimeout: 0,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    onPrepare: function() {
        fs.ensureDir(downloadDir);
    },
    after: function (result, capabilities, specs) {
        fs.emptyDir(downloadDir);
    },
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
}
// export const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), mainConfig.secret).toString();