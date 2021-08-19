//this is saying that the document is ready to receive any jquery functions. 
$(document).ready(function(){

    //this is creating an event listener that listens to the click on the saved button
    $('.saveBtn').on('click', function(){
        //this variable saying the saved button is clicked, it is getting the content of the sibiling with the class description
        var value = $(this).siblings('.description').val();
        // this variable is saying that after the button is clicked it goes to the parent element and then the attribute id and return the content
        var time = $(this).parent().attr('id');

        // sets the time and the value of key pair
        localStorage.setItem(time, value);
    });

 //created a function that loops over the time blocks to compare the time block time to the current time
function timeUpdater(){
//variable that holds the current hour, the time right now
    var currentHour = moment().hours();
//need to loop over the time blocks in HTML
$('.time-block').each(function(){
    //parseInt converts a string to a number
    //it is saying get me the id that is inside the timeblock class
    var idContent=$(this).attr('id');
    var hour = parseInt(idContent);
    //this is an if statement is taking the css style for past if the hour is less than the current hour
    if(hour < currentHour){
        $(this).addClass('past');
    }
    // this is saying if the hour is equal to currentHour, remove past class and add present class
    else if(hour === currentHour){
        $(this).removeClass('past');
        $(this).addClass('present');
    } 
    //if the other two conditions are not meant, remove past class and remvove the present class, then add the future class
    else{
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');

    }

})


}
// calling the function 
timeUpdater();

// display the current day on the page
$('#currentDay').text(moment().format('dddd, MMMM Do'))

//this is getting the value of the key that is saved in the local storage and passing to the child of the id with a class description
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'))
$('#11 .description').val(localStorage.getItem('11'))
$('#12 .description').val(localStorage.getItem('12'))
$('#13 .description').val(localStorage.getItem('13'))
$('#14 .description').val(localStorage.getItem('14'))
$('#15 .description').val(localStorage.getItem('15'))
$('#16 .description').val(localStorage.getItem('16'))
$('#17 .description').val(localStorage.getItem('17'))
})