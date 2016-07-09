fs = require('fs');
path = require('path');
Track = require(__dirname + '/track.js');

MEDIA_ROOT = __dirname + '/../../../user/media';

let folders = [];

function addTrack(a,b,c) {
    console.log(a,b,c)
}

module.exports.walk = function(currentDirPath, callback) {
    fs.readdir(currentDirPath, function (err, files) {
        if (err) {
            throw new Error(err);
        }
        files.forEach(function (name) {
            var filePath = path.join(currentDirPath, name);
            var stat = fs.statSync(filePath);
            if (stat.isFile()) {
                callback(filePath, stat);
            } else if (stat.isDirectory()) {
                module.exports.walk(filePath, callback);
            }
        });
    });
}

module.exports.readTracks = function() {
    module.exports.walk(MEDIA_ROOT, addTrack);
}

