define(['jquery', 'template', 'cookie'], function ($, template) {
	// 'use strict';
	//控制左侧导航的推出和显示
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});
	// 实现退出功能
	$("#logout").click(function () {
		$.ajax({
			url: '/api/logout',
			data: {},
			dataType: "json",
			type: "post",
			success: function (data) {
				// console.log(data);
				if (data.code == 200) {
					//????????
					$.removeCookie('loginInfo', { path: '/' })
					location.href = '/'
				}
			}
		})
	})
	// 获取登录的用户信息
	var info = $.cookie('loginInfo')
	var tpl = '<div class="avatar img-circle">'
		        + '<img src="{{tc_avatar}}">'
		        + '</div>'
		        + '<h4>{{tc_name}}</h4>'
		var html=template.render(tpl,info?JSON.parse(info):{})
		$(".aside .profile").html(html)
		// 验证用户是否通过
		if (!$.cookie('PHPSESSID')&&location.pathname!='/'&&location.href!='/login') {
			location.href='/'
		}
	
});
