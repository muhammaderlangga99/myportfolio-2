$('#btnNav').click(function () {
  $('.nav').toggleClass('appear');
  $('#btnNav').toggleClass('up');
});


// parallax
$(window).scroll(() => {
  let wScroll = $(this).scrollTop();


})




// type js
let typed = new Typed('.typed', {
  strings: [
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate consectetur molestiae quas vel voluptates.'
  ],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true
});

let typed2 = new Typed('.typedJmb', {
  strings: [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam omnis fugit architecto, nulla ullam sint corrupti id aliquam odit inventore quos iusto quisquam facere in explicabo eveniet!'
  ],
  typeSpeed: 20
});

// swiper js
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1000,
    slideShadows: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});