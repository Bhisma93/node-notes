const fs = require('fs');

// (what) => is the same as using function(what)
const print = (what) => {
    console.log('Hey: ' + what);
}

fs.watch('README.md', function () {
    print('Ouch');
});