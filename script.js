// from firebase refrence
var database = firebase.database().ref();
var dbled = database.child("LED_STATUS")
var dbdistance = database.child("distance")
var dbflame = database.child("FLAME")
var dbHumidity = database.child("Humidity")
var dbTemperature = database.child("Temperature")
var dbdoor = database.child("DOOR")

// from html doc
var led = document.querySelector('#led')
var distance = document.querySelector('#distance')
var flame = document.querySelector('#flame')
var humidity = document.querySelector('#humidity')
var temperature = document.querySelector('#temperature')
var door = document.querySelector('#door')


function setvalue() {
    dbled.set(led.value)
    dbdistance.set(distance.value)
    dbflame.set(flame.value)
    dbHumidity.set(humidity.value)
    dbTemperature.set(temperature.value)
    dbdoor.set(door.value)
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

// console.log(`led value is: ${led} and distance value is:${distance}`)