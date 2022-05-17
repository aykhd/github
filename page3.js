$(function(){
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
     
       });

    
        const thumbs = document.querySelectorAll('.thumb');
        // console.log(thumbs);
        thumbs.forEach(function(item,index){
        item.onclick = function(){
            document.getElementById('bigimg').src = this.dataset.image;
        }
        });
   

        $(function(){
          var value = 300; // 商品の単品価格
          var maxNum = 100; // 注文できる個数の上限
          var tagInput = $('#jsNum'); // 入力対象のinputタグID名
          var tagOutput = $('#jsPrice'); // 出力対象のinputタグID名
          tagInput.on('change', function() {
            var str = $(this).val();
            var num = Number(str.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
            if(num == 0) {
              num = '';
            } else if (num > maxNum) { // 上限を超える個数を入力した場合
              num = maxNum;
            }
            $(this).val(num);
            if(num != 0) {
              var price = num * value;
              tagOutput.val(price);
            }
          });
        });
   
 