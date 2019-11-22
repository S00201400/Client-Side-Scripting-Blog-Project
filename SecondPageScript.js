// JavaScript Document - Part B 40%
"use strict";

//Use an API of your choice and obtain JavaScript code to demonstrate that API. You
//should alter the provided code in order to demonstrate 4 - 8 visible changes

//HERE STARTS MY CODE FOR THE API (I worte this code to take data from the Api and 
//to make some changes)

//Inside of this link you can find the name of the city, the api key
// and I added UNITS because I want to see the temperature in CELSIUS
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Sligo,IE&units=Metric&APPID=24836888f1d8129db1cab9106fc62543",
function(data){

    //getting the icon for each type of weather
    var icon="https://api.openweathermap.org/img/w/"+data.weather[0].icon + ".png";

    //getting the temperature and I used Math.Floor to show the number without comma (29 degrees not 29,54 degrees)
    var temp=Math.floor(data.main.temp);

    //getting the description of the weather eg. "SUN / RAIN"
    var weather=data.weather[0].main;

    //Showing the icon, description, temperature on my web page.
    $('.icon').attr('src',icon);
    $('.weather').append(weather);
    $('.temp').append(temp);
    $('.temp').append(" "+"°C");
    //on click on temp an alert will appear 
    $(".temp").click(function(){
        alert("The background color is = " + $(".weather-container").css("background-color"));
      });

    //on load an animation will execute 
    $(".weather").ready(function(){
          $(".weather-container").animate({   left: '250px',
          opacity: '0.5',
          height: '290px',
          width: '500px'});
    });

    //on click on the icon 
    $(document).ready(function(){
        $(".icon").click(function(){
          $(".icon").slideUp(2000).slideDown(2000);
        });
      });

    // on click on weather description, it will delete that part 
    $(document).ready(function(){
        $(".weather").click(function(){
            $(".weather").remove();
        });
    });
});
//HERE ENDS MY CODE FOR THE API

//JavaScript

(function(){
    window.addEventListener("load", HeaderAppear, false);
    document.getElementById('footer').addEventListener("mouseover", removeFooter, false);
    document.getElementById('headerTag').addEventListener("mouseover", removeHeader, false);
    document.getElementById('wrapper').addEventListener("dblclick", changeAllDiv,false)
    document.getElementById('Headding1').addEventListener("click", createTable, false);   
}());

//Create and style an image 4 ways on the page load
function HeaderAppear()
{
    //When the page is loaded the header-image will appear

    //create the image
    var varheaderTag=document.getElementById('headerTag');
    var x = document.createElement("img");
    x.setAttribute("src", "image/header.jpg");
    x.setAttribute("width", "1360");
    x.setAttribute("height", "452");
    x.setAttribute("alt", "The Header"); 
    varheaderTag.appendChild(x);

    //Rotate the image
    x.style.transform="rotate(180deg)";
    //Change the opacity
    x.style.opacity="0.50";
    //Add dashed border
    x.style.border="5px dashed";
    //Rounded-corners
    x.style.borderRadius="100px";
}

//Remove two elements when the mouse is hovered over them
function removeFooter()
{
	var x = document.getElementById('footer');
	x.parentNode.removeChild(x);
}

function removeHeader()
{
	var x = document.getElementById('headerTag');
	x.parentNode.removeChild(x);
}

//Use getElementsByTagName to change all <div> elements on a page (4 styles) 
//when any div is double-clicked
function changeAllDiv()
{
	var x = document.getElementsByTagName('div');
	for (var i=0; i < x.length; i++)
	{
        x[i].setAttribute("style", "background-color: cyan; color: red");
        x[i].style.fontFamily="Times New Roman";
        x[i].style.border="thick solid #0000FF";
        x[i].style.margin="20px";
	}
}

//Have some <h1> text which when clicked, will dynamically create a table with 4 cells
//(2 *2) one of the cells should have a background colour of yellow and the other
//should contain an image
function createTable(){
	var table = document.getElementById("tableSpace"); // here goes my table

	//first row
    var row1 = table.insertRow(0); //create row
	var cell1 = row1.insertCell(0); //add first cell
	var cell2 = row1.insertCell(1); //add second cell

	//second row
	var row2 = table.insertRow(0);
	var cell3 = row2.insertCell(0);
	var cell4 = row2.insertCell(1);

    cell1.innerHTML = "Cell";
    //change background-color to yellow
	cell1.setAttribute("style", "background-color: yellow;");
	cell2.innerHTML = "Cell";
	cell3.innerHTML = "Cell";
	cell4.innerHTML = "";

    var img = document.createElement('img'); //create img
    img.src = "image/imagTable.png"; //add img
    cell4.appendChild(img); //combine cell4 with image

}


