const nameadmin = document.querySelector("#nameInput");
const lastnameadmin = document.querySelector("#lastnameInput");
const teladmin = document.querySelector("#telInput");
const usernamead = document.querySelector("#emailSignup");
const passwordad = document.querySelector("#passwordSignup");
firebase.auth().onAuthStateChanged((user) => {
  user = firebase.auth().currentUser.uid;
  if (user) {
    db.collection("admin").where('id', '==', user).get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
          nameadmin.innerHTML += "<div><div><div><label>" + doc.data().name + "</label></div></div></div>"
          lastnameadmin.innerHTML += "<div><div><div><label>" + doc.data().lastname + "</label></div></div></div>"
          teladmin.innerHTML += "<div><div><div><label>" + doc.data().tel + "</label></div></div></div>"
          usernamead.innerHTML += "<div><div><div><label>" + doc.data().email + "</label></div></div></div>"
          passwordad.innerHTML += "<div><div><div><label>" + doc.data().password + "</label></div></div></div>"
      });
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
