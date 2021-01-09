// JavaScript Document

$(function () {

    /*
     * Sticky header
     */
    $('#js__header').each(function () {

        var $window = $(window),
            $header = $(this),  

            $headerClone = $header.contents().clone(),

            $headerCloneContainer = $('<div class="header-clone"></div>'),
            threshold = $header.offset().top + $header.outerHeight();
			$headerCloneContainer.append($headerClone);
			$headerCloneContainer.appendTo('body');
		
			$window.on('scroll', function () {
            if ($window.scrollTop() > threshold) {
                $headerCloneContainer.addClass('visible');
            } else {
                $headerCloneContainer.removeClass('visible');
            }
        });

		$window.trigger('scroll');
    });
	
});



$(function(){
	/*
     * エフェクトの実行
     */
	
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});

$(function(){
	/*
     * ホバーエフェクトの実行
     */
	//アニメーションにかける時間を300に設定
    var duration = 300;

    $('.btn-nav-item')
    .on('mouseover', function(){
        var $btn = $(this).stop(true).animate({
			backgroundColor: '#1D293F',
			borderWidth: '0px'
        }, duration);
		//nav-textの色をwhiteに変更
		$btn.find('.nav-text').stop(true).animate({color: '#fff'}, duration);
		//nav-text-engの色をwhiteに変更
		$btn.find('.nav-text-eng').stop(true).animate({color: '#fff'}, duration);
		$btn.find('.img-1').stop(true).animate({opacity: 0}, duration);
        $btn.find('.img-2').stop(true).animate({opacity: 1}, duration);
    })
    .on('mouseout', function(){
        var $btn = $(this).stop(true).animate({
            backgroundColor: '#F2F2F2',
			borderWidth: '1px'
        }, duration);
		$btn.find('.nav-text').stop(true).animate({color: '#1D293F'}, duration);
		$btn.find('.nav-text-eng').stop(true).animate({color: '#1D293F'}, duration);
        $btn.find('.img-1').stop(true).animate({opacity: 1}, duration);
        $btn.find('.img-2').stop(true).animate({opacity: 0}, duration);
    });
});


$(function(){
	/*
     *ハンバーガーメニューの作成
     */
	
		var bgHeight = $('.fv').outerHeight(); //ファーストビュー(.fv)の高さを取得
	
		$('.burger-btn').on('click',function(){
			if($(window).scrollTop() < bgHeight - 50){ //ハンバーガーボタンが.fvより上にある場合
				$('.bar').toggleClass('cross'); //ハンバーガーメニューのラインをクロスさせるCSSを割り当てる
				$('.btn-nav-item').toggleClass('open'); //ナビゲーションが開くCSSを割り当てる
				$('.burger-musk').fadeToggle(300); //背景を暗くするマスクを付与
				$('body').toggleClass('noscroll'); //ハンバーガーメニューを開いたとき、スクロールを禁止する
				
			}else{ //ハンバーガーボタンが.fvより下にある場合
				
				$(this).toggleClass('blcok'); //ハンバーガーボタンのcolorを変更、それ以外は同様の処理を実施
				$('.bar').toggleClass('cross'); 
				$('.btn-nav-item').toggleClass('open');
				$('.burger-musk').fadeToggle(300);
				$('body').toggleCLass('noscroll');	
			}
		});
				
		$(window).on('load scroll', function(){ //スクロールでサイトロゴとハンバーガーメニューの色を変更
				if( $(window).scrollTop() < bgHeight - 50){
					$('.logo-inner').removeClass('black'); //logoのクラスを外す処理
					$('.logo-inner').addClass('black'); //logoのクラスを加える処理			
					$('.burger-btn').removeClass('black'); //burger-btnのクラスを外す処理
					$('.burger-btn').addClass('black'); //burger-btnのクラスを加える処理
				}
			});

});


