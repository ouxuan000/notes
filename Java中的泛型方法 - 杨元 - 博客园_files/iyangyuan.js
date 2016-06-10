(function($,exports){
  $(document).ready(function(){
    
    /*blog info*/
    var blogInfo = '<div id="AllanboltSignature">'+
    '<div class="blog-signature">'+
      '<p id="PSignature" style="line-height:20px;border-top: #e0e0e0 1px dashed; border-right: #e0e0e0 1px dashed; border-bottom: #e0e0e0 1px dashed; border-left: #e0e0e0 1px dashed; padding-top: 10px;padding-right: 10px;padding-bottom: 10px;padding-left: 60px; background: url(http://images.cnblogs.com/cnblogs_com/iyangyuan/434969/o_2010092119181033.png) #FFFAEA no-repeat 2% 50%; font-size:12px;">'+
        '作者：<a href="http://www.cnblogs.com/iyangyuan" target="_blank">杨元</a>'+
        '<br>'+
        '欢迎任何形式的转载，但请务必注明出处。'+
      '</p>'+
    '</div>'+
  '</div>';
  $("#MySignature").append(blogInfo).show();
  
  /*nav*/
  var myNavs = ["<li><a href='http://www.cnblogs.com/iyangyuan/category/434942.html'>原创程序</a></li>",
                "<li><a href='http://www.cnblogs.com/iyangyuan/category/434944.html'>技术文章</a></li>",
                "<li><a href='http://www.cnblogs.com/iyangyuan/category/434943.html'>灵感算法</a></li>",
                "<li><a href='http://www.cnblogs.com/iyangyuan/category/434945.html'>学习笔记</a></li>",
                "<li><a href='http://www.cnblogs.com/iyangyuan/category/434946.html'>其他</a></li>"],
      $navList = $("#navList"),
      $syndication = {};
      
  $navList.find("li").eq(2).remove();
  $navList.find("li").eq(2).remove();
  $syndication = $navList.find("li").eq(-2);
  $.each(myNavs,function(i,n){
    $syndication.before(n);
  });
  
  
  //等待加载完成，没想到博客园首页还有异步请求的代码！
  var handle = setInterval(function(){
        if($("#profile_block").length){
          clearInterval(handle);
          /*head*/
          $("#profile_block").prepend('<span class="yy-head"></span>');
          //公告(仅兼容火狐和谷歌浏览器)
          var noticeDom = document.getElementById("yy-notice");
          function noticeTransitionEnd(){
              document.getElementById("yy-notice").style.display = "none";
          }
          noticeDom.addEventListener("animationend", noticeTransitionEnd, false);
          noticeDom.addEventListener("webkitAnimationEnd", noticeTransitionEnd, false);
        }
      },500);
  
  });

})(jQuery,this);