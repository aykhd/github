let search = document.getElementById('search');
search.addEventListener('click', ()=>{
    
    let api = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=';
    let error = document.getElementById('error');
    let input = document.getElementById('input');
    let address1 = document.getElementById('address1');
    let address2 = document.getElementById('address2');
    let address3 = document.getElementById('address3');
    let param = input.value.replace("-",""); //入力された郵便番号から「-」を削除
    let url = api + param;
    
    fetchJsonp(url, {
        timeout: 10000, //タイムアウト時間
    })
    .then((response)=>{
        error.textContent = ''; //HTML側のエラーメッセージ初期化
        return response.json();  
    })
    .then((data)=>{
        if(data.status === 400){ //エラー時
            error.textContent = data.message;
        }else if(data.results === null){
            error.textContent = '郵便番号から住所が見つかりませんでした。';
        } else {
            address1.value = data.results[0].address1;
            address2.value = data.results[0].address2;
            address3.value = data.results[0].address3;
        }
    })
    .catch((ex)=>{ //例外処理
        console.log(ex);
    });
}, false);



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

       $(function(){
        $('.button').on('click', function(){
          if($('#name').val() === ''){
            alert('必須項目の入力が未済です');
            $('#name').focus();
            return false;
          }
            
            alert('送信中です。このままお待ちください。');
            
          
        });
      });