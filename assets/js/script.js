
var elCalendarDiv = $("#calendar");


function createInputListener(i) {
  return function() {
    value[i] = {hour: i , value: $(this).val()};
    
  }
}


var startHour = 9;
var value = []; 
var savedValues = localStorage.getItem("calendar");
if (savedValues) {
  value = JSON.parse(savedValues);
}


var elImput = []; //array

for (var i = 0; i < 9; i++) {
  var date = new Date(); // today; 

  var now = new Date(); 
   
  date.setHours(9, 0, 0); // set today at 9:00am

  time = moment(date).add(i, 'hour').format('LT'); 

  if (moment(now).format('HH') > moment(date).add(i, 'hour').format('HH')) {
    var pastClass = "row time-block past"
  }

  if (moment(now).format('HH') === moment(date).add(i, 'hour').format('HH')) {
    var pastClass = "row time-block present"
  }

  if (moment(now).format('HH') < moment(date).add(i, 'hour').format('HH')) {
    var pastClass = "row time-block future"
  }

  var elHourDiv = $("<div>").addClass(pastClass).attr('id', time);
  var elHourContainerDiv = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").append(time);
  var elTextAreaDiv = $("<textarea>").addClass("col-8 col-md-10 description").attr('row' , 3).attr('id' , 'textImput-' + i).append(value[i]?.value);
  var elButton = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr('id' , i);
  var elI = $("<i>").addClass("fas fa-save").attr('arial-hidden' , true);
  elHourDiv.append(elHourContainerDiv);
  elHourDiv.append(elTextAreaDiv);
  elButton.append(elI);
  elHourDiv.append(elButton);
  elCalendarDiv.append(elHourDiv);

  elImput[i] = $('#textImput-' + i); // query selector grab element text area
  
  $(elImput[i]).on('input', createInputListener(i));



  $(elButton).click(function(e){
    localStorage.setItem("calendar", JSON.stringify(value))
  });
}






$(function () {

});
