async function initMap() {
    // The location of Uluru
    var kosice = {lat: 48.716, lng: 21.261};

    let mapData = [
    ];

    // {location: new google.maps.LatLng(37.782, -122.447), weight: 0.5},
    getDatas().then(data => {
        let key = Object.keys(data.val());

        key.forEach(d => {
            // let key_2 = Object.keys(data.val()[d].records);
            Object.keys(data.val()[d].records).forEach(b => {
                let datas = data.val()[d].records[b];
                console.log(datas.lat);
                let obj = {location: new google.maps.LatLng(datas.lat,datas.long), weight: datas.decibel};
                mapData.push(obj);

                // console.log(data.val()[d].records[b]);
            });

            // console.log(data.val()[d].records[key_2]);
            // console.log(data.val()[d].records);
        });

        console.log(mapData[1]);

    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 17,
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

    var gradient = [
        'rgba(0, 0, 0, 0)',
        'rgba(67, 160, 71, 0.2)',
        'rgba(67, 160, 71, 0.4)',
        'rgba(67, 160, 71, 0.6)',

        // 'rgba(0, 255, 255, 1)',
        // 'rgba(0, 191, 255, 1)',
        // 'rgba(0, 127, 255, 1)',
        // 'rgba(0, 63, 255, 1)',
        // 'rgba(0, 0, 255, 1)',
        // 'rgba(0, 0, 223, 1)',
        // 'rgba(0, 0, 191, 1)',
        // 'rgba(0, 0, 159, 1)',
        // 'rgba(0, 0, 127, 1)',
        // 'rgba(63, 0, 91, 1)',
        // 'rgba(127, 0, 63, 1)',
        // 'rgba(191, 0, 31, 1)',
        'rgba(67, 160, 71, 1)',
        // 'rgba(255, 0, 0, 1)'
    ];

    heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
    heatmap.set('radius', heatmap.get('radius') ? null : 50);
    heatmap.set('maxIntensity', heatmap.get('maxIntensity') ? null : 70);
    heatmap.set('dissipating', heatmap.get('dissipating') ? null : true);


    heatmap.setMap(map);
    // The marker, positioned at Uluru
    // var marker = new google.maps.Marker({position: kosice, map: map});

    });

}



//objet config for connect FB DB & init

var config = {
    apiKey: "AIzaSyDdRQicgJICyozuHR82NVihur5vyY7rW7w",
    authDomain: "silentkosice.firebaseapp.com",
    databaseURL: "https://silentKosice.firebaseio.com",
    storageBucket: "silentkosice.appspot.com"
};

const getDatas = async  () =>  {
    firebase.initializeApp(config);
    var database = firebase.database();

    database.goOnline();

    var ref = database.ref("/");

    return ref.once('value');

};

