const fs = require('fs');
const core = require('@actions/core');

async function run() {
    try {
        const accessToken = core.getInput('accessToken');
        core.setSecret(accessToken);

        const organization = core.getInput('organization');
        const feed = core.getInput('feed');
        core.setSecret(feed);
        let username = core.getInput('username');
        const email = core.getInput('email');

        let filePath = core.getInput('npmrcPath');

        if (username === undefined || username === '') {
            username = organization;
        }
        if (filePath === undefined || filePath === '') {
            filePath = `${process.env.HOME}/.npmrc`;
        }

        if (core.isDebug()) {
            core.debug(`AccessToken: ${accessToken}`);
        }
        core.info(`Organization: ${organization}`);
        if (core.isDebug()) {
            core.debug(`Organization: ${feed}`);
        }
        core.info(`Username: ${username}`);
        core.info(`Email: ${email}`);

        core.info(`Write to: ${filePath}`);


        const authTokenConfiguration = `
; begin auth token
//pkgs.dev.azure.com/${organization}/_packaging/${feed}/npm/registry/:username=${username}
//pkgs.dev.azure.com/${organization}/_packaging/${feed}/npm/registry/:_password=${accessToken}
//pkgs.dev.azure.com/${organization}/_packaging/${feed}/npm/registry/:email=${email}
//pkgs.dev.azure.com/${organization}/_packaging/${feed}/npm/:username=${username}
//pkgs.dev.azure.com/${organization}/_packaging/${feed}/npm/:_password=${accessToken}
//pkgs.dev.azure.com/${organization}/_packaging/${feed}/npm/:email=${email}
; end auth token  
`;

        // TODO append to a file if exists
        fs.writeFile(filePath, authTokenConfiguration, error => {
            if (error) {
                core.setFailed(error.message);
            }

            core.info('.npmrc configured');
            if (core.isDebug()) {
                core.debug(`.nmprc content: ${authTokenConfiguration}`);
            }
        })

    } catch (error) {
        core.setFailed(error.message);
    }
}

run();

export default run;
