// equivalent of $(document).ready(function(){...
$(function(){
	$("#onetext").hide();
	$("#twotext").hide();
	$("#threetext").hide(); 

  // Functionality starts here
	$('#one').on('click', function(e){
	 $("#threetext").hide();
	 $("#twotext").hide();
     $("#onetext").show();
    })

	$('#two').on('click', function(e){
	 $("#threetext").hide();
     $("#onetext").hide();
     $("#twotext").show();
    })

    $('#three').on('click', function(e){
	 $("#twotext").hide();
     $("#onetext").hide();
	 $("#threetext").show();
    })
});