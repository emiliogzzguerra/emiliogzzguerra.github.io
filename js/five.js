// equivalent of $(document).ready(function(){...
$(function(){
	
	$("#onetext").hide();
    $("#twotext").hide();
    $("#threetext").hide();
    $("#fourtext").hide();
    $("#fivetext").hide();

  // Functionality starts here
	$('#one').on('click', function(e){
	 $("#onetext").show();
     $("#twotext").hide();
     $("#threetext").hide();
     $("#fourtext").hide();
     $("#fivetext").hide();
    })

	$('#two').on('click', function(e){
	 $("#onetext").hide();
     $("#twotext").show();
     $("#threetext").hide();
     $("#fourtext").hide();
     $("#fivetext").hide();
    })

    $('#three').on('click', function(e){
	 $("#onetext").hide();
     $("#twotext").hide();
     $("#threetext").show();
     $("#fourtext").hide();
     $("#fivetext").hide();
    })

    $('#four').on('click', function(e){
	 $("#onetext").hide();
     $("#twotext").hide();
     $("#threetext").hide();
     $("#fourtext").show();
     $("#fivetext").hide();
    })

    $('#five').on('click', function(e){
	 $("#onetext").hide();
     $("#twotext").hide();
     $("#threetext").hide();
     $("#fourtext").hide();
     $("#fivetext").show();
    })
});