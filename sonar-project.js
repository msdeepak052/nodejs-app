const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://13.201.35.250:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application',
	    'sonar.projectKey':'NodeJsDeepak',
	    'sonar.login': 'squ_229359c90753165ef0e22197dfdc845f6ffd739b',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
       },
}, () => {});
