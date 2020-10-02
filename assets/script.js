//global variables for local storage
var schedEvent = document.querySelector("#timeblocks");
var localStorage = JSON.parse(localStorage.getItem("timeblocks"));
var dataArr = new Array(9);
//console.log(JSON.parse(localStorage.timeblocks));
console.log(localStorage);

 
//checks to see if property tieblocks in local storage
if ("timeblocks" in localStorage){
    console.log("saved data");
    dataArr = JSON.parse(localStorage.timeblocks);
}
else{
    console.log("no data avaialble");
    //empty strings for no data 
    dataArr = new Array(9).fill("");
}
console.log(dataArr);

//create function that will replace 
var displayStorage = function(){
    /*for(var i = 0; i < dataArr.length; i ++){
        
    }*/
    

    $("#block0").text(dataArr[0]);
}

displayStorage();


//current date display
var headerDate = function(){
    //create variable, use text to show string value of date
   var currentDate = $("#currentDay").text(moment().format("MMM Do YY"));   
}
headerDate();

//on click event for input to schedule
/*$(".schedInput").click(function(e){
    //make sure it works
    event.preventDefault();
    //see what it targets + its value
    console.log(e.target.innerHTML);

    
    var text = $(this).text();
    console.log($(this).text());
    //should i add all classes from the d-block?need something to keep track of the blocks//putting "block0" into the HTML helps save to local storage for the time being
    //need to have the block id-s aligned with the save buttons and times

    //allows user to input an event for that specific block//creates new textarea element
    //schedEvent = $("<textarea>").addClass("d-block p-2 bg-primary text-white w-100").val(text);
    //replaces current value with new input
    $(this).replaceWith(schedEvent);

})*/



//create array

//save click event//can't click unless timeblock has been edited
$(".save").click(function(){
    console.log("save");
    
    let saveBtnID = $(this).data("id")
    //console.log(saveBtnID);

    let userInput = $(`#block${saveBtnID}`).val();
    console.log(userInput);

    dataArr[parseInt(saveBtnID)] = userInput
    //changes array into a string 
    localStorage.setItem("timeblocks", JSON.stringify(dataArr));
    
    //checking if it works
    console.log(dataArr);
    
    //change lock button image
});

//changes data from string back to an array 
//JSON.parse(localStorage.getItem("timeblocks"));






//color coding for timeblock functions//for each function????//should i add a class for each one?

    
//click save event to local storage



//on click save, change image to lock button