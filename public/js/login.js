define(['jquery', 'cookie'], function ($) {
  //实现登录功能
  $("#btn").click(function () {
    $.ajax({
      type: 'post',
      url: '/api/login',
      data: $('#loginForm').serialize(),
      dataType: 'json',
      success: function (data) {
        // console.log(data);
        // 把登录成功的信息保存在cookie方便别的获取
        $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'})
        // 应该把data中用户登录信息保存到cookie中即可
        location.href='/index/index';
      }
    })
    return false
  })
  // return false  注意return false 要写在事件的里面
})