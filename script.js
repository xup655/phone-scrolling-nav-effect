	//var $breadcrumb = $('.rt-breadcrumb');
	//var $breadcrumb_wrap = $('.rt-breadcrumb-wrap');
	var bc_w = 0;
	
	//把每個<li>寬度加起來
	$('.rt-breadcrumb-node').each( function() {
      		bc_w += $(this).outerWidth();
    	});
	//寬度給<ul>
	$('.rt-breadcrumb-list').width( bc_w+10 );

	//頁面裝不下的nav寬度
	var container_w = $(window).width();
	var offset = bc_w-container_w;
	//所有<li>向右移動
	$('.rt-breadcrumb-node')
		.css('-webkit-transform','translate3d('+ -1*(offset)+'px,0,0)')
		.on('webkitTransitionEnd',function(){
			//$(this).css({'-webkit-transition':'none','-webkit-transform':'translate3d(0,0,0)'});
		});
