import vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = "https://m.maizuo.com";
//请求拦截器
axios.interceptors.request.use(function (config) {
    let host = '';
    let info = config.headers.info
    if ("info" == info) {
        // 详情页面的头
        host = "mall.film-ticket.film.info";
    } else if ("cinema" == info) {
        // 影院列表
        host = "mall.film-ticket.cinema.list";
    } else if ("city" == info) {
        host = "mall.film-ticket.city.list";
    } else {
        // 列表信息的头
        host = "mall.film-ticket.film.list";
    }
    config.headers = {
        "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1598087896889693885431809","bc":"110100"}',
        "X-Host": host,
    };
    return config;

}, function (err) {
    if (err) {
        console.log('进入拦截器err');
        console.log(err);
    }
});

export default axios;