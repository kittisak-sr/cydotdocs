function resertDataAdmin() {
    document.getElementById("addadminForm").reset();
}

function addAdminData() {
      var name = document.getElementById("nameInput").value;
      var lastname = document.getElementById("lastnameInput").value;
      var tel = document.getElementById("telInput").value;
      var email = document.getElementById("emailSignupadmin").value;
      var password = document.getElementById("passwordSignupadmin").value;
      var user = null;
firebase.auth().createUserWithEmailAndPassword(email, password).then(function(authUser) {
      var uid = authUser.user["uid"];
      db.collection("admin").doc(uid).set({
          name : name,
          lastname : lastname,
          tel : tel,
          email : email,
          password : password,
          id : uid,
          login : true,
          status : 1
      });
      swal({
          title: "เพิ่มผู้ดูแลระบบสำหรเ็จ",
          text: "คุณได้ทำการเพิ่มผู้ดูแลระบบสำเร็จ",
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
