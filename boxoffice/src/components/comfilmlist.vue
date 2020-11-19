
<template>
  <div class="scroll" :style="{ height: height + 'px' }">
    <!-- <comloading v-if="flag"></comloading> -->
    <comloading v-if="list1.length == 0"></comloading>
    <div v-if="list1.length !== 0">
      <div
        @click="godetail(item.filmId)"
        v-for="(item, index) in data"
        :key="index"
      >
        <a href="javascript:;">
          <div class="list">
            <div class="list-left">
              <img v-lazy="item.poster" alt="" />
            </div>
            <div class="list-middle">
              <h1>
                {{ item.name }}
                <span class="middle-style">{{ item.item.name }}</span>
              </h1>
              <div class="list-middle-bt">
                <span v-if="item.grade"
                  >观众评分<span class="middle-code">{{
                    item.grade
                  }}</span></span
                >
                <span>主演:{{ item.actors | actorss | ellipsis }}</span>
                <div>{{ item.nation }}|{{ item.runtime }}分钟</div>
              </div>
            </div>
            <div class="list-right">
              <!-- @click="clickWrapper" -->
              <span class="btn">购票</span>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="no-content">无更多电影</div>
  </div>
</template>



<script>
import comloading from "@/components/comloading.vue";
import { nowPlayingListData, ComingSoonListData } from "../api/api";
import BScroll from "better-scroll";
export default {
  //组件名字
  name: "comfilmlist",
  //接收父组件给的东西 type是接收什么东西  default 默认值
  props: ["list1", "type"],
  //组件注册
  components: {
    comloading,
  },
  // vue数据集中管理
  data() {
    return {
      height: 0,
      bs: null,
      flag: true,
      pageNum: 1,
      data: [],
    };
  },
  //方法 函数写这里
  methods: {
    godetail(filmId) {
      this.$router.push("/film/" + filmId);
    },
    async getData() {
      if (this.flag) {
        this.pageNum++;
        //获取数据
        if (this.type == 1) {
          //获取数据
          var ret = await nowPlayingListData(this.pageNum);
        } else {
          var ret = await ComingSoonListData(this.pageNum);
        }
        if (ret.data.data.films.length < 10) {
          this.flag = false;
        }
        //拼接显示数据
        this.data = this.data.concat(ret.data.data.films);
      }
    },
  },
  //计算属性
  computed: {
    // isflag() {
    //   return this.list1[0];
    // },
  },
  //侦听器
  watch: {
    list1: function () {
      this.data = this.list1;
    },
  },
  //过滤器
  filters: {
    toUpcase(value) {
      return value ? value.toUpperCase() : "";
    },
    ellipsis(value) {
      //姓名过多就干掉变成省略号
      if (!value) {
        return "";
      }
      if (value.length > 8) {
        return value.slice(0, 8) + "...";
      } else {
        return value;
      }
    },
    //遍历演员姓名
    actorss(value) {
      let actors = "";
      value.forEach((eee) => {
        actors += eee.name + " ";
      });
      return actors;
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
    // if (this.list1.length > 0) {
    //   this.flag = false;
    // }
    this.height = document.documentElement.clientHeight - 100;
  },
  //页面销毁之前
  beforeDestroy() {},
  //页面销毁之后
  destroyed() {},
  //页面视图数据更新之前
  beforeUpdate() {},
  //页面视图数据更新之后
  updated() {
    //new 得到better scroll的全部能力
    this.bs = new BScroll(".scroll", {
      pullUpLoad: true,
      // 激活下滑的事件监听
      pullDownRefresh: true,
      // 它会禁止一些浏览器的事件
      click: true,
    });
    this.bs.on("pullingUp", () => {
      // 获取数据
      this.getData();
      this.bs.finishPullUp();
    });
    this.bs.on("pullingDown", () => {
      // 获取数据
      this.getData();
      //这一步停止当前这一步 下拉刷新  刷新一次够了  要不服务器受不了
      this.bs.finishPullDown();
    });
  },
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
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.list {
  padding: 15px;
  color: $colorD;
  @include flex();
  .list-left {
    // flex: 1;
    @include wH(66px, 94px);
    img {
      width: 100%;
      //   height: 100%;
    }
  }
  .list-middle {
    // @include flex();
    text-align: center;
    h1 {
      color: $colorB;
    }
    .middle-style {
      display: inline-block;
      box-sizing: border-box;
      margin-left: 3px;
      background-color: #d2d6dc;
      border-radius: 25%;
      font-size: 12px;
      color: $colorG;
      line-height: 16px;
      padding: 1px;
      margin-bottom: 2px;
    }
    .middle-code {
      color: #ffb232;
    }
    width: 209px;
    @include flex(space-between, flex-start);
    flex-direction: column;
    height: 90px;
    .list-middle-bt {
      @include flex(space-between, flex-start);
      flex-direction: column;
    }
  }
  .list-right {
    .btn {
      @include wH(50px, 25px);
      background-color: white;
      color: $colorA;
      @include border(1px, $colorA);
    }
  }
}
.no-content {
  // height: 100px;
  // width: 100%;
  height: 59px;
  background-color: #ededed;
  color: #bdc0c5;
  font-size: 13px;
  text-align: center;
  margin: auto;
  line-height: 59px;
}
.scroll {
  overflow: hidden;
}
</style>


