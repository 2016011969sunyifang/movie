<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- 插槽（坑） -->
      <slot></slot>
    </div>
  </div>
</template> <script>
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
  mounted() {
    //不出现白屏不报错
    this.$nextTick(() => {
      //js能力
      new Swiper(".swiper-container", {
        slidesPerView: 4,
      });
    });
  },
};
</script>