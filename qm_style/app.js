const Koa = require('koa'); //引入koa server

const router = require('koa-router')(); /// 引入koa-router，使用其提供的 get post


const bodyParser = require("koa-bodyparser"); // 获取json格式数据 body.age；

const nunjucks = require('nunjucks'); // 引入nunjucks模板

const controller = require("./controller"); // 读过读取controller 下的controller 统一管理路径条状

const templating = require("./templating"); //创建nunjucks Enverionst 并给ctx 绑定render

const app = new Koa();

const isProduction = process.env.NODE_ENV === 'production';

app.use(async(ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

if (!isProduction) {
    let staticFiles = require('koa-static');
    app.use(staticFiles(__dirname + "/assets"));
}

app.use(bodyParser()); //用于通过json形式从body中获取参数.例如：ctx.request.body.name

app.use(templating('view', {
    noCache: !isProduction,
    watch: !isProduction
}))

app.use(controller());

/** 
router.get('/hello/:name',async(ctx,next) => {
    var name=ctx.params.name;
    ctx.response.body=`<h1>Hello, ${name}!</h1>`;
});


router.get('/',async(ctx,next)=>{
    ctx.response.body=`<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

router.post('/signin',async(ctx,next)=>{
    var 
        name=ctx.request.body.name || '',
        password=ctx.request.body.password || '';
    console.log(`signin with name:${name},password:${password}`);
    if(name==='koa' && password==='123456'){
        ctx.response.body=`Hello,Welocom,${name}`;
    }else{
        ctx.response.body=`<h1>Login failed!</h1>
        <p><a href='/'>Try again</a></p>`
    }
});
**/
app.use(controller());



app.listen(8080);
console.log('app started at port 8080...');