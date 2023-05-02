const wrapId = document.getElementById('evt_wrap');
const innerWidth = 1240;
const refreshAnimate = gsap.timeline();


/**
 * @description: gnb 종류에 따른 스크롤 높이 조절
 */
$(window).on('load', function () {
  //load 이후 실행할 함수
  const nexon = $('.gnbWrapper')[0]; // 넥슨 gnb
  const hangame = document.getElementById('gnbWrapDiv'); // 한게임 gnb
  const stove = document.getElementById('stoveGnb'); // 스토브 gnb
  const dummySlide = document.querySelectorAll('.dummy-slide '); // 메인 슬라이드 가운데로 위치 조정을 해줄 더미 슬라이드
  dummySlide.forEach(function (item) {
    return item.style.cssText = `flex-basis: ${(window.innerWidth - innerWidth) / 2 + 50}px;`
  })

  if (nexon !== null && nexon !== undefined) {
    return wrapId.style.cssText = ';height:calc(100% - 63px);min-height:calc(1080px - 63px)'
  } else if (hangame !== null && hangame !== undefined) {
    return wrapId.style.cssText = 'height: calc(100% - 50px);min-height:calc(1080px - 50px)'
  } else if (stove !== null && stove !== undefined) {
    return wrapId.style.cssText = 'height: calc(100% - 49px);min-height:calc(1080px - 49px)'
  }
});


window.onresize = function (event) {
  // 윈도우 사이즈 조정시 실행할 함수
  // 윈도우 리사이즈 시 슬라이드 가운데로 위치 조정
  const dummySlide = document.querySelectorAll('.dummy-slide ');
  dummySlide.forEach(function (item) {
    item.style.cssText = `flex-basis: ${(window.innerWidth - innerWidth) / 2 + 50}px;`
  })
  if (swiper.activeIndex >= 7) {
    return $('#wrap_bg').css('transform', `translateX(-${10000 - window.innerWidth}px)`);
  }
}

/**
 * @description: 슬라이드 이동시 배경이동
 * */
swiper.on('slideChange', function (e) {
  // Get the new active slide index
  const currentIndex = swiper.activeIndex; // 현재 슬라이드 인덱스


  // 슬라이드에 따른 위치가 조금씩 바뀔 이벤트 객체
  let section02 = document.querySelector('.section02 .character');
  let section04_new_character = document.querySelector('.section04 .new-character .character');
  let section04_system = document.querySelector('.section04 .system .character');
  let section04_baunabi_island = document.querySelector('.section04 .baunabi-island .character');
  let section05 = document.querySelector('.section05 .character');
  let section06 = document.querySelector('.section06 .character');
  let section07 = document.querySelector('.section07 .character');

  switch (currentIndex) { // 슬라이드 인덱스에 따른 이벤트
    // $('#wrap_bg').css('transform', `translateX(0px)`); // 슬라이드 이동시 배경이동
    // section02.style.transform = 'translateX(' + directionMap("prev", 340, 40) + ')'; // 슬라이드 이동시 캐릭터 이동
    case 0:
      $('#wrap_bg').css('transform', `translateX(0px)`);
      section02.style.transform = 'translateX(' + directionMap("prev", 340, 40) + ')';

      break;
    case 1:
      $('#wrap_bg').css('transform', `translateX(-${e.slidesGrid[currentIndex]}px)`);
      section02.style.transform = 'translateX(' + directionMap("prev", 340, 40) + ')';

      break;
    case 2:
      $('#wrap_bg').css('transform', `translateX(-${e.slidesGrid[currentIndex]}px)`);
      section02.style.transform = 'translateX(' + directionMap("prev", 340, 40) + ')';
      section04_new_character.style.transform = 'translateX(' + directionMap("prev", 360, 20) + ')';
      section04_baunabi_island.style.transform = 'translateX(' + directionMap("prev", 230, 30) + ')';
      section04_system.style.transform = 'translateX(' + directionMap("prev", 395, 10) + ')';
      break;
    case 3:
      $('#wrap_bg').css('transform', `translateX(-${e.slidesGrid[currentIndex]}px)`);
      section02.style.transform = 'translateX(' + directionMap("next", 340, 40) + ')';
      section04_new_character.style.transform = 'translateX(' + directionMap("prev", 360, 20) + ')';
      section04_baunabi_island.style.transform = 'translateX(' + directionMap("prev", 230, 30) + ')';
      section04_system.style.transform = 'translateX(' + directionMap("prev", 395, 10) + ')';
      break;
    case 4:
      $('#wrap_bg').css('transform', `translateX(-${e.slidesGrid[currentIndex]}px)`);
      section04_new_character.style.transform = 'translateX(' + directionMap("prev", 360, 20) + ')';
      section04_baunabi_island.style.transform = 'translateX(' + directionMap("prev", 230, 30) + ')';
      section04_system.style.transform = 'translateX(' + directionMap("prev", 395, 10) + ')';
      section05.style.transform = 'translateX(' + directionMap("prev", 340, 30) + ')';
      section06.style.transform = 'translateX(' + directionMap("prev", 340, 50) + ')';
      section07.style.transform = 'translateX(' + directionMap("prev", 340, 50) + ')';
      break;
    case 5:
      $('#wrap_bg').css('transform', `translateX(-${e.slidesGrid[currentIndex]}px)`);
      section04_new_character.style.transform = 'translateX(' + directionMap("next", 360, 20) + ')';
      section04_baunabi_island.style.transform = 'translateX(' + directionMap("next", 230, 30) + ')';
      section04_system.style.transform = 'translateX(' + directionMap("next", 395, 10) + ')';
      section05.style.transform = 'translateX(' + directionMap("prev", 340, 30) + ')';
      section06.style.transform = 'translateX(' + directionMap("prev", 340, 30) + ')';
      section07.style.transform = 'translateX(' + directionMap("prev", 340, 40) + ')';

      break;
    case 6:
      $('#wrap_bg').css('transform', `translateX(-${e.slidesGrid[currentIndex]}px)`);
      section04_new_character.style.transform = 'translateX(' + directionMap("next", 360, 20) + ')';
      section04_baunabi_island.style.transform = 'translateX(' + directionMap("next", 230, 30) + ')';
      section04_system.style.transform = 'translateX(' + directionMap("next", 395, 10) + ')';
      section05.style.transform = 'translateX(' + directionMap("next", 340, 40) + ')';
      section06.style.transform = 'translateX(' + directionMap("prev", 340, 40) + ')';
      section07.style.transform = 'translateX(' + directionMap("prev", 340, 40) + ')';


      break;
    case 7:
      $('#wrap_bg').css('transform', `translateX(-${10000 - window.innerWidth}px)`);
      section05.style.transform = 'translateX(' + directionMap("next", 340, 30) + ')';
      section06.style.transform = 'translateX(' + directionMap("next", 340, 50) + ')';
      section07.style.transform = 'translateX(' + directionMap("next", 340, 40) + ')';

      break;

    default:
      break;
  }
});


/*gsap timeline*/
/*
* @name refreshAnimate  : refreshAnimate
* @description : 로드 시 첫 화면 애니메이션
* */
refreshAnimate.fromTo('.section01', {opacity: 0, x: -10}, {delay: 0.2, opacity: 1, x: 0})
  .fromTo('.section02', {opacity: 0, x: -10}, {delay: 0.2, opacity: 1, x: 0}, "-=0.5")
  .fromTo('.section03', {opacity: 0, x: -30}, {delay: 0.4, opacity: 1, x: 0}, "-=0.5")
//               .fromTo('.footer',{opacity:0, y: 30},{opacity:1,y:0},">")


/*
* @name directionMap  : direction에 따른 translateX 값 변경
* @param direction : next, prev
* @param width : translateX width 위치
* @param deviation : +- width의 움직임 변경 값
* */
const directionMap = (direction, width, deviation) => {
  console.log(direction, width, deviation)
  switch (direction) {
    case 'next':
      return (width + deviation) + 'px';
    case 'prev':
      return (width - deviation) + 'px';
    default:
      return width + 'px'
  }
}
