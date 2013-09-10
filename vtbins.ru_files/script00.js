var indexFact=0;
$(document).ready(function(){
	function changeFact(_this){
	
		var idButton = _this.attr("id");
		
		if (idButton == "follFact"){
			indexFact++;	
			var idFactShow = "#int_fact_"+indexFact;
			if ($(idFactShow).length == 0){
				indexFact=0;
				idFactShow = "#int_fact_"+indexFact;
			}
		} else if(idButton == "prevFact") {
			indexFact--;
			var idFactShow = "#int_fact_"+indexFact;
			if ($(idFactShow).length == 0){
				indexFact=nElement;
				idFactShow = "#int_fact_"+indexFact;
			}
		}
		
		$('.fact_block').addClass("invisible_fact"); 
		$(idFactShow).removeClass("invisible_fact");
	}
	
	$("#follFact").click(function(){
		changeFact($(this));
	});
	$("#prevFact").click(function(){
		changeFact($(this));
	});
	
	var url = $.url();
	if (url.attr('protocol') == 'https') {
		$('.do_you_know .socialNetworkBlock').hide();
	}
});