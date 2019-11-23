//Part A - 60%

//Employ advanced element, attribute and descendant/child selectors.
//Also employ at least 2 adjacent sibling selectors.
//Use multiple jQuery methods, including at least 4 that we have not seen in class.
//Have between 10 and 15 jQuery anonymous functions (bound to events) and between 2
//and 4 named functions.

$(document).ready(function(){

    //The siblings() method returns all sibling elements of the selected element
    $("h4").siblings().css({"color": "green", "border": "2px solid orange"});
    $("h2").next().css({"color": "red", "border": "2px solid red"});
    //on click the first image from the middle part will hide
    $(".lifestyle img:first").click(function(){
      $(this).hide();
    });

    //double click on "On OCTOBER 16, 2016 • By SOLO PINE" 
    //will hide and show all the img whit class="lifestyle"
    $("div.sec").dblclick(function(){
        $(".lifestyle img").toggle();
      });

    //when mouse will go over any <h2>Thoughful Living in Los Angeles</h2>
    //all tags that contain "href" for the link,will be hidden
    $(".lifestyle h2").mouseenter(function(){
        $("[href]").hide(1000);
    });

	//when i press any key, all the tags that contain "href" will appear
    $("input").keypress(function(){
        $("[href]").show(1000);
    });

    //when i click to input data, the background will be grey
    $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });

    //when i click in another part and not on that input, the background-color will change to normal
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });

    //When the submit button from middle-right part of my page is clicked, an alert will show up
    $("form").submit(function(){
        alert("Submitted");
    });

    // "*" is a selector which is applied for everything on the page
    $("*").on({
        mouseenter: function(){
          $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
          $(this).css("background-color", "lightblue");
        },
    });
    //on double click on h4 (middle - right) the paragraph be 
    //out of visibility and if you dbl click again the paragraph will be visible again
    $(".subscribe-text h4").dblclick(function(){
        $("p").fadeToggle(3000);
    });

    //on click on the button, the table will slideDown slow and in the same time
    //when this btn is clicked, ajax method is invoked
    $(".btn").click(function(){
        $("#customers").slideDown("slow");
 
    // I used the console to display the number of cells in the table
	console.log($('#customers td').length + ' elements!');
    });


    //When the home link is clicked, append a new row to the end of the table
	$('li:first').click(function(){
        $('tbody').append("<tr><td>New Row</td><td>hi</td><td>new data</td><td>Sligo</td></tr>");
	});

	//When the second p element is clicked, <p>Thoughtful Living in Los Angeles
    //Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic 
    //fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon 
    //beard Helvetica.…</p>
    //add the class .comment and after change the text in all paragraphs
	$("p:eq(1)").click(function() {
        $("p").addClass("comment");
        $(".comment").html("Text was changed!");
	});
	
	//When the logo is double clicked, remove the class '.comment'
	$("#menu-left img").one("dblclick", function(){
		$("p").removeClass("comment");
	});

    //When text is typed into the input, (keyup) - replace the text in each h2 
    //from middle left part with the text typed, letter by letter

	$("input:first").keyup(function() {
		var value = $(this).val();
    	$(".st-egal h2").text(value);
    });
    
    //When the textbox loses focus (focusout) - make the contents of the textbox uppercase
	$("input:text").focusout(function() {
		var upper = $(this).val().toUpperCase();
        $("input:text").val(upper);
    });

    //When the footer p is clicked, delete that paragraph.
    //before deleting the paragraph, display the content of the children which is the paragraph
	$(".scris p").click(function() {
		alert($(".scris").children().html());
		$(this).remove();
	});
    
    //When the "Latest Post" is clicked, a div with text will be added after.
    //For that div I added class "side-pop", to have the same style with the others
    $(".widget-title").click(function(){
        $(".widget-title").after("<div><h4>Thoughtful Living in Los Angeles</h4> </div>");
        $(".widget-title div").addClass("side-pop");
    });

    //Selects the third <p> element
    $("p").eq(3).css("background-color", "pink");
    //Selects the second h2 element
    $("h2").eq(2).css("fontSize", "10px");
    //The p:nth-child(2n+1) selects each 2rd paragraph, starting at the first child element.
    $("p:nth-child(2n+1)").css("background-color", "blue");
  });



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