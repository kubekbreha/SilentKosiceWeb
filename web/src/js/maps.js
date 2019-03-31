async function initMap() {
    // The location of Uluru
    var kosice = {lat: 48.716, lng: 21.261};

    let mapData = [];

    var test = [];
    // {location: new google.maps.LatLng(37.782, -122.447), weight: 0.5},
    getDatas().then(data => {
        let key = Object.keys(data.val());
        var infowindow = "";
        key.forEach(d => {
            // let key_2 = Object.keys(data.val()[d].records);
            Object.keys(data.val()[d].records).forEach(b => {
                let datas = data.val()[d].records[b];
                console.log(datas.lat);
                let obj = {location: new google.maps.LatLng(datas.lat, datas.long), weight: datas.decibel / 15};
                // let obj = {location: new google.maps.LatLng(datas.lat, datas.long), weight: 10};
                mapData.push(obj);

                let gps = new google.maps.LatLng(datas.lat, datas.long);
                console.log("lat: ", gps.lat(), "lng: ", gps.lng());


                var dateTimeString = moment(parseInt(datas.timestamp) * 1000).format("DD-MM-YYYY HH:mm:ss");

                console.log("timestamp: ", dateTimeString);

                test.push({
                    lat: gps.lat(),
                    lng: gps.lng(),
                    time: dateTimeString,
                    db: datas.decibel
                });

            });
        });

        console.log(mapData[1]);

        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), {
                zoom: 15,
                center: kosice,
                dissipating: false,
                styles:
                    [
                        {
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#dadada"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.line",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#c9c9c9"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        }
                    ]
            });


        var heatmap = new google.maps.visualization.HeatmapLayer({
            data: mapData
        });

        // var gradient = [
        //     'rgba(0, 0, 0, 0)',
        //     'rgba(67, 160, 71, 0.1)',
        //     'rgba(67, 160, 71, 0.3)',
        //     'rgba(67, 160, 71, 0.4)',
        //     'rgba(67, 160, 71, 0.6)',
        //     'rgba(67, 160, 71, 0.7)',
        //     'rgba(67, 160, 71, 1)',
        //     // 'rgba(255, 0, 0, 1)'
        // ];


        // var gradient = [
        //     'rgba(0, 0, 0, 0)',
        //     'rgba(67, 160, 71, 0.1)',
        //     'rgba(67, 160, 71, 0.3)',
        //     'rgba(67, 160, 71, 0.4)',
        //     'rgba(67, 160, 71, 0.6)',
        //     'rgba(67, 160, 71, 0.7)',
        //     'rgba(67, 160, 71, 1)',
        //     // 'rgba(255, 0, 0, 1)'
        // ];

        var gradient = [
            'rgba(0, 255, 0, 0)',
            'rgba(0, 255, 0, 1)',
            // 'rgba(0, 191, 0, 1)',
            'rgba(255, 140, 0, 1)',
            // 'rgba(255, 255, 0, 1)',
            // 'rgba(0, 0, 0, 1)',
            // 'rgba(0, 0, 223, 1)',
            // 'rgba(0, 0, 191, 1)',
            // 'rgba(0, 0, 159, 1)',
            // 'rgba(0, 0, 127, 1)'

            'rgba(255, 0, 0, 1)'
        ]

        heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
        heatmap.set('radius', heatmap.get('radius') ? null : 100);
        heatmap.set('maxIntensity', heatmap.get('maxIntensity') ? null : 15);
        heatmap.set('dissipating', heatmap.get('dissipating') ? null : true);

        heatmap.setMap(map);

        for (let i = 0; i <= test.length; i++) {
            addMarker({lat: test[i].lat, lng: test[i].lng}, map, test[i].time, test[i].db);
        }

        function addMarker(location, map, title,Db) {
            let marker = new google.maps.Marker({
                position: location,
                title: title,
                animation: google.maps.Animation.DROP,
                icon: {
                    url: 'https://img.icons8.com/small/26/000000/rfid-signal.png',
                    // This marker is 20 pixels wide by 32 pixels high
                    size: new google.maps.Size(26, 26),
                    // The origin for this image is (0, 0).
                    origin: new google.maps.Point(0, 0),
                    // The anchor for this image is the base of the flagpole at (0, 32).
                    anchor: new google.maps.Point(13, 13)
                },
                shape: {
                    coords: [1, 1, 1, 20, 18, 20, 18, 1],
                    type: 'poly'
                },
                map: map
            });


            marker.addListener('click', () => {
                infowindow.open(map, marker);
                setTimeout( () => { infowindow.close(); }, 5000);

            });

            // marker.addListener('click', function () {
            //     infowindow.close();
            // });

            var contentString = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                `<h1 id="firstHeading" class="firstHeading">Db: ${Db}</h1>` +
                '<div id="bodyContent">' +
                `<p>Time: ${title}</p>` +
                `<p>Value: ${Db}Db</p>` +
                `<p>Position: ${location.lat}, ${location.lng}</p>` +

                '</div>' +
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

        }


    });




}


//objet config for connect FB DB & init

var config = {
    apiKey: "AIzaSyDdRQicgJICyozuHR82NVihur5vyY7rW7w",
    authDomain: "silentkosice.firebaseapp.com",
    databaseURL: "https://silentKosice.firebaseio.com",
    storageBucket: "silentkosice.appspot.com"
};

const getDatas = async () => {
    firebase.initializeApp(config);
    var database = firebase.database();
    database.goOnline();
    var ref = database.ref("/");

    return ref.once('value');
};

