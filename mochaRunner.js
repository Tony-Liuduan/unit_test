const Mocha = require('mocha');
const moment = require('moment');
const path = require('path');

const timestamp = moment().format('YYYY-MM-DD_HH:mm:ss');
const reportDirName = 'mochawesome-report-' + timestamp;
const reportDirPath = path.resolve(__dirname, 'docs', reportDirName);

const mocha = new Mocha({
	reporter: 'mochawesome',
	reporterOptions: {
		reportDir: reportDirPath,
		reportFilename: 'index',
	},
});

mocha.addFile('./tests/service/router.spec.js');

mocha.run(function () {
	console.log('all done');
	process.exit(url);
});
