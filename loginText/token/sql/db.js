const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://qwer1234:qwer1234@cluster0.1pttw.mongodb.net/maizuo2?retryWrites=true&w=majority')

mongoose.connection.on('connected',()=>{
    console.log('我是mongodb云数据库 我连接了 连接成功!!!!!!!!!!!!!!!!!!!!!!!')
})

mongoose.connection.on('disconected',()=>{
    console.log('disconected  数据库连接 断开')
})

mongoose.connection.on('error',()=>{
    console.log('mongoose error')
})



module.exports.mongoose = mongoose

 
