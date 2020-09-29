//global variables for local storage
var schedEvent = document.querySelector("#timeblocks");


//current date display
var headerDate = function(){
    //create variable, use text to show string value of date
   var currentDate = $("#currentDay").text(moment().format("MMM Do YY"));   
}
headerDate();

//on click event for input to schedule
$(".schedInput").click(function(){
    //make sure it works
    console.log("clicked");
    
    var text = $(this).text();
    //should i add all classes from the d-block?
    //allows user to input an event for that specific block
    schedEvent = $("<textarea>").addClass("d-block p-2 bg-primary text-white w-100").val(text);
    //replaces current value with new input
    $(this).replaceWith(schedEvent);

})

//create array
var dataArr = [];
//save click event//can't click unless timeblock has been edited
$(".save").click(function(){
    console.log("save");
    
    let saveBtnID = $(this).data("id")
    let userInput = $('.block${saveBtnId} p').text();
    dataArr[parseInt(saveBtnID)] = userInput
    localStorage.setItem("timeblocks", JSON.stringify(dataArr));
    
    //change lock button image
});

//JSON.parse(localStorage.getItem("timeblocks"));






//color coding for timeblock functions//for each function????//should i add a class for each one?

    
//click save event to local storage



//on click save, change image to lock button