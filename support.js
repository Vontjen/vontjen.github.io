var realdolmen = {};

function initialize() {
    realdolmen.map = new google.maps.Map(document.getElementById("mapCanvas"), {
        zoom: 7,
        center: new google.maps.LatLng(50.5, 4.5),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    document.getElementById("findMeButton").addEventListener("click", findMe);
}


realdolmen.setPosition = function(latitude, longitude) {
    var googleMapsPosition = new google.maps.LatLng(latitude, longitude);
    var marker = new google.maps.Marker({
        position: googleMapsPosition,
        map: realdolmen.map,
        title: "Here's Johnny!"
    });
    realdolmen.map.setZoom(12);
    realdolmen.map.setCenter(googleMapsPosition);
    alert("Here's Johnny!");
};

window.addEventListener('load', initialize);