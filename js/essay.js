let flag = true
$('.essay-main-lv ul').click(function () {
    if (flag) {
        $('.essay-main-lv ul img').fadeTo(300, 0)
        $('.essay-main-lv-li-one').animate({ 'left': 10 }, 300)
        $('.essay-main-lv-li-two').animate({ 'left': 20 }, 300)
        $('#iframeAudio').attr('src', '')
        flag = false
    } else {
        $('#iframeAudio').attr('src', 'http://mp3file.mafengwo.net/202004232114/b5cc2ff656c6d788618b9213d9a11549/s16/M00/F1/9F/CoUBUl6B21KAGMLXAIDkF6EBeAM166.mp3')

        $('.essay-main-lv-li-one').animate({ 'left': 15 }, 300)
        $('.essay-main-lv-li-two').animate({ 'left': 15 }, 300, function () {
            $('.essay-main-lv ul img').fadeTo(300, 1)
        })
        flag = true
    }
})

// 固定导航显示
$(document).scroll(function () {
    if ($(this).scrollTop() > 700) {
        $('.fixed-nav').show()
    } else (
        $('.fixed-nav').hide()
    )
})

// 鼠标移上去图片上显示
$('.main-left-img-text-checked').mouseenter(function () {
    let otop = $(this).offset().top-$('main').eq(0).offset().top
    let owidth=$(this).width()
    $('.main-left-wangz-img').show()
    $('.main-left-wangz-img').animate({ top: otop,width:owidth }, 0)
    $('.main-left-wangz-img').mouseenter(function(){
        $(this).show()
    })
})
$('.main-left-img-text-checked').mouseleave(function(){
    $('.main-left-wangz-img').hide()
})
$('.main-left-wangz-img').mouseleave(function(){
    $(this).hide()
})


// 相关目的地固定
let num=$('footer').offset().top-900
console.log(num)
$(document).scroll(function(){
    if($(this).scrollTop()>1500&&$(this).scrollTop()<num){
        $('.main-right-bourn-fix').show()
        $('.main-right-tra').css({position:"fixed",top:102})
        $('.main-right-log').css({position:"fixed",top:352})
    }else{
        $('.main-right-bourn-fix').hide()
        $('.main-right-tra').css({position:"relative",top:0})
        $('.main-right-log').css({position:"relative",top:0})
    }
})

// 点击游记目录时  跳到对应的页面中
$('.main-right-log li a').click(function(){
    let oindex=$(this).parents('li').index()
    console.log(oindex)
    let ytop=$('.main-left-img-text>div').eq(oindex).offset().top
    $(document).scrollTop(ytop-80)
})
// 动物眼球
$(document).mousemove(function(e){
    let ox= e.pageX
    dongLeft=ox*10/$(window).width()
    let oy= e.pageY
    dongTop=oy*20/$(window).height()
    $('.essay-dong span').css({left:dongLeft})
    $('.essay-dong span:nth-child(2)').css({top:dongTop+25})
    $('.essay-dong span:nth-child(3)').css({top:70+dongTop})
})

// 鼠标经过动物
let dongTimer=setTimeout(function(){
    $('.essay-dong').animate({left:0},1000)
},300)
$('.essay-dong').mouseenter(function(){
    $('.essay-guide').animate({left:0},1000)
    $('.essay-dong').animate({left:-100},1000)
})
$('.essay-guide-right b').click(function(){
    $('.essay-guide').animate({left:-600},1000,function(){
    $('.essay-dong').animate({left:0},1000)
    })
})