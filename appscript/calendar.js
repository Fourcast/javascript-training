function showCalendarEvents() {
  //get calendar app service
}

function _myCalendar(){
  return CalendarApp.getCalendarById("niels@fourcast.io");
}

function createCalendarEvent(){
  _createCalendarEvent("Apollo 11 landing");
}

function _createCalendarEvent(title){
  var event = _myCalendar().createEvent(title,
    new Date('July 30, 2018 13:00:00 UTC'),
    new Date('July 30, 2018 15:00:00 UTC'));
  
  Logger.log(event);
  return event;
}

function doGet(e){
    return ContentService.createTextOutput('Hello, world!');
}

function doPost(e){
  event = _createCalendarEvent(e.parameter["title"]);
  return ContentService.createTextOutput(JSON.stringify(event));
}

//curl -X POST https://script.google.com/macros/s/AKfycbx0FPZdWm6bawLZAQXCNtpY-Hl5DqBv9FzO3z_DskPiraGHJTKx/exec -d "title=hoi"