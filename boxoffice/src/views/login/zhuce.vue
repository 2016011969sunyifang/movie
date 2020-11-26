<template>
  <div>
    <h1>注册</h1>
    mobile手机 <input type="text" v-model="mobile" /> <br />
    密码 <input type="text" v-model="password" /> <br />

    <button @click="dianjizhuce">点击注册</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  //组件名字
  name: "zhuce",
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
      mobile: "",
      password: "",
    };
  },
  //方法 函数写这里
  methods: {
    dianjizhuce() {
      // 作业1 这儿要用if else 验证手机号密码 不能为空 格式最好也验证一下 然后再往后走 要不给提示 不行 然后return
      //作业2 样式写漂亮   原生写 可自定义漂亮 不用每一个人都一样！
      console.log("进入点击注册了");
      axios
        .post("http://127.0.0.1:3000/zhuce", {
          mobile: this.mobile,
          password: this.password,
        })
        .then((data) => {
          console.log(data);
          if (data.data.code == "200") {
            this.$message({
              message: data.data.info2,
              type: "success",
            });
            this.$router.push("/login");
          } else {
            this.$message({
              message: "警告哦，注册可能有点问题o ",
              type: "warning",
            });
          }
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
  //组件创建之前
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

<style lang="scss" scoped></style>
