
<template>
  <div>
    <van-index-bar :index-list="indexList" heighlight-color="red">
      <template v-for="(item, index) in dataList">
        <van-index-anchor :index="item.index" :key="index" />
        <van-cell
          v-for="(sub, key) in item.data"
          :title="sub.name"
          :key="key"
          @click="changecity(sub.name, sub.cityId)"
        />
      </template>
    </van-index-bar>
  </div>
</template>



<script>
import { cityListData } from "@/api/api";
import Vue from "vue";
import { IndexBar, IndexAnchor, Cell } from "vant";
import "vant/lib/index.css";
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
export default {
  //组件名字
  name: "city",
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
      dataList: [],
      indexList: [],
    };
  },
  //方法 函数写这里
  methods: {
    changecity(name, id) {
      this.$store.dispatch("addCity", name);
      this.$store.dispatch("addCityId", id);
      // this.$store.commit("addCity", name);
      // this.$store.commit("addCityId", id);
      // console.log(name, id);
      // this.$router.push("/cinema");
      this.$router.go(-1);
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
    let ret = await cityListData();
    // console.log(ret);
    this.dataList = ret[0];
    this.indexList = ret[1];
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
</style>


