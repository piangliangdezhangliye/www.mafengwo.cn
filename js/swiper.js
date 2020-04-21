$('.swiper-samll .swiper-slide').eq(0).addClass('a')
var smallIndex
var swiper = new Swiper('.swiper-big', {
    // loop: true,//复制多份循环(这里就是让轮播看起来是循环的，去掉这个就恢复了默认的swiper轮播)
    autoplay: 2000,//自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
    effect: 'fade',  //淡入
    // spaceBetween: 10,
    onSlideChangeEnd: function (swiper) {
        var oindex = swiper.activeIndex;
        $('.swiper-samll .swiper-slide').removeClass('a')
        $('.swiper-samll .swiper-slide').eq(oindex).addClass('a')
    },
});

/*鼠标移入停止轮播，鼠标离开 继续轮播*/
$('.swiper-slide').mouseenter(function () {
    swiper.stopAutoplay();
    oswiper.stopAutoplay();
})
$('.swiper-slide').mouseleave(function () {
    swiper.startAutoplay();
    oswiper.startAutoplay();
})

var oswiper = new Swiper('.swiper-samll', {
    // loop: true,//复制多份循环(这里就是让轮播看起来是循环的，去掉这个就恢复了默认的swiper轮播)
    autoplay: 2000,//自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
    direction: 'vertical',
    nested: true,
    spaceBetween: 10,
    slidesPerView: 5, /* 容器能够同时显示的slides(幻灯片)数量 */
});

$('.swiper-samll .swiper-slide').on('click',function(){
    // console.log()
    smallIndex=$(this).index()
})


var lswiper = new Swiper('.hint-left-ex-center', {
    // loop: true,//复制多份循环(这里就是让轮播看起来是循环的，去掉这个就恢复了默认的swiper轮播)
    autoplay: 2000,//自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
    direction: 'vertical',
    effect: 'slide',
    nested: true,
    spaceBetween: 10,
    slidesPerView: 5, /* 容器能够同时显示的slides(幻灯片)数量 */
});