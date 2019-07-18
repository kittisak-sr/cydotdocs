firebase.auth().onAuthStateChanged((user) => {
  user = firebase.auth().currentUser.uid;
  if (user) {
    const nameus = user;
    var usersRef = db.collection('users');
    var queryRef = usersRef.where('id', '==', user).get()
    .then(snapshot => {
    snapshot.forEach(doc => {
       const nameus = document.querySelector("#dropdownMenu1");
       db.collection("users").where('id', '==', user).get().then(function (querySnapshot) {
       querySnapshot.forEach(function (doc) {
         swal("ยินดีต้อนรับ", doc.data().name, "success");
         nameus.innerHTML += "&nbsp;" + doc.data().name
             });
           });
         })
       });
  } else {
  }
});

function logout() {
  if(firebase.auth().currentUser) {
    firebase.auth().signOut();
     window.location.href = 'index.html';
  }
}
