//GLOBAL VARIABLES

//selecting timeblocks class and assigning variable
var schedEvent = document.querySelector("#timeblocks");
//changes data from string back to an array
var localStorage = JSON.parse(localStorage.getItem("timeblocks"));
//creating new array with specific length
var dataArr = new Array(9);
//console.log(JSON.parse(localStorage.timeblocks));
console.log(localStorage);

//CURRENT DATE DISPLAY
var headerDate = function(){
    //create variable, use text to show string value of date
   var currentDate = $("#currentDay").text(moment().format("MMM Do YY"));   
}
headerDate();

//LOCAL STORAGE CHECKS
    //checks to see if property timeblocks in local storage
    //before display to make sure local storage does display if there are values
if ("timeblocks" in localStorage){
   // console.log("saved data");
    dataArr = JSON.parse(localStorage.timeblocks);
}
else{
    console.log("no data avaialble");
    //empty strings for no data 
    dataArr = new Array(9).fill("");
}
//console.log(dataArr);

    //create function that will replace 
var displayStorage = function(){
    /*for(var i = 0; i < dataArr.length; i ++){
        //displaying it
        //var display = $(".block").text(dataArr[i]);
        var display = localStorage.getItem(dataArr[i]);
    }*/
    
    //THIS WORKS TO DISPLAY BLOCK//Could use for loop for ease
    $("#block0").text(dataArr[0]);
    $("#block1").text(dataArr[1]);
    $("#block2").text(dataArr[2]);
    $("#block3").text(dataArr[3]);
    $("#block4").text(dataArr[4]);
    $("#block5").text(dataArr[5]);
    $("#block6").text(dataArr[6]);
    $("#block7").text(dataArr[7]);
    $("#block8").text(dataArr[8]);
}

displayStorage();

//SAVE CLICK FOR ITEM TO LOCAL STORAGE
    //save click event//can't click unless timeblock has been edited
$(".save").click(function(){
    //console.log("save");
    
    let saveBtnID = $(this).data("id")
    //console.log(saveBtnID);

    let userInput = $(`#block${saveBtnID}`).val();
    //console.log(userInput);

    dataArr[parseInt(saveBtnID)] = userInput

    //changes array into a string 
    localStorage.setItem("timeblocks", JSON.stringify(dataArr));
    
    //checking if it works
    //console.log(dataArr);
    
    //change lock button image
});


var schedTime = function(schedEvent){
    //getting current hour for timeblocks to compare to 
    var presentTime = moment().hour();
    //variable for template literal for embedding variable in strings
    var selectorSting = `p[data-id='${clockTime}']`
    //getting the exact data id from the variable above
    var clockTime = $(selectorSting).data("id")


    console.log(clockTime)
    console.log(presentTime)
    
    //if timeblock is present hour show present class in CSS
    if (presentTime === clockTime){
        $(".block-time").removeClass("bg-dark")
        $(".block-time").addClass ("present")
        
    }
    //if time block is in future show future color class in CSS
    else if (presentTime > clockTime){
        $(".block-time").removeClass("bg-black")
        $(".block-time").addClass("future")
    }
    //if time block is in past show future color class in CSS
    else if(presentTime < clockTime){
        $(".block-time").removeClass("bg-black")
        $(".block-time").addClass("past")
    }
    
}
schedTime();
//updates every hour in milliseconds
setInterval(schedTime, 3600000);



