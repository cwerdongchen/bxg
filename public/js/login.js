define(['jquery','cookie'],function($){
  //实现登录功能
  $("#btn").click(function(){
    $.ajax({
      type:'post',
      url:'/api/login',
      data:$('#loginForm').serialize(),
      dataType:'json',
      success:function(data){
        console.log(data);
      }
    })
  })
  return false
})