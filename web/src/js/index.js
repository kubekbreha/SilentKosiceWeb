//objet config for connect FB DB & init
var config = {
    apiKey: "AIzaSyDdRQicgJICyozuHR82NVihur5vyY7rW7w",
    authDomain: "silentkosice.firebaseapp.com",
    databaseURL: "https://silentKosice.firebaseio.com",
    storageBucket: "silentkosice.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
database.goOnline();

//     { '+4210902130280':
//    { records:
//       { '1553965335': [Object],
//         '1553965340': [Object],
//         '1553971676': [Object] } } }
// ak by su chce zmeni inak citanie tak za / dolnis npr: +4210902130280 a tak ides niezsie a nizsie v objekte

var ref = database.ref("/");

ref.once('value', function (snapshot) {
    console.log(snapshot.val());
});
