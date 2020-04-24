
var gallerySwiper = new Swiper('#gallery', {
    spaceBetween: 10,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
    effect: 'fade',
    thumbs: {
        swiper: {
            el: '#thumbs',
            spaceBetween: 10,
            slidesPerView: 4,
            direction: 'vertical',
            watchSlidesVisibility: true,/*避免出现bug*/
        },
    }
})


/*鼠标移入停止轮播，鼠标离开 继续轮播*/

// 左边小轮播图
var hswiper = new Swiper('.swiper-container-hint', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    effect: 'slide',

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
// $('.swiper-container-hint').hover(function(){
//     hswiper.autoplay.stop()
// },function(){
//     hswiper.autoplay.start()
// })
// 鼠标经过
$('.swiper-container-hint').hover(function () {
    hswiper.autoplay.stop()
}, function () {
    hswiper.autoplay.start()
})
var aswiper = new Swiper('.hint-left-act', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    effect: 'slide',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
// 鼠标经过
$('.hint-left-act').hover(function () {
    aswiper.autoplay.stop()
}, function () {
    aswiper.autoplay.start()
})


// 第一个子页面轮播相关攻略
var str = new Swiper('.main-right-str-one', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    effect: 'slide',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
// 鼠标经过
$('.main-right-str-one').hover(function () {
    str.autoplay.stop()
}, function () {
    str.autoplay.start()
})

// 第一个子页面轮播相关攻略
var tra = new Swiper('.main-right-tra', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    effect: 'slide',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
// 鼠标经过
$('.main-right-tra').hover(function () {
    tra.autoplay.stop()
}, function () {
    tra.autoplay.start()
})

// 第二个子页面视频轮播
var video = new Swiper('.depart-backgroud-five-vadio', {
    // effect: 'slide',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

$('.depart-backgroud-five-mask').click(function () {
    var oindex = $(this).parents('.swiper-slide').index()
    $(this).hide()
    console.log(oindex)
    $('.swiper-slide').eq(oindex).find('video').trigger('play');
    $('.swiper-slide').eq(oindex).find('video').attr("controls",'controls')
})