define(['jquery', 'template', 'cookie'], function ($, template) {
	// 'use strict';
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});
});
