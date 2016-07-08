var child_process = require('child_process');

var json = {
    resultCode: 0,
    resultMsg: '操作成功',
    data: null
};


module.exports.controller = function (app) {

    app.post('/user/add', function (req, res) {
        var query = req.body;
        var username = query['username'];
        var password = query['password'];

        if (!username || !password) {
            json.resultCode = 1001;
            json.data = '参数错误';

            return res.send(json);
        }


        var cmdStr = 'net user ' + username + ' ' + password + ' /add';
        // 添加用户
        execCmd(cmdStr, function () {
            //授权远程登录
            execCmd('net localgroup "Remote Desktop Users" ' + username + ' /add', function () {
                json.data = {username: username, password: password};
                return res.send(json);
            });
        });


    });


    app.post('/user/delete', function (req, res) {
        var query = req.body;
        var username = query['username'];

        if (!username) {
            json.resultCode = 1001;
            json.data = '参数错误';

            return res.send(json);
        }

        var cmdStr = 'net user ' + username + ' /delete';
        execCmd(cmdStr, function () {
            json.data = {username: username, password: password};
            return res.send(json);
        });

    });


    function execCmd(cmd, callback) {
        var exec = child_process.exec;

        exec(cmd, function (err, stdout, stderr) {
            callback && callback();
        });
    }
};