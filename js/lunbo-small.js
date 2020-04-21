 // 初始化定时器
 let timer=null
 // 鼠标进入箭头显示
 $('.slider').on('mouseenter',function(){
   clearInterval(timer)
 })
 // 鼠标进入箭头显示
 $('.slider').on('mouseleave',function(){
   timer=setInterval(move,3000)
 })
 let index=0
 // 小圆点
 for(let i=0;i<$('.slider ul li').length;i++){
   $('.slider ol').append('<li></li>')
   $('.slider ol li').eq(i).attr('k',i)
   if(i==0){
     $('.slider ol li').eq(0).addClass('current')
   }
   $('.slider ol li').eq(i).on('click',function(){
     $(this).addClass('current').siblings().removeClass('current')
     index=$('ol li').eq(i).attr('k')
   $('.slider ul li').eq(index).fadeIn().siblings().fadeOut()
   })
 }
 // 自动轮播
 timer=setInterval(move,1000)
 function move(){
    index++
   if(index>$('.slider ul li').length-1){
     index=0
   }
   $('.slider ul').css({left:`-${260*index}`})
   $('.slider ol li').eq(index).addClass('current').siblings().removeClass('current')
 }