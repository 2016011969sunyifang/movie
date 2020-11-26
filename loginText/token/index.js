const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors')
const user = require('./sql/user')
const path = require("path");
const fs = require("fs");
//跨域 谁都跨域访问我的服务器 即便vue和我不是一个域名和端口  
//练习中使用很完美 因为我不是公网ip 也就只能我一个人访问 
app.use(cors())
const md5 = require("md5");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// 咱们前端用的很好用的一个 插件 它可以帮助你做 token算法的哪一步以及加入我们想要的随机值
//如果没有这个  token算法要我们自己写 随机值 要插入算法 
const jwt = require("jsonwebtoken");
// 我要用bodypARSER  extended 扩展  false 就用这个  
app.use(bodyParser.urlencoded({ extended: false }));
//中间件的其中一种写法 作为其他重大方法的拦截
//这个就是 中间件的一种写法  被express感染了 可以作为 单独一个函数 的中间件 
const passwdcrpyt = function (req, res, next) {
    //123456
    let password = req.body.password
    //为了解决密文泄露   全世界人都能下载查看  也只能看到加密的密码的密文  
    //这样存进去就不单是一层md5的加密  双层再加 字符串截取  
    var a = md5(password + md5(password).substr(10, 13))

    req.body.passwdcrpyt = a
    next()
}
// login 登录逻辑
const jwt_secret = 'aaa'
app.post('/api/v1/login', passwdcrpyt, async (req, res) => {
    console.log('/api/v1/login')
    //这一步呼应 上面中间件处理的哪一步 req.body.passwdcrpyt = a 
    let { mobile, passwdcrpyt } = req.body
    console.log('mobile', mobile)
    console.log('passwdcrpty', passwdcrpyt)
    let result = await user.findOne({ mobile, password: passwdcrpyt })
    if (result) {
        res.send({
            code: '1000',
            info: 'success',
            mobile: mobile,
            icon: 'https://ftp.bmp.ovh/imgs/2020/11/812b70ad6405a8b3.jpg'
            ,
            data: {
                _token: jwt.sign({
                    // userId:result.userId,
                    mobile: result.mobile
                },
                    jwt_secret,
                    { expiresIn: 60 * 60 }
                )
            }
        })
    } else {
        res.send({
            code: '9999',
            info: '走开 你不是我的用户 '
        })
    }


})

//写一个效验token的逻辑  中间件 
const checkToken = function (req, res, next) {
    console.log('我进入校验token识别 这一步了')
    console.log('token')
    // 怎么样都可以传  这只是一种传递方式  能过来让服务器看见token就可以了
    console.log(req.headers.authorization)
    //因为req.headers.authorization 给你的不是原来的token 是加了bearer  dflksjdksfjlsfjsdfjsdf是这样的

    let temArr = (req.headers.authorization).split(' ')
    let _token = temArr[1]
    console.log('_token')
    console.log(_token)

    //这里要做 更合理的  各种情况的处理
    try {
        // jwt引擎 反推这个秘文  是否是我给你的  是的话 把你秘文变成你的 用户信息 还原
        let verify = jwt.verify(_token, jwt_secret)
        console.log('verify')
        console.log(verify)
        if (verify) {
            console.log('我进入verify里面了')
            req.body.user_info = verify
            console.log('req.body.user._info', req.body.user_info)
            next()
        }


    } catch (error) {
        res.status(403).send({
            code: '888',
            info: '你是不是没有我们的权限token乱来啊 请重新登陆 '
        })
    }
}

//这一步就是我们写 你已经登陆过app了  第二次 第三次 直接来token不用你费尽输入用户名密码 我通过token你也知道你是谁
//用户体验很爽   咱后端 也有办法知道识别你 
app.get('/api/v1/user_info', checkToken, (req, res) => {
    console.log('进来了/api/v1/user_info')
    console.log(req.body.user_info)
    res.send({
        code: '1000',
        info: 'success',
        info2: req.body.user_info,
    })
})




//注册逻辑
app.post('/zhuce', passwdcrpyt, (req, res) => {
    console.log('zhuce我进来了')
    var bbb = {

        mobile: req.body.mobile,
        // password:req.body.password,
        password: req.body.passwdcrpyt
    }

    user.insertMany(bbb, (err, data) => {
        if (err) {
            console.log('err', err)
            res.send({
                code: '400',
                info: 'fail',
                info2: '注册失败'
            })
        }
        console.log(data)
        res.send({
            code: '200',
            info: 'success',
            info2: '注册成功'
        })
    })

})

// 初始化用户数据
app.post('/init', passwdcrpyt, (req, res) => {
    console.log('init')
    console.log(req.body)

    var bbb = {
        userId: 336633,
        mobile: '18888888888',
        password: req.body.passwdcrpyt,
        headIcon: "htttp/////////img",
        gender: 0
    }
    user.insertMany(bbb, (err, data) => {
        if (err) {
            console.log('err', err)
        }
        console.log(data)
    })
    res.send('你的password 现在是  ' + req.body.passwdcrpyt)
})

app.get('/', (req, res) => {
    res.send({
        name: 'zs',
        token: 'ddgsdfasfjiojfaiojfioajfiosjdfiosafjldfgjdlgjklfajgkljdkgladjkgjaskgfjaklfjklsajlksa'
    })
})

app.listen(port, () => {
    console.log('后端端口启动在' + port + '了!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
})