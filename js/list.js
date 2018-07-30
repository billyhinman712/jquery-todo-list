$("#additem").click(function(){
	$("ul").append("<li>" + $('#listi').val() + "</li>");
	$("#listi").val("");
});