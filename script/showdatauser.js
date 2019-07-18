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
         nameus.innerHTML += "&nbsp;" + doc.data().name
             });
           });
         })
       });
  } else {
  }
});

const nameuser = document.querySelector("#nameInput");
const lastnameuser = document.querySelector("#lastnameInput");
const bduser = document.querySelector("#bdInput");
const collageuser = document.querySelector("#collageInput");
const degreeuser = document.querySelector("#degreeInput");
const teluser = document.querySelector("#telInput");
const username = document.querySelector("#emailSignup");
const password = document.querySelector("#passwordSignup");
firebase.auth().onAuthStateChanged((user) => {
  user = firebase.auth().currentUser.uid;
  if (user) {
    db.collection("users").where('id', '==', user).get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        const months = ["มกราคม", "กุมภาพันธ์", "มีนาคม","เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
        let d = new Date(doc.data().birthday);
        let formatted_date = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear()
          nameuser.innerHTML += "<div><div><div><label>" + doc.data().name + "</label></div></div></div>"
          lastnameuser.innerHTML += "<div><div><div><label>" + doc.data().lastname + "</label></div></div></div>"
          bduser.innerHTML += "<div><div><div><label>" + formatted_date + "</label></div></div></div>"
          collageuser.innerHTML += "<div><div><div><label>" + doc.data().collage + "</label></div></div></div>"
          degreeuser.innerHTML += "<div><div><div><label>" + doc.data().degree + "</label></div></div></div>"
          teluser.innerHTML += "<div><div><div><label>" + doc.data().tel + "</label></div></div></div>"
          username.innerHTML += "<div><div><div><label>" + doc.data().email + "</label></div></div></div>"
          password.innerHTML += "<div><div><div><label>" + doc.data().password + "</label></div></div></div>"
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
