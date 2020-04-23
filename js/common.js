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