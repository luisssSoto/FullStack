function anotherAddEventListener(typeOfEvent, callback) {
    var eventHappend = {
        event: "keypress",
        key: "p",
        duration: 2
    };
    if(eventHappend.event === typeOfEvent) {
        callback(eventHappend);
    };
};
anotherAddEventListener('keypress', function(event){
    console.log(event);
    console.log(event.duration);
});