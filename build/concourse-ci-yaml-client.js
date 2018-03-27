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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uY291cnNlLWNpLXlhbWwtY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL2NvbmNvdXJzZS1jaS15YW1sLWNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2QjtBQUM3Qiw0RkFBdUY7QUFHdkYsMkJBQW1DLFNBQVEsdURBQXlCO0lBRWhFO1FBQ0ksMEJBQTBCO1FBQzFCLEtBQUssQ0FDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQ3BDLCtCQUErQixDQUNsQyxDQUFDO0lBQ04sQ0FBQztJQUVELGdCQUFnQjtRQUNaLE9BQU8sQ0FBQyxnQ0FBZ0MsRUFBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxlQUFlO1FBQ1gsT0FBTyx5QkFBeUIsQ0FBQztJQUNyQyxDQUFDO0lBRUQsYUFBYTtRQUNULE9BQU8seUJBQXlCLENBQUM7SUFDckMsQ0FBQztJQUVELFFBQVE7UUFDSixnRkFBZ0Y7UUFDaEYsT0FBTyxDQUFDLG1CQUFtQixDQUFDO2FBQ3ZCLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQzthQUNsQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7UUFDekUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxZQUFZLENBQUMsR0FBUTtRQUNqQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDbkIsd0RBQXdEO1lBQ3hELGdEQUFnRDtTQUNuRCxDQUFDLENBQUM7SUFFUCxDQUFDO0NBRUo7QUF0Q0Qsc0RBc0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IEphdmFQcm9jZXNzTGFuZ3VhZ2VDbGllbnQgfSBmcm9tICdAcGl2b3RhbC10b29scy9hdG9tLWxhbmd1YWdlY2xpZW50LWNvbW1vbnMnO1xuaW1wb3J0IHtKVk19IGZyb20gJ0BwaXZvdGFsLXRvb2xzL2p2bS1sYXVuY2gtdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgQ29uY291cnNlQ2lZYW1sQ2xpZW50IGV4dGVuZHMgSmF2YVByb2Nlc3NMYW5ndWFnZUNsaWVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy9ub2luc3BlY3Rpb24gSlNBbm5vdGF0b3JcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4nLCAnc2VydmVyJyksXG4gICAgICAgICAgICAnY29uY291cnNlLWxhbmd1YWdlLXNlcnZlci5qYXInXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0R3JhbW1hclNjb3BlcygpIHtcbiAgICAgICAgcmV0dXJuIFsnc291cmNlLmNvbmNvdXJzZS1waXBlbGluZS15YW1sJywnc291cmNlLmNvbmNvdXJzZS10YXNrLXlhbWwnXTtcbiAgICB9XG5cbiAgICBnZXRMYW5ndWFnZU5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnQ29uY291cnNlLVBpcGVsaW5lLVlBTUwnO1xuICAgIH1cblxuICAgIGdldFNlcnZlck5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnQ29uY291cnNlLVBpcGVsaW5lLVlBTUwnO1xuICAgIH1cblxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICAvLyByZXBsYWNlIHRoZSBleGFtcGxlIGFyZ3VtZW50ICdsaW50ZXItcnVieScgd2l0aCB0aGUgbmFtZSBvZiB0aGlzIEF0b20gcGFja2FnZVxuICAgICAgICByZXF1aXJlKCdhdG9tLXBhY2thZ2UtZGVwcycpXG4gICAgICAgICAgICAuaW5zdGFsbCgnY29uY291cnNlLXBpcGVsaW5lLXlhbWwnKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5kZWJ1ZygnQWxsIGRlcGVuZGVuY2llcyBpbnN0YWxsZWQsIGdvb2QgdG8gZ28nKSk7XG4gICAgICAgIHN1cGVyLmFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgbGF1bmNoVm1BcmdzKGp2bTogSlZNKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW1xuICAgICAgICAgICAgJy1Eb3JnLnNsZjRqLnNpbXBsZUxvZ2dlci5sb2dGaWxlPWNvbmNvdXJzZS1jaS15YW1sLmxvZycsXG4gICAgICAgICAgICAnLURvcmcuc2xmNGouc2ltcGxlTG9nZ2VyLmRlZmF1bHRMb2dMZXZlbD1kZWJ1ZycsXG4gICAgICAgIF0pO1xuXG4gICAgfVxuXG59Il19