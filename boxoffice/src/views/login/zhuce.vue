<template>
  <div>
    <div class="regesit">
      <div class="logo">
        <img
          src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png"
          alt=""
        />
      </div>
      <div class="loginPhone">
        <input placeholder="手机号" type="text" v-model="mobile" />
      </div>
      <div class="loginPhone">
        <input placeholder="密码" type="text" v-model="password" />
      </div>
      <span class="btn btn-huge" @click="dianjizhuce">点击注册</span>
    </div>
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
      axios
        .post("http://127.0.0.1:3000/zhuce", {
          mobile: this.mobile,
          password: this.password,
        })
        .then((data) => {
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
  created() {
    this.eventBus1.$emit("footernav", false);
  },
  // 出来的时候显示底部导航
  beforeDestroy() {
    this.eventBus1.$emit("footernav", true);
  },
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
.regesit {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  //   padding-left: 20px;
  //   padding-right: 20px;
  //   background-color: #fff;
  .logo {
    margin: 79px auto 40px;
    text-align: center;
    height: 60px;
    line-height: 60px;
    img {
      height: 60px;
    }
  }
  .loginPhone {
    padding-left: 45px;
    line-height: 55px;
    margin: 0 25px;
    position: relative;
    width: 100%;
    input {
      height: 15px;
      line-height: 15px;
      padding: 20px 0;
      width: 100%;
      font-size: 15px;
      color: #191a1b;
      border: 0;
      outline-width: 0;
    }
  }
}
.btn-huge {
  margin-top: 40px;
}
</style>
