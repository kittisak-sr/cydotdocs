const table = document.querySelector('#tbresult');

function login() {
  var userEmail = document.getElementById("emailLogin").value;
  var userPass = document.getElementById("passwordLogin").value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Error : " + errorMessage );
  });
}

db.collection('user').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    showData(doc);
  });
});

var userRef = db.collection('user');
var status = userRef
    .where("status", "==", 2)

function showData(doc) {
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = doc.id;
    cell2.innerHTML = doc.data().name;
    cell3.innerHTML = doc.data().status;
  }

firebase.auth().onAuthStateChanged(function(user) {
if (user) {
var user = firebase.auth().currentUser;
} else {
}
});
