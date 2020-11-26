// 电影列表 pageNum=数字
export const nowPlayingListUri =
    "/gateway?cityId=110100&pageSize=10&type=1&k=5155219&pageNum=";
// 即将上映
export const comingSoonListUri =
    "/gateway?cityId=110100&pageSize=10&type=2&k=5155219&pageNum=";
//请求详情页
export const moiveDetailUrl = "gateway?k=3633812&filmId=";
//城市
export const cityListUrl = "gateway?k=3833247";
//影院列表数据
// export const cinemaListUrl = "gateway?cityId=310100&ticketFlag=1&k=5332346";
export const cinemaListUrl1 = "gateway?cityId="
export const cinemaListUrl2 = "&ticketFlag=1&k=5332346"
//登录
export const loginUrl = "http://127.0.0.1:3000/api/v1/login";
// 后续需要可以再添加...