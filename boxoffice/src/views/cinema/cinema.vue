
<template>
  <div>
    <div>
      <ul>
        <li class="box">
          <div class="film-header fixeds">
            <div class="film-title">电影</div>
            <div @click="goCity" class="film-city">
              <p>{{ this.$store.state.city }}</p>
            </div>
          </div>
        </li>
        <li class="cinema_list" v-for="(item, index) in datalist" :key="index">
          <router-link to="/cinema" class="cinema-item-wrap">
            <div class="cinema-info-lf cinema-info">
              <span class="cinema-name">{{ item.name }}</span>
              <br />
              <span class="cinema-address">{{ item.address }}</span>
            </div>
            <div class="cinema-info-rt cinema-info">
              <div>
                <span class="qqq">￥{{ item.lowPrice / 100 }}</span>
                <span class="qqq">起</span>
              </div>
              <strong>距离未知</strong>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="sercher">
        <img
          data-v-4070467a=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA2CAMAAABQrCHsAAABlVBMVEVHcEwaGh8/Pz8ZGxszMzMZGhwZGhsZGhsZGhsZGhscHBwnJycZGhskJCQaGh0fHx8ZGhsaGiMeHh4ZGhsZGhsbGxsZJiYaGhsZGhsZGhwZGhwZGxsZGxsaGhsfHx8ZGhsbGxsqKioaGhsbGxsZGxsbGxsZGhwaGh8ZGhskJCQZGxsZHh4ZGxsZGhsaGh0aGhsZGhsZMzMaGh0ZGhseHh4ZGhsZGhseHh4ZGhsZGhsZHh4aGh0aGhsZGhwbGxsaGh4ZIiIbGxsZGhwbGxsZGxsaGh1/f38aGhsZGxshISEZGxsZGxsZGhsZGhwfHx8aGh4aGhsdHR0ZGxv///8ZGhsqKioaGhwbGxtVVVUaGhwbGxsaGh8ZGhsZGxsaGhwZGxsaGhwaGhwgICAiIiIcHBwZGhsZGxsbGxsZGhsZGxsaGhwbGxsZGhsaGiAZGhwaGhsZGxsaGhwZGxsZGhwaGhsZHBwaGhwZHBwaGhwaGh0aGh0ZGhwbGxsaGh0aGhoZGhwaGiEZGxsZHBwZHR0aGhsaGhsZGhsIL5M3AAAAhnRSTlMAOQTsBeP76P73SA3qB2kY+B0i/fRBFKbfx62elq8QtzgG11V5L70w/BXOO6DeV6T2CnLwKsDWIenVMla5mUo6HhysQs9NAsSXF4uE06IITJwjggHMDFhxA5BAMd3Zj52Iah8PG/JmUuCDfS7LJ7aSqXVl0etQYlp8X2i+JXtz0CZ6Wzy4w4GfxwoAAAJjSURBVBgZrcEFUxQBAIbh77qL7m4ElFCxCQWDUFBQaaXDwu56f7cwzHLHsXe7N+Pz6D9pfPehovJvZcWHd42yx1n4uISkkseFTlmZejRHurlHU8pqaJpDruLN6Nvfb6ObxS4OTQ8pM/dVDoQXnszKMPtkIcyBq25lUNQHFDwI6aTQgwKgr0imejuArphOi3UBHb0yEfNAS7fMdbeAJ6ZTIqXQE1QmwR4ojSjdGHgLlVmhF8aU5hfwSdlEgfc6IVICo8puFEpqlWoGfA+V3UMfzCjFMxdEZSUKrmdKWoN5p6w452FNSXuwLGvLsKdjoTj+57L23E88JEM97MiOHaiX4QVsyY4teCFDGazLjnUok6EUamSHA0pl2IAV2bECGzLEISI7IhCXYR+KZEcR7MvwBrZlxza8keEPBGVHEKplKIfXsuM1lMvwCl7KjpfwSoZdWK2VtdpV2NWxOgjKWhDqlLQExbJWDEtKegr+Zllp9sNTpRiEK7JyBQaV6ocXrim7a+D9ohMqwJWnbPJcUKGTWj3QH1JmoX7wtCrNpbNQfU6ZnKuGs5d0ymWgLSFziTbgskx8BXztMtPuAy7myczHOOSfuaF0N87kgx/CDplx+IDAnftKdf9OAPB9C0CgU2YSlRy6d9dx+5akW7cdd+9xqDKhmjD4G2Tq+ghHvJ7vHi9HRq7rwIXzQLlbpm6WFZCqoOymjlQ1AZ+rZG58YnLYlw/k+4YnJ8Z1zL0I1OUpM+dA44BT6Rr8EHYoV/UBCHQqVzUXwf9TubpwHih3K0dVTUCTWzlyLwLvlbOGlkCzctca0z9q9NKFAyAIHQAAAABJRU5ErkJggg=="
          width="18px"
          height="18px"
          alt=""
        />
      </div>
    </div>
  </div>
</template>



<script>
import { cinemaListData } from "./../../api/api";
export default {
  //组件名字
  name: "cinema",
  //接收父组件给的东西 type是接收什么东西  default 默认值
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    color: {
      type: String,
      default: "#000",
    },
  },
  //组件注册
  components: {},
  // vue数据集中管理
  data() {
    return {
      value: "1",
      datalist: [],
    };
  },
  //方法 函数写这里
  methods: {
    goCity() {
      this.$router.push("/city");
    },
  },
  //计算属性
  computed: {},
  //侦听器
  watch: {},
  //过滤器
  filters: {
    toUpcase(value) {
      return value ? value.toUpperCase() : "";
    },
  },
  //以下是生命周期
  //组件创建之前  new操作符桥梁函数return 之前
  beforeCreate() {},
  //组件创建之后
  created() {},
  //页面渲染之前
  beforeMount() {},
  //页面渲染之后
  async mounted() {
    let res = await cinemaListData(this.$store.state.cityId);
    this.datalist = res.data.data.cinemas;
  },
  //页面销毁之前
  beforeDestroy() {},
  //页面销毁之后
  destroyed() {},
  //页面视图数据更新之前
  beforeUpdate() {},
  //页面视图数据更新之后
  updated() {},
  //组件路由守卫enter
  beforeRouteEnter(to, from, next) {
    next((vm) => {});
    // 注意，在路由进入之前，组件实例还未渲染，所以无法获取this实例，只能通过vm来访问组件实例
  },
  //组件路由守卫update更新
  beforeRouteUpdate(to, from, next) {
    // 同一页面，刷新不同数据时调用，
    next();
  },
  //组件路由守卫离开
  beforeRouteLeave(to, from, next) {
    // 离开当前路由页面时调用
    next();
  },
};
</script>





<style scoped lang="scss">
.film-header {
  width: 100%;
  height: 50px;
  position: fixed;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // height: 50px;
  // transform: ;
  font-size: 22px;
  font-weight: 700;
  z-index: 999;
  background-color: white;
  .film-title {
    text-align: center;
    line-height: 50px;
  }
}
.film-city {
  position: absolute;
  left: 10px;
  top: 20px;
  font-size: 16px;
  font-weight: normal;
}
* {
  text-decoration: none;
}
.cinema_list {
  // background: orange;
  position: relative;
  background-color: #fff;
  padding: 15px;
  .cinema-item-wrap {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
}
.cinema-info-lf {
  width: calc(100% - 65px);
  text-align: left;
  padding-right: 15px;
  float: left;
}
div {
  box-sizing: border-box;
}
.cinema-info-lf .cinema-name {
  color: #191a1b;
  font-size: 15px;
  float: left;
  min-width: 300px;
}
.cinema-info-lf span {
  display: block;
  max-width: 80%;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
}
.cinema-info-lf .cinema-address {
  color: #797d82;
  font-size: 12px;
  margin-top: 5px;
  display: inline-block;
}
.cinema-info-rt {
  width: 70px;
  text-align: center;
  float: right;
  margin-right: -5px;
  // background: red;
}
.qqq {
  color: #ff5f16;
  font-size: 15px;
  // border: none;
}
.sercher {
  width: 20px;
  height: 20px;
  // background: orange;
  z-index: 999;
  top: 15px;
  position: fixed;
  right: 20px;
}
.box {
  // margin-top: 30px;
  height: 50px;
}
strong {
  color: #797d82;
  font-size: 11px;
  font-weight: 400;
}
</style>


