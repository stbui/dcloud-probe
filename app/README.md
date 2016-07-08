npm install
npm start



添加用户账号
http://127.0.0.1:3000/users/add
post
{username:'',password:''}

返回
{resultCode:0,resultMsg:'操作成功'}
{resultCode:1001,resultMsg:'参数错误'}


http://127.0.0.1:3000/users/delete
post
{username:''}


生成bat文件
http://127.0.0.1:3000/app/add
post
{cmd:'',path:''}



### log

启动软件时，向服务器发送 [ 在线状态，安装路径 ]


https://cnodejs.org/topic/4f16442ccae1f4aa27001071