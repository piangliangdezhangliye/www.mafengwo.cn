// 筛选按钮
$('.hint-right-top s').click(function(){
    $('.hint-right-screen').show()
})
// x
$('.hint-right-screen>i').click(function(){
    $('.hint-right-screen').hide()
})
// 点击目的地中的城市名
$('.hint-right-screen-aim li').click(function(){
    $(this).addClass('hint-right-screen-aim-click').siblings().removeClass('hint-right-screen-aim-click')
    $('.hint-right-screen').hide()
    $('.hint-right-city').fadeTo(300,1).html(`${$(this).text()}<i></i>`)
})
$('.hint-right-city').on('click','i',function(){
    console.log(222)
    $('.hint-right-city').fadeTo(100,0).text('')
})
// 获取热门游记到顶部的距离
let hintTop=$('.hint-right-top').offset().top
// 进入页面第一个显示
$('.hint-right-content').eq(1).fadeIn()
// 点击页码时
$('.hint-right-page li').click(function(){
    $(this).siblings().removeClass('hint-right-page-click')
    $(this).addClass('hint-right-page-click')
    $('.hint-right-content').fadeOut()
    let oindex=$(this).index()
    $('.hint-right-content').eq(oindex).fadeIn(function(){
       $("html,body").animate({scrollTop:hintTop},3000)
    })
    
})

// 底部广告
let timer=setTimeout(function(){
    $('.ad-tc-left').animate({'left':0},1000)
},1000)
console.log($('.ad-tc-left'))
$('.ad-tc-left').click(function(){
    console.log(222)
    $(this).animate({'left':-200},1000)
    $('.ad').animate({'right':0},3000)
})

$('.ad-tc-x').click(function(){
    $('.ad').animate({'right':3000},2000,function(){
    $('.ad-tc-left').animate({'left':0},1000)
    })
})
$(document).scroll(function(){
    $('.ad-tc-x').click()
})