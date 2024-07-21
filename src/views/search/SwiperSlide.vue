<template>
    <!-- role 속성은 웹 접근성에 필요할 경우 넣는 속성이므로 swiper의 필수값은 아닙니다 -->
    <swiper ref="filterSwiper" :options="swiperOption" role="tablist">
        <swiper-slide >111111</swiper-slide>
        <swiper-slide >222222</swiper-slide>
        <swiper-slide >333333</swiper-slide>
        <swiper-slide >444444</swiper-slide>
        <swiper-slide >555555</swiper-slide>
        <swiper-slide >666666</swiper-slide>
        <swiper-slide >777777</swiper-slide>
        <swiper-slide >888888</swiper-slide>
        <swiper-slide >999999</swiper-slide>
        <swiper-slide >101010101010</swiper-slide>
        <swiper-slide >111111111111</swiper-slide>1
        <swiper-slide >121212121212</swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    name: 'FilterSwiper',
    data () {
      return {
        swiperOption: {
          slidesPerView: 'auto',
          spaceBetween: 6, // swiper-slide 사이의 간격 지정
          slidesOffsetBefore: 0, // slidesOffsetBefore는 첫번째 슬라이드의 시작점에 대한 변경할 때 사용
          slidesOffsetAfter: 0, // slidesOffsetAfter는 마지막 슬라이드 시작점 + 마지막 슬라이드 너비에 해당하는 위치의 변경이 필요할 때 사용
          freeMode: true, // freeMode를 사용시 스크롤하는 느낌으로 구현 가능
          centerInsufficientSlides: true, // 컨텐츠의 수량에 따라 중앙정렬 여부를 결정함
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
}
</script>