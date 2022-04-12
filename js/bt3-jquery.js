$(document).ready(function () {
    var headlineConent=[
        {
            "title":"Bánh flan sữa chua - sự kết hợp hoàn hảo",
            "photo":"image/trangchu/headline/headline1.jpg"
        },
        {
            "title":"Sữa chua làm từ sữa dê - đậm đà hương vị khó quên",
            "photo":"image/trangchu/headline/headline2.jpg"
        },
        {
            "title":"Thưởng thức sữa chua theo cách của bạn",
            "photo":"image/trangchu/headline/headline3.jpg"
        }
    ];
    for (var i = 0; i < headlineContent.length; i++) {
        var item = headlineContent[i];
        var dc = $("<div>");
        $("<span><h3>" + item.title + "</h3></span>").appendTo(dc);
        $("<img src='" + item.photo + "'/>").appendTo(dc);
        $("#headline").append(dc);
        if(i > 0) dc.hide();
      }
    
    
      setInterval(function () {
        $("#headline > div:first")
          .hide()
          .next()
          .fadeIn(1000)
          .end()
          .appendTo("#headline");
      }, 5000);
});