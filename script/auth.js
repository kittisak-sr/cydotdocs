function login() {
  var userEmail = document.getElementById("emailLogin").value;
  var userPass = document.getElementById("passwordLogin").value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then(function() {
  user = firebase.auth().currentUser.uid;
    var usersRef = db.collection('users');
    var queryRef = usersRef.where('id', '==', user).get()
     .then(snapshot => {
      snapshot.forEach(doc => {
      if (doc.id == user){
        if(doc.data().login == true) {
          var statusRef = db.collection('users');
          var staRef = statusRef.where('status', '==', 2).get()
           .then(snapshot => {
             snapshot.forEach(doc => {
             if (doc.data().status == 2){
               window.location.href = 'indexuser.html';
             }
            });
            })
            } else {
              swal({
                title: "ขออภัยไม่สามารถเข้าสู่ระบบได้",
                text: "ผู้ดูแลระบบยังไม่ได้ยืนยันคำร้องในการสมัครสมาชิก",
                icon: "warning",
                button: "ตกลง",
              });
            }
            } else {
              swal({
                title: "ขออภัยไม่สามารถเข้าสู่ระบบได้",
                text: "คุณยังไม่ได้เป็นสมาชิก กรุณาสมัครสมาชิก",
                icon: "warning",
                button: "ตกลง",
              });
            }
            });
            })
   var adminRef = db.collection('admin');
   var admRef = adminRef.where('id', '==', user).get()
    .then(snapshot => {
    snapshot.forEach(doc => {
     if (doc.id == user){
      if (doc.data().login == true){
       var staadRef = db.collection('admin');
       var staadstaRef = staadRef.where('status', '==', 1).get()
      .then(snapshot => {
      snapshot.forEach(doc => {
       if (doc.data().status == 1){
         window.location.href = 'indexadmin.html';
         const namead = document.querySelector("#dropdownMenuadmin");
         db.collection("admin").where('id', '==', user).get().then(function (querySnapshot) {
           querySnapshot.forEach(function (doc) {
           swal("ยินดีต้อนรับ", doc.data().name, "success");
           namead.innerHTML += "&nbsp;" + doc.data().name
        });
       });
       }
      });
    })
    } else {
     swal({
       title: "ขออภัยไม่สามารถเข้าสู่ระบบได้",
       text: "คุณไม่มีสิทธิ์เข้าใช้งานของผู้ดูแลระบบ",
       icon: "warning",
       button: "ตกลง",
     });
   }
  } else {
    swal({
     title: "ขออภัยไม่สามารถเข้าสู่ระบบได้",
     text: "คุณไม่มีสิทธิ์เข้าใช้งานของผู้ดูแลระบบ",
     icon: "warning",
     button: "ตกลง",
  });
  }
});
})
}, function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Error : " + errorMessage );
});
}

function logout() {
  if(firebase.auth().currentUser) {
    firebase.auth().signOut();
     window.location.href = 'index.html';
  }
}
