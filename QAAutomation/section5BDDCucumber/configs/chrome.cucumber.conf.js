import { downloadDir, mainConfig } from "../framework/configs/main.wdio.conf.js";


export const config = {
    ...mainConfig,
    ...{
        framework: 'cucumber',
        cucumberOpts: {
            require: ['./test/step-definitions/**/*.js'],
            // tags: '@gabriel'
            // tags: '@hidden'
            // tags: '@loadDelays'
            // tags: '@ajax'
            tags: '@forms'
        },
        specs: [
            '../test/features/**/*.feature'
        ],
        capabilities: [
            {
                browserName: "chrome",
                "goog:chromeOptions": {
                    args: [
                        '--headless'
                    ],
                    prefs: {
                        'intl.accept_languages': 'en,en_US', 
                        "download.default_directory": downloadDir
                    }
                },
            },
        ],
    },
};
