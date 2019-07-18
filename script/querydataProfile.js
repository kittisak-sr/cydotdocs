const formprofile = document.querySelector('#profileData');
db.collection('users').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    profileData(doc);
  });
});

function profileData(doc) {
      var name = document.getElementById("nameInput");
      var lastname = document.getElementById("lastnameInput");
      var bd = document.getElementById("bdInput");
      var collage = document.getElementById("collageInput");
      var degree = document.getElementById("degreeInput");
      var tel = document.getElementById("telInput");
      var email = document.getElementById("emailSignup");
      var password = document.getElementById("passwordSignup");
      const months = ["มกราคม", "กุมภาพันธ์", "มีนาคม","เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
      let d = new Date(doc.data().birthday);
      let formatted_date = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear()
      name.innerHTML = doc.data().name;
      lastname.innerHTML = doc.data().lastname;
      bd.innerHTML = formatted_date;
      collage.innerHTML = doc.data().collage;
      degree.innerHTML = doc.data().degree;
      tel.innerHTML = doc.data().tel;
      email.innerHTML = doc.data().email;
      password.innerHTML = doc.data().password;
}
