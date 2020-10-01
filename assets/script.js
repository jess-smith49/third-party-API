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

    //allows user to input an event for that specific block//creates new textarea element
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
    
    let userInput = $(`.block${saveBtnID}`).val();

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