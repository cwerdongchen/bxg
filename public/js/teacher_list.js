define(['jquery','template','bootstrap'],function($,template){
  /*讲师管理*/
  $.ajax({
    url:'/api/teacher',
    data:{},
    dataType:'json',
    type:'post',
    success:function(data){
      var html=template('teacherTpl',{list:data.result})
      $('#teacherInfo').html(html)
      /*实现讲师的具体信息*/
      $('#teacherInfo').find('.preview').click(function(){
        var td=$(this).parent()
        var tdId=td.attr('data-tcId')
        // console.log(tdId);
        /*获取讲师信息*/
        $.ajax({
          url:'/api/teacher/view',
          data:{tc_id:tdId},
          dataType:'json',
          type:'get',
          success:function(data){
            // console.log(data);
            var html=template('modalTpl',data.result)
            $('#modalInfo').html(html)
             $('#teacherModal').modal()  
          }
        })
      })
    }
  })
})