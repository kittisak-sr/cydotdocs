const table = document.querySelector('#eventdata');
firebase.auth().onAuthStateChanged((user) => {
      user = firebase.auth().currentUser.uid;
      db.collection('uploadevent').where('idu','==', user).get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          if(doc.data().status == 1 || doc.data().status == 0) {
            showstatus(doc);
          } else if (doc.data().status == 2) {
            showedit(doc);
          }
        });
      });
function showstatus(doc) {
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = doc.data().name;
      let btn = document.createElement('button');
      btn.setAttribute('class',('fa fa-eye btn btn-sm btn-primary'));
      btn.setAttribute('href',('#'))
      btn.setAttribute('data-id',doc.id);
      cell2.appendChild(btn);
      btn.addEventListener('click',(e) => {
        let id = e.target.getAttribute('data-id');
        nameev.innerHTML += doc.data().name
        one.innerHTML += doc.data().statusurl
        two.innerHTML += doc.data().statusurl2
        three.innerHTML += doc.data().statusurl3
        four.innerHTML += doc.data().statusurl4
        five.innerHTML += doc.data().statusurl5
    })
}
function showedit(doc) {
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = doc.data().name;
    let btn = document.createElement('button');
    btn.setAttribute('class',('fa fa-eye btn btn-sm btn-primary'));
    btn.setAttribute('href',('#'))
    btn.setAttribute('data-id',doc.id);
    cell2.appendChild(btn);
  btn.addEventListener('click',(e) => {
    let id = e.target.getAttribute('data-id');
    nameev.innerHTML += doc.data().name
    one.innerHTML += doc.data().statusurl
    two.innerHTML += doc.data().statusurl2
    three.innerHTML += doc.data().statusurl3
    four.innerHTML += doc.data().statusurl4
    five.innerHTML += doc.data().statusurl5
    let btn = document.createElement('button');
    btn.textContent=' แก้ไขเอกสาร';
    btn.setAttribute('class',('fa fa-pencil-square-o btn btn-danger'));
    btn.setAttribute('data-id',doc.id);
    btn.setAttribute('data-toggle',('modal'));
    btn.setAttribute('data-target',('#modaledit'));
    bcb.appendChild(btn);
    btn.addEventListener('click',(e) => {
      let id = e.target.getAttribute('data-id');
      nameedi.innerHTML += doc.data().name;
      var button = document.getElementById('inputGroupFile01')
      var button2 = document.getElementById('inputGroupFile02')
      var button3 = document.getElementById('inputGroupFile03')
      var button4 = document.getElementById('imgInp01')
      var button5 = document.getElementById('imgInp02')
      upload = db.collection("uploadevent").doc(id);
      firebase.auth().onAuthStateChanged((user) => {
        user = firebase.auth().currentUser.uid;
        button.addEventListener('change', function(e) {
          const file = e.target.files[0];
          const filename = file.name;
          const metadata = { contentType: file.type };
          const uploadTask = storage.ref('paper/' + file.name).put(file , metadata);
          uploadTask
          .then(snapshot => snapshot.ref.getDownloadURL())
            .then((url) => {
            var nameac = document.getElementById('nameedi').value;
            BlockGeeksCoin.addBlock(new Block(6, this.timestamp, { data: {nameac , url, user }}));
            upload.set({
              name: nameac,
              url : url,
              status : 0,
              idu : user,
              statusurl : 'ยังไม่ได้ตรวจสอบ',
              blockedit : {
                node : JSON.stringify(BlockGeeksCoin)
              }
              });
            })
            .catch(console.error);
            })
            }, function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert("Error : " + errorMessage );
          });
        button2.addEventListener('change', function(e) {
          const file2 = e.target.files[0];
          const filename2 = file2.name;
          const metadata2 = { contentType: file2.type };
          const uploadTask2 = storage.ref('paper/' + file2.name).put(file2 , metadata2);
          uploadTask2
          .then(snapshot => snapshot.ref.getDownloadURL())
            .then((url) => {
              BlockGeeksCoin.addBlock(new Block(7, this.timestamp, { data: {filename2, url, user }}));
              upload.update({
                url2 : url,
                statusurl2 : 'ยังไม่ได้ตรวจสอบ',
                blockedit : {
                  node : JSON.stringify(BlockGeeksCoin)
                }
              });
            })
            .catch(console.error);
            })
        button3.addEventListener('change', function(e) {
          const file3 = e.target.files[0];
          const filename3 = file3.name;
          const metadata3 = { contentType: file3.type };
          const uploadTask3 = storage.ref('paper/' + file3.name).put(file3 , metadata3);
          uploadTask3
          .then(snapshot => snapshot.ref.getDownloadURL())
            .then((url) => {
              BlockGeeksCoin.addBlock(new Block(8, this.timestamp, { data: {filename3, url, user }}));
              upload.update({
                url3 : url,
                statusurl3 : 'ยังไม่ได้ตรวจสอบ',
                blockedit : {
                  node : JSON.stringify(BlockGeeksCoin)
                }
              });
            })
            .catch(console.error);
            })
      button4.addEventListener('change', function(e) {
        const file4 = e.target.files[0];
        const filename4 = file4.name;
        const metadata4 = { contentType: file4.type };
        const uploadTask4 = storage.ref('paper/' + file4.name).put(file4 , metadata4);
        uploadTask4
        .then(snapshot => snapshot.ref.getDownloadURL())
          .then((url) => {
            BlockGeeksCoin.addBlock(new Block(9, this.timestamp, { data: {filename4, url, user }}));
            upload.update({
              url4 : url,
              statusurl4 : 'ยังไม่ได้ตรวจสอบ',
              blockedit : {
                node : JSON.stringify(BlockGeeksCoin)
              }
            });
          })
          .catch(console.error);
          })
       button5.addEventListener('change', function(e) {
        const file5 = e.target.files[0];
        const filename5 = file5.name;
        const metadata5 = { contentType: file5.type };
        const uploadTask5 = storage.ref('paper/' + file5.name).put(file5 , metadata5);
        uploadTask5
        .then(snapshot => snapshot.ref.getDownloadURL())
          .then((url) => {
            BlockGeeksCoin.addBlock(new Block(10, this.timestamp, { data: {filename5, url, user }}));
            console.log(JSON.stringify(BlockGeeksCoin));
            upload.update({
              url5 : url,
              statusurl5 : 'ยังไม่ได้ตรวจสอบ',
              blockedit : {
                node : JSON.stringify(BlockGeeksCoin)
              }
            });
          })
          .catch(console.error);
          })
        let btnx = document.createElement('button');
        btnx.textContent=' ยืนยันการแก้ไข';
        btnx.setAttribute('class',('fa fa-check-square-o btn btn-success'));
        btnx.setAttribute('data-id',doc.id);
        sbc.appendChild(btnx);
        btnx.addEventListener('click',(e) => {
          swal({
            title : "ยืนยันการแก้ไขเอกสารโครงการ",
            text: "คุณการทำการยืนยันการแก้ไขโครงการสำเร็จ",
            icon: "success",
            button: "ยืนยัน",
          });
        })
      })
    })
  }
}, function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Error : " + errorMessage );
});
