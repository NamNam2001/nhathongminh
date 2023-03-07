
const firebaseConfig = {
    apiKey: "AIzaSyChoWplN6Mm_0tuUh5n7F-oB0XU1snrMMc",
    authDomain: "esp32-cam-f4b06.firebaseapp.com",
    databaseURL: "https://esp32-cam-f4b06-default-rtdb.firebaseio.com",
    projectId: "esp32-cam-f4b06",
    storageBucket: "esp32-cam-f4b06.appspot.com",
    messagingSenderId: "1086421054891",
    appId: "1:1086421054891:web:6dcfbbc6468d10e41c0eee",
    measurementId: "G-3VMVFHB96Z"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = firebase.database()


function TurnOn() {
    document.getElementById("myImage").src="https://webvn.com/wp-content/uploads/2015/08/pic_bulbon.gif";
    document.getElementById("Led_01").innerHTML="BẬT"
    document.getElementById("Led_01").style.color= "green"
    database.ref("den_01").set(false)

}
function TurnOff() {
    let a="https://webvn.com/wp-content/uploads/2015/08/pic_bulboff.gif";
    document.getElementById("myImage").src=a;
    document.getElementById("Led_01").innerHTML="TẮT"
    if (a=="https://webvn.com/wp-content/uploads/2015/08/pic_bulboff.gif"){
    document.getElementById("Led_01").style.color= "red"}
    database.ref("den_01").set(true)
}