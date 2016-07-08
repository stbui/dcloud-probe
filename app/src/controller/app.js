var path = require('path');
var child_procss = require('child_process');
var fs = require('fs');

// common
var json = {
    resultCode: 0,
    resultMsg: '操作成功',
    data: null
};

var rootPath = path.dirname(process.execPath);
var appPath = rootPath + path.sep + 'app';


module.exports.controller = function (app) {

    /**
     * 在指定目录下生成文件并写入内容
     *
     */
    app.post('/app/add', function (req, res) {

        var cmdStr = req.body.cmd;
        var cmdPath = req.body.path;

        if (!cmdStr || !cmdPath) {
            json.resultMsg = '参数错误';
            return res.send(json);
        }

        fs.writeFileSync(cmdPath, cmdStr, 'utf-8');

        json.data = {cmd: cmdStr, path: cmdPath};
        res.send(json);
    });

    /**
     * 执行系统命令
     *
     */
    app.post('/app/cmd', function (req, res) {
        var cmd = req.body.cmd;

        if (!cmd) {
            json.resultCode = 1001;
            json.resultMsg = '参数错误';
            return res.send(json);
        }

        var exec = child_process.exec;
        exec(cmd, function (err, stdout, stderr) {
            if (err) {
                json.resultCode = 1001;
                json.resultMsg = '执行出错';
                json.data = err;

                res.send(json);
            } else {
                json.data = {success: stdout, error: stderr};

                res.send(json);
            }

        });
    });

};