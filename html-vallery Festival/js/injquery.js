// Javascript Document
$(document).ready(function(){  
  
    /* 메뉴 바 ( 개별 메뉴 바)  */    
      $('.main_menu > li').mouseover(function(){
        var index = $(this).index();
        $('.sub_menu').eq(index).stop().slideDown();
      })
    
      $('.main_menu > li').mouseleave(function(){
        $('.sub_menu').stop().slideUp();
      });
    
    /* 슬라이드 쇼 좌우 */
      var width = $('img_slide li').width();
      var height = $('img_slide li').height();
      var length = $('img_slide li').length;
    
      $('img_slide').css('width',width*length);
        
      setInterval(function(){
        $('img_slide').animate({left:-width},1000,function(){
          $('img_slide li').eq(0).appendTo('img_slide');
          $('img_slide').css('left',0); 
        });
      },3000);
    
    /* 팝업창 */
      $('table tbody tr:first-child').eq(0).click(function(){
        $('.mlp').show();
      });
    
      $('.close').click(function(){
        $('.mlp').hide();
      });
    
    });