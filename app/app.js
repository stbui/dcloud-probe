var gui = require('nw.gui');
gui.Window.get().show();

var os = require('os');
var networkInterfaces = os.networkInterfaces();
var hostname = os.hostname()

var path = require('path');
var rootPath = path.dirname(process.execPath);
var appPath = rootPath + path.sep + 'app';

function getSystemIp() {
    var interfaces = os.networkInterfaces();
    var addresses = [];
    for (var k in interfaces) {
        for (var k2 in interfaces[k]) {
            var address = interfaces[k][k2];
            if (address.family === 'IPv4' && !address.internal) {
                addresses.push(address.address);
            }
        }
    }

    return addresses;
}


require('./src/app.js');

