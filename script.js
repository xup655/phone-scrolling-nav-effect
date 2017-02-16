	//var $breadcrumb = $('.rt-breadcrumb');
	var $breadcrumb_wrap = $('.rt-breadcrumb-wrap');
	var $breadcrumb_ul = $('.rt-breadcrumb-list');
	var bc_w = 0;
	
	//把每個<li>寬度加起來
	$('.rt-breadcrumb-node').each( function() {
      		bc_w += $(this).outerWidth();
    	});
	//寬度給<ul>
	$breadcrumb_ul.width( bc_w+10 );

	//頁面裝不下的nav寬度
	var container_w = $(window).width();
	//var offset = bc_w-container_w;

	//重新抓ul的總寬
	var bc_ow = $breadcrumb_ul.outerWidth();
	//直接向右捲動scroll
	$breadcrumb_wrap.animate({
		scrollLeft:(bc_ow -container_w)}
		, 800 );
console.log("算式:"+(bc_ow -container_w))
console.log("bc_ow:"+bc_ow+", container_w:"+container_w+", 相減:"+(bc_ow -container_w)+", ");
