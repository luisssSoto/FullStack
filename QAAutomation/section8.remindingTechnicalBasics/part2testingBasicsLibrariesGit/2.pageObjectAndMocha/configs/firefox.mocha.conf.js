import { downloadDir, mainConfig } from "../framework/configs/main.wdio.conf.js";

export const config = {
    ...mainConfig,
    ...{
        specs: [
            '../test/specs/**'
        ],
        capabilities: [
            {
                browserName: "firefox",
                "wdio:geckodriverOptions": {
                },
            },
        ],
    },
};