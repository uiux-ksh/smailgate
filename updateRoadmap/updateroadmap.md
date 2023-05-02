₩# [2023-05-01] 테일즈런너 로드맵

---

**[스와이퍼 적용 기본 구조]**

```html

<div class="evt-content evt-swiper">
  <div class="content-body swiper-wrapper">
    <div class="swiper-slide dummy-slide"></div> <!--가운데 정렬을 위한 슬라이드-->
    <div class="section01 swiper-slide"></div> <!--5월-->
    <div class="section02 swiper-slide"></div> <!--6월-->
    <div class="section03 swiper-slide"></div> <!--시즌3 ...-->
    <div class="section04 swiper-slide"></div> <!--7월-->
    <div class="section05 swiper-slide"></div> <!--8월-->
    <div class="section06 swiper-slide"></div> <!--9월 10월-->
    <div class="section07 swiper-slide"></div> <!--11월-->
  </div>
</div>
```

**[더미와 section03 을 제외한 기본 구조]**

예시 section 02

```html

<div class="section02 swiper-slide">
  <div class="inner ">
    <div class="number-line"> <!--상단 각 월 표기에 대한 라인-->
      <p></p> <!-- 5월 6월 등 이 들어간 숫자 이미지-->
      <div class="dot-wrap"> <!--숫자 뒤에 긴 선에 대한 wrap-->
        <div class="line"></div> <!--선-->
        <span></span> <!--선 뒤에 점-->
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="content-box "> <!--메인 컨텐츠-->

      <!--1. 호버 요소가 없는 컨텐츠 section02 다이렉트 업데이트만 적용중 -->
      <div class="box02-item box-item direct no-hover">
        <!--no-hover 클래스가 있으면, 호버 되지 않는다 update나 link class도 삭제-->
        <div class="bg"></div> <!--움직이지 않는 요소 bg-->
        <div class="common-z-index box-title"> <!--요소에 대한 제목 img-->
          <h3 class="hide">Direct X 11 업그레이드</h3> <!--seo를 위한 표기-->
        </div>
        <div class="character"></div> <!--움직이는 요소가 있을 시 선언-->
      </div>

      <!--2. 호버 요소가 없는 컨텐츠(자주쓰임) -->
      <div class="box02-item box-item shop">
        <div class="bg"></div>
        <!--update 의 경우는 홈페이지 업데이트 시 주석 제거-->
        <!--<span class="update" title="update"></span>-->
        <!--link-box는 이동하는 link에 대한 앵커태크-->
        <a href="javascript:void (0)" class="link-box"></a>
        <div class="common-z-index box-title">
          <h3 class="hide">교환상점 2.0</h3>
          <ul class="dot-wrap"> <!--hover시 나타날 점선-->
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="content-box-content common-z-index hover-show">
          <p> <!--hover시 나타날 내용-->
            매점과 교환상점 대통합!<br/>
            새로운 아이템 교환 시스템이<br/>
            찾아옵니다.
          </p>
        </div>
        <button class="content-button hover-show" type="button">more</button>
      </div>

    </div>
    <!-- 이벤트 내용 삽입 -->
  </div>
```

**[css character 부분]**


```css
/*character -> 모션이 들어가는 요소*/
.section07 .content-box .map-craft .character{
    background: red;
    width: 280px;
    height: 200px;
    position: absolute;
    bottom: 0;
    z-index: 11;
    transform:translateX(340px);
    /*translateX 로 요소의 위치를 잡는다.*/
    transition: 1.5s;
}

.section07 .content-box .map-craft:hover .character:before{
    /*하단 border 요소의 안쪽으로 있어야  하는 경우 입력*/
    background: #fff;
    content:"";
    width: 105%;
    height: 6px;
    position: absolute;
    bottom: 0;
    left: 0;
}
```