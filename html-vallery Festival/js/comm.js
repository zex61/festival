    $(function(){

     // .btn-close 클릭했을 때
     // #modal 안 보이게
      $('.notice').click(function(event){
      event.preventDefault()
      $('#modal').css('display','flex')
  })
      $('.btn-close').click(function(){
      $('#modal').hide()
  })

    //nav
    $('nav>.main_menu>li').mouseover(function(){
    $(this).children('.sub_menu').fadeIn(); });
    $('nav>.main_menu>li').mouseleave(function(){
    $(this).children('.sub_menu').fadeOut(); });


      // slide
      let now = 1,
          $송일국 = $('.slide > ul'),
          width = 143

          setInterval(function(){
            slide()
        }, 3000)
  
        function slide(){
            if(now < 3){
                $('.slide > ul').animate({
                    left : (width * now * (-1)) + '%'
                })
                // now = now + 1
                now++
            }else{
                $('.slide > ul').animate({
                    left : 0
                })
                now = 1
            }
        }
        

    
    })