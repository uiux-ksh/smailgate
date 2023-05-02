const isSafari = navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;
const commonSwiperOption = {
  slidesPerView:"auto", // 한 화면에 보여줄 슬라이드 개수
  spaceBetween: 0, // 슬라이드 사이 여백
  // centeredSlides: true, // 슬라이드 가운데 정렬
  mousewheel: {
    enabled: true, // 마우스 휠 이벤트
    sensitivity: 5.5, // 마우스 휠 감도
  },
  freeMode: {
    enabled: true, // 슬라이드 자유 이동
    sticky: false, // 슬라이드 자유 이동 시 스크롤 위치 고정
    momentumBounce: false, // 슬라이드 끝에서 튕기는 현상 방지
  },
  speed: 1500, // 슬라이드 속도
};

/*full page scroll*/
let swiper = new Swiper(".evt-swiper", isSafari ? {
  ...commonSwiperOption,
  mousewheel: {
    enabled: true, // 마우스 휠 이벤트
    sensitivity: 1.5, // 마우스 휠 감도
  },
} : {
  ...commonSwiperOption,
  mousewheel: {
    enabled: true, // 마우스 휠 이벤트
    sensitivity: 5.5, // 마우스 휠 감도
  },
});

/*
* @name: onMouseWheel
* @description: 마우스 휠 이벤트
* */
function onMouseWheel(e) {
  const stove = document.getElementById('stoveGnb');
   // console.log(e);
  clearTimeout($.data(this, 'timer')); // 이전 setTimeout 을 clear

  $(".swiper-wrapper").addClass('mousewheelSmoothing');
  if(!stove){
    $.data(this, 'timer', setTimeout( function () {
      $(".swiper-wrapper").removeClass('mousewheelSmoothing')
    }, 250));
  }
};

if(!isSafari) {
  window.addEventListener('mousewheel', onMouseWheel, false)
  window.addEventListener('DOMMouseScroll', onMouseWheel, false)
}