  const table1 = document.querySelector('#tbaddadmin');
  db.collection('admin').where('status','==',0).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      showData1(doc);
    });
  });
  function showData1(doc) {
      var row = table1.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = doc.data().name;
      cell2.innerHTML = doc.data().lastname;
      cell3.innerHTML = doc.data().email;
      let btn = document.createElement('button');
      btn.textContent='เพิ่ม';
      btn.setAttribute('class',('btn btn-success'));
      btn.setAttribute('data-id',doc.id);
      cell4.appendChild(btn);
      btn.addEventListener('click',(e) => {
        let id = e.target.getAttribute('data-id');
        swal({
          title : "ยืนยันคำขอ",
          text : "ยืนยันคำขอสมัครสมาชิกสำเร็จ",
          icon: "success",
          button: "ตกลง",
        });
        db.collection('admin').doc(id).update({status : 2},{login : true});
        });
      let but = document.createElement('button');
      but.textContent='ลบ';
      but.setAttribute('class',('btn btn-danger'));
      but.setAttribute('data-id',doc.id);
      cell5.appendChild(but);
      but.addEventListener('click',(e) => {
        let id = e.target.getAttribute('data-id');
        swal({
          title : "ปฏิเสธคำขอ",
          text : "ปฎิเสธคำขอและทำการลบสมาชิกสำเร็จ",
          icon: "success",
          button: "ตกลง",
        });
        db.collection('admin').doc(id).delete();
      })
  }
  function logout() {
    if(firebase.auth().currentUser) {
      firebase.auth().signOut();
       window.location.href = 'index.html';
    }
  }
