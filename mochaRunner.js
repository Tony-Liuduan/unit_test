const Mocha = require('mocha');


const mocha = new Mocha({
    reporter: 'mochawesome',
    reportDir: './docs/mochawesome-report/'
});


mocha.addFile('./tests/service/router.spec.js');


mocha.run(function () {
    console.log('all done');
    process.exit();
})

