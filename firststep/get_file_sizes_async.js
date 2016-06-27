#!/usr/local/bin/node

var fs = require('fs');

var count = 0,
    totalBytes = 0;

function calculateByteSize() {
    fs.readdir(".", function (err, filenames) {
        var i;
        count = filenames.length;

        for (i = 0; i < filenames.length; i++) {
	    
            fs.stat("./" + filenames[i], function (err, stats) {
                totalBytes += stats.size;
                count--;
                if (count === 0) {
                    console.log(totalBytes);
                }
            });
        }
    });
}

calculateByteSize();
