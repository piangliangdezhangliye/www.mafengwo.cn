// 点击启程出发
$('.depart-btn').click(function(){
    $('.depart-start').animate({left:-3000},300)
    $('.depart-right-fix').animate({right:0},1000,function(){
    $('.depart-right-fix').animate({right:-135},1000,)
    })
})
// 右边固定窗黄色按钮
$('.depart-right-fix span').on('click',function(){
    $('.depart-right-fix').animate({right:0},1000,)
})
// 点击右边固定窗哦
$('.depart-backgroud').eq(0).fadeIn()
$('.depart-backgroud').hide()
$('.depart-right-fix ul li').click(function(){
    let index=$(this).index()
    $('.depart-backgroud').fadeOut()
    $('.depart-backgroud').eq(index).fadeIn()
    $('.depart-backgroud').eq(index).show()
    $(this).css('backgroundColor','rgba(0, 0, 0, 0.6)').siblings().css('backgroundColor','rgba(0, 0, 0, 0.4)')
    $('.depart-right-fix').animate({right:-135},1000,)
    // if(index==4){
    //     $('.depart-backgroud-five').css(height,`110%`)
    // }
})
