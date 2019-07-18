firebase.auth().onAuthStateChanged((user) => {
  user = firebase.auth().currentUser.uid;
  if (user) {
    const name = user.uid;
    var usersRef = db.collection('users');
    var queryRef = usersRef.where('id', '==', uid).get()
    .then(snapshot => {
        snapshot.forEach(doc => {
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
