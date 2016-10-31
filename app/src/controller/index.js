var path = require('path');
var child_process = require('child_process');

var json = {
    resultCode: 0,
    resultMsg: '操作成功',
    data: null
};

var rootPath = path.dirname(process.execPath);
var appPath = rootPath + path.sep + 'app';


module.exports.controller = function (app) {

    /**
     * index
     */
    app.get('/', function (req, res) {

        json.data = {root: rootPath, app: appPath};
        res.send(json);
    });

    /**
     * index
     */
    app.get('/index', function (req, res) {

        json.data = {root: rootPath, app: appPath};
        res.send(json);
    });
};
