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
            '-Dorg.slf4j.simpleLogger.logFile=concourse-ci-yaml.log',
            '-Dorg.slf4j.simpleLogger.defaultLogLevel=debug',
        ]);
    }
}
exports.ConcourseCiYamlClient = ConcourseCiYamlClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uY291cnNlLWNpLXlhbWwtY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL2NvbmNvdXJzZS1jaS15YW1sLWNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2QjtBQUM3Qiw0RkFBdUY7QUFHdkYsMkJBQW1DLFNBQVEsdURBQXlCO0lBRWhFO1FBQ0ksMEJBQTBCO1FBQzFCLEtBQUssQ0FDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQ3BDLCtCQUErQixDQUNsQyxDQUFDO0lBQ04sQ0FBQztJQUVELGdCQUFnQjtRQUNaLE1BQU0sQ0FBQyxDQUFDLGdDQUFnQyxFQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELGVBQWU7UUFDWCxNQUFNLENBQUMseUJBQXlCLENBQUM7SUFDckMsQ0FBQztJQUVELGFBQWE7UUFDVCxNQUFNLENBQUMseUJBQXlCLENBQUM7SUFDckMsQ0FBQztJQUVELFFBQVE7UUFDSixnRkFBZ0Y7UUFDaEYsT0FBTyxDQUFDLG1CQUFtQixDQUFDO2FBQ3ZCLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQzthQUNsQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7UUFDekUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxZQUFZLENBQUMsR0FBUTtRQUNqQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNuQix3REFBd0Q7WUFDeEQsZ0RBQWdEO1NBQ25ELENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFSjtBQXRDRCxzREFzQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgSmF2YVByb2Nlc3NMYW5ndWFnZUNsaWVudCB9IGZyb20gJ0BwaXZvdGFsLXRvb2xzL2F0b20tbGFuZ3VhZ2VjbGllbnQtY29tbW9ucyc7XG5pbXBvcnQge0pWTX0gZnJvbSAnQHBpdm90YWwtdG9vbHMvanZtLWxhdW5jaC11dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBDb25jb3Vyc2VDaVlhbWxDbGllbnQgZXh0ZW5kcyBKYXZhUHJvY2Vzc0xhbmd1YWdlQ2xpZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL25vaW5zcGVjdGlvbiBKU0Fubm90YXRvclxuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIHBhdGguam9pbihfX2Rpcm5hbWUsICcuLicsICdzZXJ2ZXInKSxcbiAgICAgICAgICAgICdjb25jb3Vyc2UtbGFuZ3VhZ2Utc2VydmVyLmphcidcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRHcmFtbWFyU2NvcGVzKCkge1xuICAgICAgICByZXR1cm4gWydzb3VyY2UuY29uY291cnNlLXBpcGVsaW5lLXlhbWwnLCdzb3VyY2UuY29uY291cnNlLXRhc2steWFtbCddO1xuICAgIH1cblxuICAgIGdldExhbmd1YWdlTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdDb25jb3Vyc2UtUGlwZWxpbmUtWUFNTCc7XG4gICAgfVxuXG4gICAgZ2V0U2VydmVyTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdDb25jb3Vyc2UtUGlwZWxpbmUtWUFNTCc7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIC8vIHJlcGxhY2UgdGhlIGV4YW1wbGUgYXJndW1lbnQgJ2xpbnRlci1ydWJ5JyB3aXRoIHRoZSBuYW1lIG9mIHRoaXMgQXRvbSBwYWNrYWdlXG4gICAgICAgIHJlcXVpcmUoJ2F0b20tcGFja2FnZS1kZXBzJylcbiAgICAgICAgICAgIC5pbnN0YWxsKCdjb25jb3Vyc2UtcGlwZWxpbmUteWFtbCcpXG4gICAgICAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmRlYnVnKCdBbGwgZGVwZW5kZW5jaWVzIGluc3RhbGxlZCwgZ29vZCB0byBnbycpKTtcbiAgICAgICAgc3VwZXIuYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICBsYXVuY2hWbUFyZ3MoanZtOiBKVk0pIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXG4gICAgICAgICAgICAnLURvcmcuc2xmNGouc2ltcGxlTG9nZ2VyLmxvZ0ZpbGU9Y29uY291cnNlLWNpLXlhbWwubG9nJyxcbiAgICAgICAgICAgICctRG9yZy5zbGY0ai5zaW1wbGVMb2dnZXIuZGVmYXVsdExvZ0xldmVsPWRlYnVnJyxcbiAgICAgICAgXSk7XG5cbiAgICB9XG5cbn0iXX0=