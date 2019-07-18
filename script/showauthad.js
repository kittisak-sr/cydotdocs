firebase.auth().onAuthStateChanged((user) => {
  user = firebase.auth().currentUser.uid;
  if (user) {
    const namead = user;
    var usersRef = db.collection('admin');
    var queryRef = usersRef.where('id', '==', user).get()
    .then(snapshot => {
    snapshot.forEach(doc => {
       const namead = document.querySelector("#dropdownMenuadmin");
       db.collection("admin").where('id', '==', user).get().then(function (querySnapshot) {
       querySnapshot.forEach(function (doc) {
         swal("ยินดีต้อนรับ", doc.data().name, "success");
         namead.innerHTML += "&nbsp;" + doc.data().name
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
