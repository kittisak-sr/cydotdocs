firebase.auth().onAuthStateChanged((user) => {
  user = firebase.auth().currentUser.uid;
  if (user) {
    db.collection("users").where('id', '==', user).get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
          document.getElementById("nameupdate").value = doc.data().name;
          document.getElementById("lastnameUpdate").value = doc.data().lastname;
          document.getElementById("bdUpdate").value = doc.data().birthday;
          document.getElementById("collageUpdate").value = doc.data().collage;
          document.getElementById("degreeUpdate").value = doc.data().degree;
          document.getElementById("telUpdate").value = doc.data().tel;
          document.getElementById("emailUpdate").value = doc.data().email;
          document.getElementById("passwordUpdate").value = doc.data().password;
        });
    });
    } else {
    }
});

function updatedataUser() {
  firebase.auth().onAuthStateChanged((user) => {
    user = firebase.auth().currentUser.uid;
    if (user) {
          var name = document.getElementById("nameupdate").value;
          var lastname = document.getElementById("lastnameUpdate").value;
          var bd = document.getElementById("bdUpdate").value;
          var collage = document.getElementById("collageUpdate").value;
          var degree = document.getElementById("degreeUpdate").value;
          var tel = document.getElementById("telUpdate").value;
          var email = document.getElementById("emailUpdate").value;
          var password = document.getElementById("passwordUpdate").value;
          db.collection("users").doc(user).set({
                name : name,
                lastname : lastname,
                birthday : bd,
                collage : collage,
                degree : degree,
                tel : tel,
                email : email,
                password : password,
                status : 2,
                login : true,
                id : user
            });
            swal({
              title : "แก้ไขข้อมูลสำเร็จ",
              text : "คุณได้แก้ไขข้อมูลส่วนตัวสำเร็จแล้ว",
              icon: "success",
              button: "ตกลง",
            });
    } else {
  }
  });
}
