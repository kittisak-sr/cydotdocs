function contactData() {
    var name = document.getElementById("nameContact").value;
    var phone = document.getElementById("phoneContact").value;
    var email = document.getElementById("emailContact").value;
    var message = document.getElementById("messageContact").value;
    db.collection("contact").doc().set({
        name: name,
        phone : phone,
        email : email,
        message : message,
    })
    .then(function() {
      swal({
        title: "ส่งข้อความติดต่อสำเร็จ",
        icon: "success",
        button: "ตกลง",
      });
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
}
