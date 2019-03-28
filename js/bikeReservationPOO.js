var Bike = function (station, address) {
    this.station = station;
    this.address = address;
};

var BikeSystem = function () {

    this.reservedStation = undefined;
    this.cancelStation = undefined;
    this.counting = undefined;
    this.bike = undefined;
    this.map = undefined;

    this.counting = function () {

        if (sessionStorage.length > 0) {

            document.getElementById("reservationStatus1").innerHTML = "Vous avez un vélo réservé à la station " + JSON.parse(sessionStorage.getItem("bike")).station + " à l'adresse " + JSON.parse(sessionStorage.getItem("bike")).address;
            document.getElementById("cancel").style.display = "block";
            var repeat = setInterval(function () {

                var currentDate = new Date();
                var expDate = new Date(sessionStorage.expirationDate);

                if (currentDate < expDate) {

                    var diff = expDate - currentDate;
                    diff = 1000 * Math.round(diff / 1000);
                    var diffResult = new Date(diff);

                    document.getElementById("reservationStatus2").innerHTML = "il vous reste " + diffResult.getUTCMinutes() + " minutes et " + diffResult.getUTCSeconds() + " secondes";

                    if (diff === 1000) {
                        sessionStorage.clear();
                        clearInterval(repeat);
                        document.getElementById("reservationStatus1").innerHTML = "Aucune réservation en cours";
                        document.getElementById("reservationStatus2").innerHTML = "";
                        document.getElementById("cancel").style.display = "none";
                    }
                }
            }, 1000)
        }
    }

    this.reservedStation = function () {

        if (sessionStorage.getItem("bike") === null) {

            
            
            var reservationDate = new Date();
            var expirationDate = new Date(reservationDate.getTime() + (20 * 60 * 1000));

            sessionStorage.expirationDate = expirationDate;
            
            
            
            sessionStorage.setItem("bike", JSON.stringify(this.bike));
            alert("Vous avez un vélo réservé à la station " + JSON.parse(sessionStorage.getItem("bike")).station);

            this.counting();
        } else {
            var confirmNewReservation = confirm("Vous avez déjà une réservation à la station" + JSON.parse(sessionStorage.getItem("bike")).station + ", voulez vous la remplacer par celle-ci ?");

            if (confirmNewReservation === true) {

                var reservationDate = new Date();
                var expirationDate = new Date(reservationDate.getTime() + (20 * 60 * 1000));

                sessionStorage.expirationDate = expirationDate;

                sessionStorage.setItem("bike", JSON.stringify(this.bike));
                
                alert("Vous avez un vélo réservé à la station " + JSON.parse(sessionStorage.getItem("bike")).station);
                
                this.counting();
            }
        }
    };

    this.cancelStation = function () {

        var confirmCancel = confirm("êtes vous sûr de vouloir annuler votre réservation à la station" + JSON.parse(sessionStorage.getItem("bike")).station);

        if (confirmCancel === true) {
            sessionStorage.clear();
            document.getElementById("reservationStatus1").innerHTML = "Aucune réservation en cours";
            document.getElementById("reservationStatus2").innerHTML = "";
            document.getElementById("cancel").style.display = "none";
        }
    };

    this.init = function () {

        this.counting();

        var lyon = {
            lat: 45.75,
            lng: 4.85
        };

        this.map = new google.maps.Map(
            document.getElementById('map'), {
                zoom: 12,
                center: lyon
            });

        $.ajax({

            url: "https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=980924862259142c97424b23c83c2df4c86946d0",
            dataType: "json",
            success: function (data) {

                var requestData = data;
                var markers = [];

                for (var i = 0; i < requestData.length; i++) {

                    var marker = new google.maps.Marker({
                        position: requestData[i].position,
                        id: requestData[i].number,
                        map: bikeSystem.map

                    });

                    markers.push(marker);

                    marker.addListener("click",

                        function () {

                            var marker = this;
                            var markerId = this.id;

                            $.ajax({

                                url: "https://api.jcdecaux.com/vls/v1/stations/" + markerId + "?contract=lyon&apiKey=980924862259142c97424b23c83c2df4c86946d0",
                                dataType: "json",
                                success: function (data) {

                                    bikeSystem.bike = new Bike(data.name.substring(6), data.address.toLowerCase());
                                    bikeSystem.status = data.status;
                                    bikeSystem.bikes = data.available_bikes;
                                    bikeSystem.bikesStand = data.available_bike_stands;
                                    bikeSystem.banking = data.banking;
                                    
                                    cardSystem.card2();

                                },
                                error: function (err) {
                                    console.log("ça plante", err);
                                },
                            });

                        }

                    );

                };

                var markerCluster = new MarkerClusterer(bikeSystem.map, markers, {
                    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'

                });

            },
            error: function (err) {
                console.log("ça plante", err);
            },
        });

    }

    

};

var bikeSystem = new BikeSystem();


document.getElementById("reserveTheBike").addEventListener("click", function () {
    bikeSystem.reservedStation();
    bikeSystem.counting();
});

document.getElementById("cancel").addEventListener("click", function () {
    bikeSystem.cancelStation();
});
