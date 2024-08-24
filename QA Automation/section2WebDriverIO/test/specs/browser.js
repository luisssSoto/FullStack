import {$, browser} from "@wdio/globals";

const capabilities = {
    "capabilities": [
      {
        "maxInstances": 10,
        "browserName": "chrome",
        "goog:chromeOptions": {
          "prefs": {
            "download.default_directory": "downloadDir"
          }
        }
      }
    ]
  };

describe("browser object Testing", () => {
    it("should return the object of current session", async() =>{
        // browser.navigateTo("https://google.com");
        const firstSesion = await browser.newSession(capabilities);
        console.log(`First session: ${firstSesion}`);
        console.log("parseando:",  JSON.stringify(firstSesion))
        const closingSection = await browser.deleteSession(firstSesion);
        console.log(`Closing: ${closingSection}`);
    });
});