$(document).ready(function(){

    // add click event to save button
    $('.saveBtn').on('click', function(){
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        // save this in local storage
        localStorage.setItem(time, value);
    });

//    update elements with class that connects to css to give styling for past present future times
function timeUpdater(){
//variable that holds the current hour
    var currentHour = moment().hours();
//need to loop over the time blocks in HTML
$('.time-block').each(function(){

    var hour = parseInt($(this).attr('id').split('-')[1]);
    if(hour<currentHour){
        $(this).addClass('past');
    }else if(hour === currentHour){
        $(this).removeClass('past');
        $(this).addClass('present');
    } else{
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');

    }

})


}

timeUpdater();

// display the current day on the page
$('#currentDay').text(moment().format('dddd, MMMM Do'))

//get the saved data from local Storage
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'))
$('#hour-11 .description').val(localStorage.getItem('hour-11'))
$('#hour-12 .description').val(localStorage.getItem('hour-12'))
$('#hour-13 .description').val(localStorage.getItem('hour-13'))
$('#hour-14 .description').val(localStorage.getItem('hour-14'))
$('#hour-15 .description').val(localStorage.getItem('hour-15'))
$('#hour-16 .description').val(localStorage.getItem('hour-16'))
$('#hour-17 .description').val(localStorage.getItem('hour-17'))
})