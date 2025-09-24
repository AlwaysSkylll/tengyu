if ($(window).width() > 980) {

  new WOW().init();

}

var banSwiper = new Swiper('#banSwiper', {


  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".banner-pagination",
    clickable: true,
  },
  on: {
    init: function () {
      swiperAnimateCache(this); //隐藏动画元素 
      swiperAnimate(this); //初始化完成开始动画
    },
    slideChangeTransitionEnd: function () {
      swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
    }
  }

})

$('.menuBtn').click(function (e) {
  $(".navs__pop").toggleClass('show');
  $(this).toggleClass('close');

})

$('.searchpopBtn').click(function (e) {
  $(".popSearch").toggle( );
 

})



if ($(window).width() > 1024) {
  $(".navs__pop").on('mousemove', function (e) {
    var clientX = e.clientX,
      clientY = e.clientY;
    var scrollLeft = $(this).scrollLeft(),
      scrollTop = $(this).scrollTop();
    var left = clientX + scrollLeft,
      top = clientY + scrollTop;
    myTween = TweenLite.to($('.Circles-circle'), 1, {
      x: left,
      y: top
    });

  })
}




var proSwiper = new Swiper('#proSwiper', {

  autoplay: true,
  loop: true,
  navigation: {
    nextEl: '.idxPro  .next',
    prevEl: '.idxPro  .prev',
  },
  breakpoints: {
    //当宽度大于等于320
    320: {
      spaceBetween: 25,
      slidesPerView: 1.2,
    },
    750: {
      spaceBetween: 40,
      slidesPerView: 2,
    },
    1280: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    1440: {
      spaceBetween: 40,
      slidesPerView: 3,
    },

  },
})



var segmentSwiper = new Swiper('#segmentSwiper', {

  autoplay: true,
  loop: true,
  navigation: {
    nextEl: '.segment  .next',
    prevEl: '.segment  .prev',
  },
  breakpoints: {
    //当宽度大于等于320
    320: {
      spaceBetween: 25,
      slidesPerView: 1.2,
    },
    750: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    1280: {
      spaceBetween: 20,
      slidesPerView: 4,
    },
    1440: {
      spaceBetween: 30,
      slidesPerView: 4,
    },

  },
})



var honorSwiper = new Swiper('#honorSwiper', {

  autoplay: true,
  loop: true,
  navigation: {
    nextEl: '.hononr  .next',
    prevEl: '.hononr  .prev',
  },
  breakpoints: {
    //当宽度大于等于320
    320: {
      spaceBetween: 25,
      slidesPerView: 1.6,
    },
    750: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    1280: {
      spaceBetween: 20,
      slidesPerView: 4,
    },
    1440: {
      spaceBetween: 30,
      slidesPerView: 4,
    },

  },
})


var responsSwper = new Swiper('#responsSwper', {

  autoplay: true,
  loop: true,
  navigation: {
    nextEl: '.fanZhan  .next',
    prevEl: '.fanZhan  .prev',
  },
  breakpoints: {
    //当宽度大于等于320
    320: {
      spaceBetween: 25,
      slidesPerView: 1.6,
    },
    750: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    1280: {
      spaceBetween: 40,
      slidesPerView: 3,
    },


  },
})

var planSwiper = new Swiper('#planSwiper', {
  speed: 500,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  on: {
    slideChangeTransitionStart: function () {
      $(".planUl .active").removeClass('active');
      $(".planUl li").eq(this.activeIndex).addClass('active');
    }
  }
})
$(".planUl li").on('click', function (e) {
  e.preventDefault()
  $(".planUl .active").removeClass('active')
  $(this).addClass('active')
  planSwiper.slideTo($(this).index())
})


$('.scollBot').bind('click', function (e) {
  var target = e.target;
  $('html,body').animate({ scrollTop: $('main').offset().top - 90 }, 800);
});


$('.prolist li  .more a').hover(function () {
  $(this).addClass('on').siblings().removeClass('on');
  $(this).parent().find('.hoverxf').css('left', ($(this).index() - 1) * 48 + '%')

})

$('.proNav li').hover(function () {
  $(this).addClass('on').siblings().removeClass('on');
})
//  手机导航


var menuItem = document.querySelectorAll('.menuItem')
var topBtn = document.querySelectorAll('.topBtn')
for (let j = 0; j < topBtn.length; j++) {
  menuItem[j].onclick = function () {
    var flag = topBtn[j].lastElementChild.style.display === 'none'
    var topTitle = topBtn[j].parentNode.firstElementChild
    console.log(topBtn[j].parentNode.parentElement)
    if (flag) {
      /*关闭其他所有*/
      for (let j = 0; j < topBtn.length; j++) {
        topBtn[j].firstElementChild.style.display = 'block'
        topBtn[j].lastElementChild.style.display = 'none'
      }
      $('topBtn').remove('topBtnActive')
      $('.topTitle').removeClass('topTitleActive')
      /* 打开当前*/
      $('topBtn').add('topBtnActive')
      topBtn[j].firstElementChild.style.display = 'none'
      topBtn[j].lastElementChild.style.display = 'block'
      topTitle.classList.add('topTitleActive')
      $('.menuDetail').show()
      $('.menuDetail').hide()
      if (j === 0) {
        $('.menuDetail').css('top', '109%')
        topBtn[j].parentNode.lastElementChild.style.display = 'block'
      } else if (j === 1) {
        $('.menuDetail').css('top', '109%')
        topBtn[j].parentNode.lastElementChild.style.display = 'block'
      } else {
        $('.menuDetail').css('top', '109%')
        topBtn[j].parentNode.lastElementChild.style.display = 'block'
      }
    } else {
      /* 关闭*/
      topBtn[j].firstElementChild.style.display = 'block'
      topBtn[j].lastElementChild.style.display = 'none'
      topTitle.classList.remove('topTitleActive')
      $('.menuDetail').hide()
    }
  }
}




