	//var $breadcrumb = $('.rt-breadcrumb');
	//var $breadcrumb_wrap = $('.rt-breadcrumb-wrap');
	var bc_w = 0;
	
	//把每個<li>寬度加起來
	$('.rt-breadcrumb-node').each( function() {
      		bc_w += $(this).outerWidth();
    	});
	//寬度給<ul>
	$('.rt-breadcrumb-list').width( bc_w+10 );
	
