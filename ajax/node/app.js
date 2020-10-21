1 //引入express框架
const express=require('express')

//引入路径处理模块
const path=require('path')
//psot请求必须用这个模块
const bodyParse=require('body-parser')

//创建web服务器
const app=express();

// 调用application/x-www-form-urlencoded
app.use(bodyParse.urlencoded())

//静态资源访问服务器功能
app.use(express.static(path.join(__dirname,'public')))

// 第二个参数请求处理函数，req请求对象，res响应对象
app.get('/first',(req,res)=>{
    res.send('hello ajax');
});

app.get('/responseData',(req,res) => {
    res.send({
        "name":'zs',
    })
})

app.get('/get',(req,res) => {
    //req.query(对象类型的值）为客户端传输的get请求参数
    res.send(req.query);
})

app.post('/post',(req,res) => {
    res.send(req.body);
})

app.post('/json',(req,res) => {
    res.send(req.body);
})
//监听端口
app.listen(3000);

//控制台提示输出
console.log('服务器启动成功')