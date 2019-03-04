$(function(){
function run(){
	 var select = $("#effects").val();
	alert($("#effects").val());
	 $("#boxhide").hide(select,500,repeat);
	
}
//	function repeat(){
//		setTimeout($("#boxhide").removeAttr().hide(),10);
//	}
 $("#click").click(function(){
      run();

});
//$("#boxhide").removeAttr().hide();

});
