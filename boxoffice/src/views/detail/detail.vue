
<template>
  <div class="detail">
    <div class="img">
      <img v-lazy="film.poster" />
    </div>
    <div class="film-detail">
      <div>
        <span>{{ film.name }}</span>
        <span class="middle-code">{{ lev }}</span>
      </div>
      <div>{{ film.category }}</div>
      <div>{{ film.premiereAt | timeparser }}上映</div>
      <div>{{ film.nation }} | {{ film.runtime }} 分钟</div>
      <div :class="{ showd: flag }">
        {{ film.synopsis }}
      </div>
      <div class="hide-btn">
        <img
          @click="showdetail"
          :class="{ irotate: flag }"
          src="./../../../public/img/index.png"
          alt=""
        />
      </div>
    </div>

    <div class="avatar">
      <div class="avatar-title">演职人员</div>
      <Swiper :key="film.actors.length">
        <div
          v-for="(item, index) in film.actors"
          :key="index"
          class="swiper-slide"
        >
          <img v-lazy="item.avatarAddress" alt="" />
        </div>
      </Swiper>
    </div>
  </div>
</template>



<script>
import moment from "moment";
import { moiveDetail } from "@/api/api";
import Swiper from "./../../components/comswiper";
export default {
  //组件名字
  name: "detail",
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
  components: { Swiper },
  // vue数据集中管理
  data() {
    return {
      value: 1,
      film: {},
      flag: false,
      lev: "",
      film: { actors: [] },
    };
  },
  //方法 函数写这里
  methods: {
    showdetail() {
      this.flag = !this.flag;
    },
  },
  //计算属性
  computed: {},
  //侦听器
  watch: {},
  //过滤器
  filters: {
    timeparser(value) {
      //注意这里要毫秒
      return moment(value * 1000).format("YYYY-MM-DD");
    },
  },
  //以下是生命周期
  //组件创建之前  new操作符桥梁函数return 之前
  beforeCreate() {},
  //组件创建之后
  created() {
    this.eventBus1.$emit("footernav", false);
  },
  //页面渲染之前
  beforeMount() {},
  //页面渲染之后
  async mounted() {
    let ret = await moiveDetail(this.$route.params.filmId);
    this.film = ret.data.data.film;
    this.lev = ret.data.data.film.item.name;
  },
  //页面销毁之前
  beforeDestroy() {},
  //页面销毁之后
  destroyed() {
    this.eventBus1.$emit("footernav", true);
  },
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
@import "../../assets/scss/mixin.scss";
@import "../../assets/scss/config.scss";
.detail {
  //   @include flex();
  //   flex-direction: column;
  // position: relative;
  //   overflow: hidden;
  .img {
    width: 100%;
    position: relative;
    height: 210px;
    overflow: hidden;
    img {
      position: absolute;
      top: -50%;
      width: 100%;
    }
  }
  .film-detail {
    padding: 20px;
    font-size: 13px;
    color: #797d82;
    div {
      margin-top: 5px;
      margin-bottom: 5px;
    }
    div:nth-of-type(1) {
      font-size: $fontH;
      height: 24px;
      line-height: 24px;
      color: black;
      @include flex();
    }
    div:nth-of-type(5) {
      transition: height 0.5s ease;
      height: 38px;
      overflow: hidden;
    }
    .hide-btn {
      margin-top: 10px;
      @include flex(center);
      transition: all 0.5s ease;
    }
  }
}
.showd {
  height: 100px !important;
}
.irotate {
  transform: rotate(180deg);
}
.middle-code {
  color: #ffb232;
}
.swiper-slide {
  img {
    width: 80px;
  }
}
.avatar {
  div {
    margin-bottom: 5px;
  }
  border-top: 10px lightgray solid;
  border-bottom: 10px lightgray solid;
  padding: 15px;
}
</style>


