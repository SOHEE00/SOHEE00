const searchEL = document.querySelector('.search');
const searchInputEL = searchEL.querySelector('input');

searchEL.addEventListener('click', function() {
    searchInputEL.focus();
});

searchInputEL.addEventListener('focus',function() {
    searchEL.classList.add('focused');
    searchInputEL.setAttribute('placeholder', '통합검색');
});

searchInputEL.addEventListener('blur',function() {
    searchEL.classList.remove('focused');
    searchInputEL.setAttribute('placeholder', '');
});

const badgeEL = document.querySelector('.heder .badges')

window.addEventListener('scroll', _.throttle(function() {
    if(window.scrollY > 500) {
        //배지 숨기기
        //gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEL, .6, {
            opacity:0,
            display:'none'
        });
    }else {
        //배지 보여주기
        gsap.to(badgeEL, .6, {
            opacity:1,
            display:'block'
    });
}
}, 300));
// _.throttle(함수, 시간을 추가)

const fadeEls = document.querySelectorAll('.visual .fade-in');
//forEach()는 배열을 순회하면서 인자로 전달한 함수를 호출하는 반복문입니다
/* arr.forEach(func(value, index, array))
value : 현재 순회 중인 요소
index : 현재 순회 중인 요소의 index
array : 배열 객체 */
fadeEls.forEach(function(fadeEl, index) {
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1,{
        delay:(index +1 )*.7, //0.7, 1.4, 2.1 구조
        opacity:1
    });
});

//gsap은 애니메이션 처리해주는 라이브러리 제공

//new는 생성자(class)
//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction : 'vertical',
    autoplay : true,
    //autoplay 자동재생여부
    loop : true
    //loop 반복재생여부
});

const swiper = new Swiper(".promotion .swiper-container", {
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    loop: true, //반복재생
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자
      clickable: true, //사용자의 페이지 번호 요소 제어
    },navigation : {
        preEl : '.promotion .swiper-prev',
        nextEl : '.promotion .swiper-next'
    },
});


new Swiper('.awards .swiper-container', {
    direction : 'horizontal',
    autoplay : true,
    loop : true,
    spaceBetween : 30,
    slidesPerView : 5,
    navigation : {
        prevEl : '.awards .swiper-prev',
        nextEl : '.awards .swiper-next'
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion //!을 붙이면 반대로 되게함
    if (isHidePromotion) {
        //숨김처리
        promotionEl.classList.add('hide');

    }else {
        //보임처리 
        promotionEl.classList.remove('hide'); 
    }
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear() //2023