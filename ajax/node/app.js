1 //引入express框架
const express=require('express')

//引入路径处理模块
const path=require('path')

//创建web服务器
const app=express();

//静态资源访问服务器功能
app.use(express.static(path.join(__dirname,'public')))

// 第二个参数请求处理函数，req请求对象，res响应对象
app.get('/first',(req,res)=>{
    res.send('hello ajax');
});

//监听端口
app.listen(3000);

//控制台提示输出
console.log('服务器启动成功')