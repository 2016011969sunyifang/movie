
<template>
  <div>
    <h1>film</h1>
    <button @click="aaa">请求卖座数据</button>
    <div v-for="(item, index) in data1" :key="index">
      <h1>{{ item.name }}</h1>
      <img :src="item.imgUrl" alt="" />
    </div>
    <!-- <img :src="data1.imgUrl" alt="" /> -->
  </div>
</template>



<script>
import axios from "axios";
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
  components: {},
  // vue数据集中管理
  data() {
    return {
      data1: "1",
    };
  },
  //方法 函数写这里
  methods: {
    aaa() {
      axios.interceptors.request.use(
        function (config) {
          config.headers = {
            "X-Client-Info":
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605514607459312392568833","bc":"310100"}',
            "X-Host": "mall.cfg.film-float.banner",
          };
          return config;
        },
        function (err) {
          if (err) {
            console.log("err:", err);
          }
        }
      );
      axios
        .get("https://m.maizuo.com/gateway?cityId=310100&k=6039776")
        .then((data) => {
          //   console.log(data);
          //   console.log(data.data);
          //   console.log(data.data.data);
          this.data1 = data.data;
          //   console.log(this.data1.data.imgUrl);
          //   console.log(data.data.data.imgUrl);
        });
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
  mounted() {},
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
</style>


