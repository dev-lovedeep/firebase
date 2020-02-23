// from firebase refrence
var database = firebase.database().ref();
var dbled = database.child("LED_STATUS")
var dbdistance = database.child("distance")
var dbflame = database.child("FLAME")
var dbHumidity = database.child("Humidity")
var dbTemperature = database.child("Temperature")
var dbdoor = database.child("DOOR")
var dbgarage = database.child("GARAGE")
var dbWindow = database.child("Window")

// from html doc
var led = document.querySelector('#led')
var distance = document.querySelector('#distance')
var flame = document.querySelector('#flame')
var humidity = document.querySelector('#humidity')
var temperature = document.querySelector('#temperature')
var door = document.querySelector('#door')
var garage = document.querySelector('#garage')
var Window = document.querySelector('#window')


function setvalue() {
    dbled.set(parseInt(led.value))
    dbdistance.set(parseInt(distance.value))
    dbflame.set(flame.value)
    dbHumidity.set(parseInt(humidity.value))
    dbTemperature.set(parseInt(temperature.value))
    dbdoor.set(parseInt(door.value))
    dbgarage.set(parseInt(garage.value))
    dbWindow.set(parseInt(window.value))
    // alert("succeed")
}

// var led,distance;

dbled.on('value', function (snapshot) {
    led.value = snapshot.val();
});

dbdistance.on('value', function (snapshot) {
    distance.value = snapshot.val();
});
dbflame.on('value', function (snapshot) {
    flame.value = snapshot.val();
});
dbHumidity.on('value', function (snapshot) {
    humidity.value = snapshot.val();
});
dbTemperature.on('value', function (snapshot) {
    temperature.value = snapshot.val();
});
dbdoor.on('value', function (snapshot) {
    door.value = snapshot.val();
});
dbgarage.on('value', function (snapshot) {
    garage.value = snapshot.val();
});
dbWindow.on('value', function (snapshot) {
    Window.value = snapshot.val();

});

// console.log(`led value is: ${led} and distance value is:${distance}`)