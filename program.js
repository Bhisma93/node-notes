// // console.log(process.argv);

// var sum = 0

// for(var i = 2; i < process.argv.length; i++){
//     sum = sum + +process.argv[i];
// }

// console.log(sum);



// ----------



// var fs = require('fs')

// var filename = process.argv[2]
// var buf = fs.readFileSync(filename)
// var str = buf.toString();
// var count = str.split('\n').length;

// console.log(count - 1)

// // OR

// var fs = require('fs')
    
// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)



// ----------



// var fs = require('fs')

// fs.readFile(process.argv[2], function(err, data){
//     if(err) throw err;
//     console.log(data.toString().split('\n').length - 1)
// })



// ----------



// var fs = require('fs');
// var path = require('path');

// fs.readdir(process.argv[2], function(err, list){
//     list.forEach(function(item){
//         if (path.extname(item) === '.' + process.argv[3])
//         console.log(item);
//     });
// });



// ----------


var path = require('path');
var mymodule = require('./mymodule');
var dir = process.argv[2];
var filterExtension = process.argv[3];

var callback = function (err, list) {
    if (err) throw err;
    list.forEach(function (file) {
        console.log(file);
    })
}

mymodule(dir, filterExtension, callback);
