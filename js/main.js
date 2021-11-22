
// МЕНЮ

$(document).ready(function() {
  $(document).delegate('.open', 'click', function(event){
    $(this).addClass('oppenned');
    event.stopPropagation();
  })
  $(document).delegate('body', 'click', function(event) {
    $('.open').removeClass('oppenned');
  })
  $(document).delegate('.cls', 'click', function(event){
    $('.open').removeClass('oppenned');
    event.stopPropagation();
  });
});

$('.sl').slick({
  arrows: true,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});




$('.sl2').slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

$('.sl3').slick({
  arrows: true,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});


$(document).ready(function(){
  // плавное перемещение страницы к нужному блоку
  $("nav li a").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({scrollTop: destination }, 800);
  });
});

$(document).ready(function(){
  // плавное перемещение страницы к нужному блоку
  $("a").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({scrollTop: destination }, 800);
  });
});

$(document).ready(function(){
    $(".hider").click(function(){
        $("#hidden").slideToggle("slow");
        return false;
    });
});

jQuery(function($){
   $("#phone").mask("+9 (999) 99-99-999");
   $("#phone2").mask("+9 (999) 99-99-999");
});