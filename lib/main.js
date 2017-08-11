const path = require('path');
const { JarLanguageClient } = require('pivotal-atom-languageclient-commons');
const PROPERTIES = require('../properties.json');

class ConcourseCiYamlClient extends JarLanguageClient {

    constructor() {
        //noinspection JSAnnotator
        super(
            PROPERTIES.jarUrl,
            path.join(__dirname, '..', 'server'),
            'language-server.jar'
        );
    }

    getGrammarScopes() {
        return ['source.concourse-ci-yaml']
    }

    getLanguageName() {
        return 'Concourse-CI-YAML'
    }

    getServerName() {
        return 'Concourse CI YAML'
    }

    launchVmArgs(version) {
        return [
            '-Xdebug',
            '-agentlib:jdwp=transport=dt_socket,address=9000,server=y,suspend=n',
            '-Dorg.slf4j.simpleLogger.logFile=concourse-ci-yaml.log',
            '-Dorg.slf4j.simpleLogger.defaultLogLevel=debug',
        ];

    }

}

module.exports = new ConcourseCiYamlClient();
