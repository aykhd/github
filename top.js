$(function(){

  $('h1').fadeIn(5000);
  $('ul').fadeIn(5000);

    //ハンバーガーメニューをクリックしたとき＆リンクをクリックしたときにイベント発生
    $('.hamburger').on('click', function() {
       
        hamburger();
      });
      
      $('#navi a').on('click', function() {
        
        hamburger();
      });


    //ページ内リンクをクリックしたときのイベント
      $('a[href^="#"]').click(function(){
        
        let href= $(this).attr("href");
        // ジャンプ先のid名をセット
        let target = $(href == "#" || href == "" ? 'html' : href);
        // トップからジャンプ先の要素までの距離を取得
        let position = target.offset().top;
        // animateでスムーススクロールを行う スクロール速度：600ミリ秒
        $("html, body").animate({scrollTop:position}, 600, "swing");
        return false;
      });
 

    //下から浮かび上がるようにする設定
      $(".inview").on("inview", function (event, isInView) {
        if (isInView) {
          // 要素（inviewクラス）が表示されたらshowクラスを追加する
          $(this).stop().addClass("show");
        }
      });


    //スクロールしたときのイベント
      $(window).scroll(function() {
        
        let scroll = $(window).scrollTop();
    
        mv_scale(scroll);//上の写真の拡大・縮小
    
    //サイトロゴとハンバーガーメニューの設定
        if (scroll > 520) {
        // スクロールが520pxまで来たら、ロゴとハンバーガ―メニュをfadeInで表示する！
        $('.logo').fadeIn(500);
        $('.hamburger').fadeIn(500);
     
        } else {
        //スクロールが520px未満のときはロゴとハンバーガ―メニュをfadeOutで非表示にする！
        $('.logo').fadeOut(500);
        $('.hamburger').fadeOut(500);
      }

    //アクセスの背景画像の設定
      let contact_position = $('#contact').offset().top - $(window).height();

      // アクセスまできたらお問い合わせが表示されるまでの間、背景画像をfadeIn表示
      if(scroll > access_position){
      
        if(scroll < contact_position){
          $('.bg').fadeIn(500);
        } else {
          $('.bg').fadeOut(500);
        }
      // アクセスが表示される前の状態では背景画像を表示しない
      } else {
      
        $('.bg').fadeOut(500);
      }
    });


    //画面読み込み時と画面幅変更時のイベント
     $(window).on('load resize', function() {

        let scroll = $(window).scrollTop();
        mv_scale(scroll);
      });
     

   //ハンバーガーメニューの処理
     function hamburger() {
   
     $('.hamburger').toggleClass('active');
  
     if ($('.hamburger').hasClass('active')) {
      // hamburgerクラスにactiveクラスが存在する場合は、naviにもactiveクラスを追加する
      $('#navi').addClass('active');
     } else {
      // hamburgerクラスにactiveクラスが存在しない場合は、naviからactiveクラスを削除する
      $('#navi').removeClass('active');
    }
    }
    $(function() {
      $('#login-show').click(function(){
        $('#login-modal').fadeIn();
      });
      
      $('.signup-show').click(function(){
        $('#signup-modal').fadeIn();
      });
      
      $('.close-modal').click(function(){
        $('#login-modal').fadeOut();
        $('#signup-modal').fadeOut();
      });
      
      
    });
    
    });

