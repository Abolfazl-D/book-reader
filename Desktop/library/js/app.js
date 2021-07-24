$(document).ready(function () {


  //==================================================================================== menu
  $(".menu_list").click(function () {
    $(this).toggleClass("active")
  });


  $(".navbar-toggler").click(function () {
    $(".mobile_menu").toggleClass("active");
    $(".mobile_menu_bg").toggleClass("active");
    $(".site_bg").toggleClass("active");
    $(".togbars").toggleClass("fa-bars");
    $(".togbars").toggleClass("fa-times");
    return false;
  });

  $(".mobile_menu_close").click(function () {
    $(".site_bg").removeClass("active");
    $(".mobile_menu_bg").removeClass("active");
    $(".mobile_menu").removeClass("active");

    return false;
  });

  $(".site_bg").click(function () {
    $(".site_bg").removeClass("active");
    $(".mobile_menu_bg").removeClass("active");
    $(".mobile_menu").removeClass("active");
    $(".togbars").toggleClass("fa-bars");
    $(".togbars").toggleClass("fa-times");
    return false;
  });



  $(".mobile_menu li").each(function () {
    if ($(this).has(" > ul")) {
      $(this).find(" > ul").prev().attr({ href: "javascript: void(0)" });
    }
  });

  $(".mobile_menu li > a").click(function () {

    var my_obj = $(this);


    $(this).parent().parent().find("ul").not($(this).next()).slideUp(200);
    $(this).next().slideToggle(200, function () {
      $('html, body').animate({
        scrollTop: $(my_obj).position().top
      }, 250);
    });

    $(this).parent().parent().find("a").not($(this)).removeClass("has_children");


  });


  $('.mainSlider__wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    rtl: true,
    dots: true,
    customPaging: function (slider, i) {
      // this example would render "tabs" with titles
      console.log(slider, i);
      return '<button class="dot"></button>';
    },
    // fade: true,
    arrows: true,
    prevArrow: ".mainSlider__prevBtn",
    nextArrow: ".mainSlider__nextBtn",
  });

  $('.beforeSeenProducts__productSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    rtl: true,
    dots: false,

    // fade: true,
    arrows: true,
    prevArrow: ".productSlider__prevBtn",
    nextArrow: ".productSlider__nextBtn",

    responsive: [

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.lastSeenProducts__productSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    rtl: true,
    dots: false,

    // fade: true,
    arrows: true,
    prevArrow: ".lastSeenProducts__prevBtn",
    nextArrow: ".lastSeenProducts__nextBtn",

    responsive: [

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    asNavFor: '.slider-nav',
    infinite: true,
    autoplay: false,
  });
  
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    // centerMode: true,
    focusOnSelect: true,
    arrows: false,

  });

});

$('.productCategories__categorySlider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 300,
  rtl: true,
  dots: false,

  // fade: true,
  arrows: false,
  prevArrow: ".lastSeenProducts__prevBtn",
  nextArrow: ".lastSeenProducts__nextBtn",

  responsive: [

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


