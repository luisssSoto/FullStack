import { downloadDir, mainConfig } from "../framework/configs/main.wdio.conf.js";


export const config = {
    ...mainConfig,
    ...{
        reporters: ['spec',
        ['allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: true,
            },
        ]
    ],
        specs: [
            '../test/specs/**/*.js'
        ],
        capabilities: [
            {
                browserName: "chrome",
                "goog:chromeOptions": {
                    prefs: {
                        'intl.accept_languages': 'en,en_US', 
                        "download.default_directory": downloadDir
                    }
                },
            },
        ],
    },
};
