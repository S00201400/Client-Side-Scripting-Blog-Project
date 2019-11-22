//Part A - 60%

//I NEED TO CHECK THIS
//Employ advanced element, attribute and descendant/child selectors.
//Also employ at least 2 adjacent sibling selectors.
//Use multiple jQuery methods, including at least 4 that we have not seen in class.

//Develop an original animation.
//While scrolling, the header will change his size
$(window).scroll(function(){
    var scroll= $(window).scrollTop();
    $(".sus img").css({
        width: (100 + scroll/5)+ "%"
    })

    //next section has 3 columns. The left column will go to left and after will come back
    var lc = $("#left-column"); 
    lc.animate({ right: '300px',opacity: '0.4'}, "fast");
    lc.animate({left: '5px', opacity: '0.8'}, 1500);
    //the center column is changing only the opacity
    var cc = $("#center-column"); 
    cc.animate({opacity: '0.4'}, "fast");
    cc.animate({ opacity: '0.8'}, "slow");
    //the right column is going to right and after will come back
    var rc = $("#right-column"); 
    rc.animate({ right: '-250px',opacity: '0.4'}, "fast");
    rc.animate({ left: '-5px', opacity: '0.8'}, 1500);
}) ;  

//Use the jQuery ajax() method and JSON to display information from another source on the
//page. Try and display the information graphically.
$(document).ready(function(e) {
	var myData;
    $('.btn').click(function() {

  		$.ajax({
    		type:"GET",
    		url:"https://learnwebcode.github.io/json-example/animals-2.json",
    		success: function(data) {
        	processData(data);
              },
    	dataType: 'json',
  		});
  
	});
	

	function processData(myData)
	{
        //for loop which takes my data and displays it in my table
		for (var i=0; i<myData.length; i++)
		{
            $("#name"+i).html(myData[i].name) 
            $("#species"+i).html(myData[i].species)
            $("#likes"+i).html(myData[i].foods.likes+" ")
            $("#dislikes"+i).html(myData[i].foods.dislikes)
		}
		
	}
});