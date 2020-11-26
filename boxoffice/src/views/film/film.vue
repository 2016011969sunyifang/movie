
<template>
  <div>
    <div class="film-header">
      <div class="film-title">
        <p>电影</p>
        <div @click="goCity" class="film-city">
          <!-- <a :href="'/city'"
            ><p>{{ this.$store.state.city }}</p></a
          > -->
          <p>{{ this.$store.state.city }}</p>
        </div>
      </div>
    </div>

    <!-- <div>
      <img :src="imgUrl" alt="" />
    </div> -->
    <!-- <img :src="data1.imgUrl" alt="" /> -->
    <!-- <img :src="imgUrl" alt="" /> -->
    <comfilmlisttopnav :class="fixed ? 'fixed' : ''"></comfilmlisttopnav>
    <router-view></router-view>
  </div>
</template>



<script>
import axios from "axios";
import comfilmlisttopnav from "./../../components/comfilmlisttopnav";
// import  comloading  from "./../../components/comloading";
export default {
  //组件名字
  name: "film",
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
  components: {
    comfilmlisttopnav,
  },
  // vue数据集中管理
  data() {
    return {
      //   imgUrl: "",
      fixed: false,
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
  mounted() {
    //吸顶效果
    window.addEventListener(
      "scroll",
      (e) => {
        let top = document.documentElement.scrollTop;
        if (top > 200) {
          this.fixed = true;
        } else {
          this.fixed = false;
        }
      },
      true
    );
    // axios.interceptors.request.use(
    //   function (config) {
    //     config.headers = {
    //       "X-Client-Info":
    //         '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605514607459312392568833","bc":"310100"}',
    //       "X-Host": "mall.cfg.film-float.banner",
    //     };
    //     return config;
    //   },
    //   function (err) {
    //     if (err) {
    //       console.log("err:", err);
    //     }
    //   }
    // );
    // axios
    //   .get("https://m.maizuo.com/gateway?cityId=310100&k=6039776")
    //   .then((data) => {
    //     this.imgUrl = data.data.data.imgUrl;
    //   });
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
.fixed {
  position: fixed;
  top: 0;
  background-color: #ffffff;
}
.film-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-size: 22px;
  font-weight: 700;
}
.film-city {
  position: absolute;
  left: 10px;
  top: 20px;
  font-size: 16px;
  font-weight: normal;
}
</style>


