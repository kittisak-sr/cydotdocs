function addmemberData() {
  var name = document.getElementById("nameInput").value;
  var lastname = document.getElementById("lastnameInput").value;
  var bd = document.getElementById("bdInput").value;
  var collage = document.getElementById("collageInput").value;
  var degree = document.getElementById("degreeInput").value;
  var tel = document.getElementById("telInput").value;
  var email = document.getElementById("emailSignup").value;
  var password = document.getElementById("passwordSignup").value;
  var user = null;
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function(authUser) {
    var uid = authUser.user["uid"];
    db.collection("users").doc(uid).set({
        name : name,
        lastname : lastname,
        birthday : bd,
        collage : collage,
        degree : degree,
        tel : tel,
        email : email,
        password : password,
        id : uid,
        login : true,
        status : 2
      });
    swal({
        title: "เพิ่มสมาชิกสำเร็จ",
        text: "คุณได้ทำการเพิ่มสมาชิกสำเร็จ",
        icon: "success",
        button: "ตกลง",
      });
    }, function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
    if(user != null) {
    }
}

function signUp() {
  var name = document.getElementById("nameInput").value;
  var lastname = document.getElementById("lastnameInput").value;
  var bd = document.getElementById("bdInput").value;
  var collage = document.getElementById("collageInput").value;
  var degree = document.getElementById("degreeInput").value;
  var tel = document.getElementById("telInput").value;
  var email = document.getElementById("emailSignup").value;
  var password = document.getElementById("passwordSignup").value;
  var user = null;
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function(authUser) {
    var uid = authUser.user["uid"];
    db.collection("users").doc(uid).set({
        name : name,
        lastname : lastname,
        birthday : bd,
        collage : collage,
        degree : degree,
        tel : tel,
        email : email,
        password : password,
        id : uid,
        login : false,
        status : 0
      });
      swal({
          title: "สมัครสมาชิกสำเร็จ",
          text: "กรุณารอการยืนยันการสมัครสมาชิกจากผู้ดูแลระบบ",
          icon: "success",
          button: "ตกลง",
        });
    }, function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
    if(user != null) {
    }
}

function resetDataMember() {
    document.getElementById("addmemberForm").reset();
}
