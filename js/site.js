
$(document).ready(function(){
    setTimeout(function(){
        $(".page-content").addClass("page-content_on");
    }, 100);
});

$(".sidebar-close").on('click', function() {
	$(this).toggleClass("sidebar-close_on");
	$('.sidebar').toggleClass("sidebar_hide");
	$('.page-content').toggleClass("page-content-sidebar_hide");
});






















