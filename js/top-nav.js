// 去旅行
$('.go').mouseenter(function(){
    $('.top-nav-go-list').show()
    $('.go>a').css({
        padding: '0 14px 2px',
        borderBottom:'none',
        borderLeft: '1px solid #ccc',
        borderRight: '1px solid #ccc',
        backgroundColor: '#fff',
        color:'#ff9e00',
        boxSizing:'border-box'
      })
      $(this).css({borderTop: '2px solid #ff9e00',})
})
$('.go').mouseleave(function(){
    $('.top-nav-go-list').hide()
    $('.go>a').css({
        borderLeft: 'none',
        borderRight: 'none',
        color:'#333',
        padding: '0 15px 2px',
    })
    $(this).css({borderTop: '2px solid transparent',})
})


// 社区
$('.community').hover(function(){
    $('.top-nav-community').show()
    $('.top-nav-go-a').css({
        padding: '0 14px 2px',
        borderBottom:'none',
        borderLeft: '1px solid #ccc',
        borderRight: '1px solid #ccc',
        backgroundColor: '#fff',
        color:'#ff9e00',
        boxSizing:'border-box'
      })
      $(this).css({borderTop: '2px solid #ff9e00',})
},function(){
    $('.top-nav-community').hide()
    $('.top-nav-go-a').css({
        borderLeft: 'none',
        borderRight: 'none',
        color:'#333',
        padding: '0 15px 2px',
    })
    $(this).css({borderTop: '2px solid transparent',})
})