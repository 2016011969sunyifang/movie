// 引入封装头信息和请求域名的axios对象
import http from './http'
// 引入请求的url地址
import {
    // 正在热映列表请求uri地址
    nowPlayingListUri,
    comingSoonListUri,
    moiveDetailUrl,
    cityListUrl,
    // cinemaListUrl,
    cinemaListUrl1,
    cinemaListUrl2,
} from '@/config/url'

/**
 * 获取正在热映列表分页数据
 * @param {int} page 页码数 默认1 
 * @returns promise对象
 */
export const nowPlayingListData = (page = 1) => {
    http.defaults.headers.info = ''
    return http.get(nowPlayingListUri + page)
}

export const ComingSoonListData = (page = 1) => {
    http.defaults.headers.info = ''
    return http.get(comingSoonListUri + page)
}

// 暴露出 请求detail 详情页的数据方法
export const moiveDetail = (filmId) => {
    http.defaults.headers.info = 'info'
    return http.get(moiveDetailUrl + filmId)
}

export const cityListData = async () => {
    http.defaults.headers.info = "city";
    let ret = await http.get(cityListUrl);
    // console.log(ret);
    let cities = ret.data.data.cities;
    let cityIndex = [];//全部26英文字母
    let dataList = [];//城市信息
    let indexList = [];//有城市的数据
    for (let i = 65; i <= 90; i++) {
        cityIndex.push(String.fromCharCode(i));
    }
    // console.log(cityIndex);
    cityIndex.forEach((index) => {
        let tmpArr = cities.filter((item) =>
            index.toLowerCase() == item.pinyin.substr(0, 1));
        // console.log(tmpArr.length);
        if (tmpArr.length > 0) {
            indexList.push(index);
            dataList.push({ index, data: tmpArr, });
        }
    });
    // 返回promise可以用await接收await苦苦等待一个成功的对象 
    return Promise.resolve([dataList, indexList]);
    // return [dataList, indexList];
};

export const cinemaListData = (city) => {
    http.defaults.headers.info = 'cinema'
    // return http.get(cinemaListUrl);
    return http.get(cinemaListUrl1 + city + cinemaListUrl2);
};
