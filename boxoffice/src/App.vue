
<template>
  <div id="app">
    <router-view> </router-view>
    <comfooternav v-if="is_show"></comfooternav>
  </div>
</template>



<script>
import axios from "axios";
import comfooternav from "./components/comfooternav.vue";
export default {
  //组件名字
  name: "app",
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
    comfooternav,
  },
  // vue数据集中管理
  data() {
    return {
      value: "1",
      is_show: true,
    };
  },
  //方法 函数写这里
  methods: {
    aaa() {
      console.log("aaa");
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
  created() {
    this.$nextTick(() => {
      this.eventBus1.$on("footernav", (flags) => {
        this.is_show = flags;
      });
    });
  },
  //页面渲染之前
  beforeMount() {},
  //页面渲染之后
  mounted() {
    // if (this.$store.state.usermobile.data.data._token) {
    //   console.log(axios);
    //   axios({
    //     method: "get",
    //     url: "http://127.0.0.1:3000/api/v1/user_info",
    //     headers: {
    //       Authorization:
    //         "bearer " + this.$store.state.usermobile.data.data._token,
    //     },
    //   }).then((res) => {
    //     console.log(res);
    //     if (res.data.code === "888") {
    //       console.log("进入失败 ");
    //       localStorage.removeItem("vuex.data.data._token");
    //       return;
    //     }
    //     console.log(res.data.info2.mobile);
    //     this.$store.commit("usermobile", res);
    //   });
    // }
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

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
* {
  margin: 0px;
  padding: 0px;
}
html,
body {
  // 不能乱捏
  // touch-action: none;

  background-color: #fff;

  height: 100%;
  ul li {
    list-style: none;
  }
}
</style>





<style scoped lang="scss">
</style>


