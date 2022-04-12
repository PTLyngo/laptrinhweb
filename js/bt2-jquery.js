
$(document).ready(function(){
	var d=new Date();
	var ads="Khách hàng có ngày sinh trong tháng " + d.getMonth() + " sẽ được tặng 2 phần sữa chua dâu cho đơn hàng đầu tiên trong tháng.";
	$("footer").append("<div id='adscontainer'><span id='adstext'><h2>" + ads + "</h2></span></div>");

	window.onload = show();
	window.onresize = function(){
		location.reload();
	}

});
function show(){
    var W = ($(window).width() - $("main").width())/2;
	if(W >= 200){
	    adsVerEffect();
	}
	else {
		adsHorEffect();
	}
}
			function adsVerEffect(){
				$("#adscontainer").addClass("adsvercontainer container");
				$("#adscontainer").css("width",($(window).width()-$("main").width())/2);
				$("#adstext").addClass("adsvertext adstext");
				$("#adstext").css("top", $("#adscontainer").height());
				$("#adstext").animate({
					top:"-="+($("#adscontainer").height()+$("#adstext").height()),
				}, 10000,
				function () {
					adsVerEffect();
					}
				);
			}

			function adsHorEffect(){
				$("#adscontainer").addClass("adshorcontainer container")
				$("#adscontainer").css("left", $("main").position().left);
				$("#adscontainer").css("width", $("main").width());
				$("#adstext").addClass("adshortext adstext");
				$("#adstext").css("left", $("#adscontainer").width());
				$("#adstext").animate({
					left:"-="+($("#adscontainer").width()+$("#adstext").width())}, 15000 , 
					function() {
						adsHorEffect();
					}
				);
			}