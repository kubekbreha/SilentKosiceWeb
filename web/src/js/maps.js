//
//
// let pica = [
//     new google.maps.LatLng(48.716, 21.261),
//     new google.maps.LatLng(48.716, 21.259),
//     new google.maps.LatLng(48.716, 21.257),
//     new google.maps.LatLng(48.716, 21.255),
//     new google.maps.LatLng(48.716, 21.253),
//     new google.maps.LatLng(48.716, 21.251),
//     new google.maps.LatLng(48.716, 21.249),
//     new google.maps.LatLng(48.716, 21.247),
//     new google.maps.LatLng(48.716, 21.245),
//     new google.maps.LatLng(48.716, 21.243),
//     new google.maps.LatLng(48.716, 21.241),
//     new google.maps.LatLng(48.716, 21.239),
//     new google.maps.LatLng(48.716, 21.237),
//     new google.maps.LatLng(48.716, 21.235),
//     new google.maps.LatLng(48.716, 21.233),
//     new google.maps.LatLng(48.716, 21.231),
// ];
//
//
// // Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     var kosice = {lat: 48.716, lng: 21.261};
//
//     // The map, centered at Uluru
//     var map = new google.maps.Map(
//         document.getElementById('map'), {
//             zoom: 13,
//             center: kosice,
//             // styles:
//             //     [
//             //         {
//             //             "elementType": "geometry",
//             //             "stylers": [
//             //                 {
//             //                     "color": "#f5f5f5"
//             //                 }
//             //             ]
//             //         },
//             //         {
//             //             "elementType": "labels.icon",
//             //             "stylers": [
//             //                 {
//             //                     "visibility": "off"
//             //                 }
//             //             ]
//             //         },
//             //         {
//             //             "elementType": "labels.text.fill",
//             //             "stylers": [
//             //                 {
//             //                     "color": "#616161"
//             //                 }
//             //             ]
//             //         },
//             //         {
//             //             "elementType": "labels.text.stroke",
//             //             "stylers": [
//             //                 {
//             //                     "color": "#f5f5f5"
//             //                 }
//             //             ]
//             //         },
//             //         {
//             //             "featureType": "administrative.land_parcel",
//             //             "elementType": "labels.text.fill",
//             //             "stylers": [
//             //                 {
//             //                     "color": "#bdbdbd"
//             //                 }
//             //             ]
//             //         },
//             //         {
//             //             "featureType": "poi",
//             //             "elementType": "geometry",
//             //             "stylers": [
//             //                 {
//             //                     "color": "#eeeeee"
//             //                 }
//             //             ]
//             //         },
//             //         {
//             //             "featureType": "poi",
//             //             "elementType": "labels.text.fill",
//             //             "stylers": [
//             //                 {
//             //                     "color": "#757575"
//             //                 }
//             //             ]
//             //         },
//             //         {
//             //             "featureType": "poi.park",
//             //             "elementType": "geometry",
//             //             "stylers": [
//             //                 {
//             //                     "color": "#e5e5e5"
//             //                 }
//             //             ]
//             //         },
//             //         {
//             //             "featureType": "poi.park",
//             //             "elementType": "labels.text.fill",
//             //             "stylers": [
//             //                 {
//             //                     "color": "#9e9e9e"
//             //                 }
//             //             ]
//             //         },
//             //         {
//             //             "featureType": "road",
//             //             "elementType": "geometry",
//             //             "stylers": [
//             //                 {
//             //                     "color": "#ffffff"
//             //                 }
//             //             ]
//             //         },
//             //         {
//             //             "featureType": "road.arterial",
//             //             "elementType": "labels.text.fill",
//             //             "stylers": [
//             //                 {
//             //                     "color": "#757575"
//             //                 }
//             //             ]
//             //         },
//             //         {
//             //             "featureType": "road.highway",
//             //             "elementType": "geometry",
//             //             "stylers": [
//             //                 {
//             //                     "color": "#dadada"
//             //                 }
//             //             ]
//             //         },
//             //         {
//             //             "featureType": "road.highway",
//             //             "elementType": "labels.text.fill",
//             //             "stylers": [
//             //                 {
//             //                     "color": "#616161"
//             //                 }
//             //             ]
//             //         },
//             //         {
//             //             "featureType": "road.local",
//             //             "elementType": "labels.text.fill",
//             //             "stylers": [
//             //                 {
//             //                     "color": "#9e9e9e"
//             //                 }
//             //             ]
//             //         },
//             //         {
//             //             "featureType": "transit.line",
//             //             "elementType": "geometry",
//             //             "stylers": [
//             //                 {
//             //                     "color": "#e5e5e5"
//             //                 }
//             //             ]
//             //         },
//             //         {
//             //             "featureType": "transit.station",
//             //             "elementType": "geometry",
//             //             "stylers": [
//             //                 {
//             //                     "color": "#eeeeee"
//             //                 }
//             //             ]
//             //         },
//             //         {
//             //             "featureType": "water",
//             //             "elementType": "geometry",
//             //             "stylers": [
//             //                 {
//             //                     "color": "#c9c9c9"
//             //                 }
//             //             ]
//             //         },
//             //         {
//             //             "featureType": "water",
//             //             "elementType": "labels.text.fill",
//             //             "stylers": [
//             //                 {
//             //                     "color": "#9e9e9e"
//             //                 }
//             //             ]
//             //         }
//             //     ]
//         });
//     // var heatmap = new google.maps.visualization.HeatmapLayer({
//     //     data: pica
//     // });
//     // heatmap.setMap(map);
//     // The marker, positioned at Uluru
//     var marker = new google.maps.Marker({position: kosice, map: map});
// }
