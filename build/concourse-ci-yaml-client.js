"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const atom_languageclient_commons_1 = require("@pivotal-tools/atom-languageclient-commons");
class ConcourseCiYamlClient extends atom_languageclient_commons_1.JavaProcessLanguageClient {
    constructor() {
        //noinspection JSAnnotator
        super(path.join(__dirname, '..', 'server'), 'concourse-language-server.jar');
    }
    getGrammarScopes() {
        return ['source.concourse-pipeline-yaml', 'source.concourse-task-yaml'];
    }
    getLanguageName() {
        return 'Concourse-Pipeline-YAML';
    }
    getServerName() {
        return 'Concourse-Pipeline-YAML';
    }
    activate() {
        // replace the example argument 'linter-ruby' with the name of this Atom package
        require('atom-package-deps')
            .install('concourse-pipeline-yaml')
            .then(() => console.debug('All dependencies installed, good to go'));
        super.activate();
    }
    launchVmArgs(jvm) {
        return Promise.resolve([
            '-Dorg.slf4j.simpleLogger.logFile=concourse-ci-yaml.log'
        ]);
    }
    getJavaOptions() {
        const home = atom.config.get('concourse-pipeline-yaml.java.home');
        const vmargs = atom.config.get('concourse-pipeline-yaml.java.vmargs');
        return {
            home: typeof home === 'string' ? home : undefined,
            vmargs: Array.isArray(vmargs) ? vmargs : undefined
        };
    }
}
exports.ConcourseCiYamlClient = ConcourseCiYamlClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uY291cnNlLWNpLXlhbWwtY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL2NvbmNvdXJzZS1jaS15YW1sLWNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2QjtBQUM3Qiw0RkFBb0c7QUFHcEcsMkJBQW1DLFNBQVEsdURBQXlCO0lBRWhFO1FBQ0ksMEJBQTBCO1FBQzFCLEtBQUssQ0FDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQ3BDLCtCQUErQixDQUNsQyxDQUFDO0lBQ04sQ0FBQztJQUVELGdCQUFnQjtRQUNaLE9BQU8sQ0FBQyxnQ0FBZ0MsRUFBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxlQUFlO1FBQ1gsT0FBTyx5QkFBeUIsQ0FBQztJQUNyQyxDQUFDO0lBRUQsYUFBYTtRQUNULE9BQU8seUJBQXlCLENBQUM7SUFDckMsQ0FBQztJQUVELFFBQVE7UUFDSixnRkFBZ0Y7UUFDaEYsT0FBTyxDQUFDLG1CQUFtQixDQUFDO2FBQ3ZCLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQzthQUNsQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7UUFDekUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxZQUFZLENBQUMsR0FBUTtRQUNqQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDbkIsd0RBQXdEO1NBQzNELENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxjQUFjO1FBQ1YsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUNsRSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQ3RFLE9BQU87WUFDSCxJQUFJLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDakQsTUFBTSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUUsU0FBUztTQUN0RCxDQUFDO0lBQ04sQ0FBQztDQUVKO0FBOUNELHNEQThDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBKYXZhUHJvY2Vzc0xhbmd1YWdlQ2xpZW50LCBKYXZhT3B0aW9ucyB9IGZyb20gJ0BwaXZvdGFsLXRvb2xzL2F0b20tbGFuZ3VhZ2VjbGllbnQtY29tbW9ucyc7XG5pbXBvcnQge0pWTX0gZnJvbSAnQHBpdm90YWwtdG9vbHMvanZtLWxhdW5jaC11dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBDb25jb3Vyc2VDaVlhbWxDbGllbnQgZXh0ZW5kcyBKYXZhUHJvY2Vzc0xhbmd1YWdlQ2xpZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL25vaW5zcGVjdGlvbiBKU0Fubm90YXRvclxuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIHBhdGguam9pbihfX2Rpcm5hbWUsICcuLicsICdzZXJ2ZXInKSxcbiAgICAgICAgICAgICdjb25jb3Vyc2UtbGFuZ3VhZ2Utc2VydmVyLmphcidcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRHcmFtbWFyU2NvcGVzKCkge1xuICAgICAgICByZXR1cm4gWydzb3VyY2UuY29uY291cnNlLXBpcGVsaW5lLXlhbWwnLCdzb3VyY2UuY29uY291cnNlLXRhc2steWFtbCddO1xuICAgIH1cblxuICAgIGdldExhbmd1YWdlTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdDb25jb3Vyc2UtUGlwZWxpbmUtWUFNTCc7XG4gICAgfVxuXG4gICAgZ2V0U2VydmVyTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdDb25jb3Vyc2UtUGlwZWxpbmUtWUFNTCc7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIC8vIHJlcGxhY2UgdGhlIGV4YW1wbGUgYXJndW1lbnQgJ2xpbnRlci1ydWJ5JyB3aXRoIHRoZSBuYW1lIG9mIHRoaXMgQXRvbSBwYWNrYWdlXG4gICAgICAgIHJlcXVpcmUoJ2F0b20tcGFja2FnZS1kZXBzJylcbiAgICAgICAgICAgIC5pbnN0YWxsKCdjb25jb3Vyc2UtcGlwZWxpbmUteWFtbCcpXG4gICAgICAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmRlYnVnKCdBbGwgZGVwZW5kZW5jaWVzIGluc3RhbGxlZCwgZ29vZCB0byBnbycpKTtcbiAgICAgICAgc3VwZXIuYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICBsYXVuY2hWbUFyZ3MoanZtOiBKVk0pIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXG4gICAgICAgICAgICAnLURvcmcuc2xmNGouc2ltcGxlTG9nZ2VyLmxvZ0ZpbGU9Y29uY291cnNlLWNpLXlhbWwubG9nJ1xuICAgICAgICBdKTtcblxuICAgIH1cblxuICAgIGdldEphdmFPcHRpb25zKCk6IEphdmFPcHRpb25zIHtcbiAgICAgICAgY29uc3QgaG9tZSA9IGF0b20uY29uZmlnLmdldCgnY29uY291cnNlLXBpcGVsaW5lLXlhbWwuamF2YS5ob21lJyk7XG4gICAgICAgIGNvbnN0IHZtYXJncyA9IGF0b20uY29uZmlnLmdldCgnY29uY291cnNlLXBpcGVsaW5lLXlhbWwuamF2YS52bWFyZ3MnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhvbWU6IHR5cGVvZiBob21lID09PSAnc3RyaW5nJyA/IGhvbWUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB2bWFyZ3M6IEFycmF5LmlzQXJyYXkodm1hcmdzKSA/IHZtYXJncyA6ICB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9XG5cbn0iXX0=