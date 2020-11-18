
<template>
  <nav>
    <ul>
      <router-link tag="li" to="/film/nowplaying" active-class="active">
        <span>正在热映</span>
      </router-link>
      <router-link tag="li" to="/film/comingsoon" active-class="active">
        <span>即将上映</span>
      </router-link>
    </ul>
  </nav>
</template>



<script>
export default {
  //组件名字
  name: "comfilmlisttopnav",
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





<style lang="scss" scoped>
nav {
  width: 100%;
  height: 50px;
  line-height: 50px;
  line-height: 50px;
  ul {
    display: flex;
    text-align: center;
    li {
      flex: 1;
      display: flex;
      justify-content: center;
      &.active {
        span {
          width: 40%;
          border-bottom: 2px solid red;
          color: #fe5100;
        }
      }
    }
  }
}
// nav {
//   width: 100%;
//   height: 50px;
//   line-height: 50px;
//   border-bottom: 1px solid #ccc;
//   ul {
//     display: flex;
//     text-align: center;
//     li {
//       flex: 1;
//       display: flex;
//       justify-content: center;
//       &.active {
//         span {
//           width: 40%;
//           border-bottom: 2px solid red;
//           display: block;
//           color: #fe5100;
//         }
//       }
//     }
//   }
// }
</style>


