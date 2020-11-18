// 引入封装头信息和请求域名的axios对象
import http from './http'
// 引入请求的url地址
import {
    // 正在热映列表请求uri地址
    nowPlayingListUri,
    comingSoonListUri,
    moiveDetailUrl
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