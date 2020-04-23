$('.swiper-samll .swiper-slide').eq(0).addClass('a')
var smallIndex
var swiper = new Swiper('.swiper-big', {
    // loop: true,//复制多份循环(这里就是让轮播看起来是循环的，去掉这个就恢复了默认的swiper轮播)
    autoplay: 2000,//自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
    effect: 'fade',  //淡入
    onSlideChangeEnd: function (swiper) {
        var oindex = swiper.activeIndex;
        $('.swiper-samll .swiper-slide').removeClass('a')
        $('.swiper-samll .swiper-slide').eq(oindex).addClass('a')
    },
});

var oswiper = new Swiper('.swiper-samll', {
    // loop: true,//复制多份循环(这里就是让轮播看起来是循环的，去掉这个就恢复了默认的swiper轮播)
    autoplay: 2000,//自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
    direction: 'vertical',
    nested: true,
    spaceBetween: 10,
    slidesPerView: 5, /* 容器能够同时显示的slides(幻灯片)数量 */
});

/*鼠标移入停止轮播，鼠标离开 继续轮播*/
// $('.swiper-container').mouseenter(function () {
//     swiper.stopAutoplay();
//     oswiper.stopAutoplay();
//     // console.log(222)
// })
// $('.swiper-container').mouseleave(function () {
//     swiper.startAutoplay();
//     oswiper.startAutoplay();
// })

var lswiper = new Swiper('.hint-left-ex-center', {
    autoplay: 3000,//自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
    effect: 'slide',
});

// 第一个子页面轮播相关攻略
var str= new Swiper('.main-right-str', {
    // loop: true,//复制多份循环(这里就是让轮播看起来是循环的，去掉这个就恢复了默认的swiper轮播)
    autoplay: 3000,//自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
    effect: 'slide', 
    pagination: '.swiper-pagination',
    slideToClickedSlide: true
});


