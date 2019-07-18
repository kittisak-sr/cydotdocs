var button = document.getElementById('inputGroupFile01')
var button2 = document.getElementById('inputGroupFile02')
var button3 = document.getElementById('inputGroupFile03')
var button4 = document.getElementById('imgInp01')
var button5 = document.getElementById('imgInp02')
upload = db.collection("uploadevent").doc();
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
      var nameac = document.getElementById('nameactivity').value;
      BlockGeeksCoin.addBlock(new Block(1, this.timestamp, { data: {nameac , url , user }}));
      upload.set({
          name: nameac,
          url : url,
          status : 0,
          idu : user,
          statusurl : 'ยังไม่ได้ตรวจสอบ',
          block : {
            node : JSON.stringify(BlockGeeksCoin)
          }
      });
    })
    .catch(console.error);
  });
button2.addEventListener('change', function(e) {
  const file2 = e.target.files[0];
  const filename2 = file2.name;
  const metadata2 = { contentType: file2.type };
  const uploadTask2 = storage.ref('paper/' + file2.name).put(file2 , metadata2);
    uploadTask2
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then((url) => {
      BlockGeeksCoin.addBlock(new Block(2, this.timestamp, { data: {filename2 , url , user }}));
      upload.update({
          url2 : url,
          statusurl2 : 'ยังไม่ได้ตรวจสอบ',
          block : {
            node : JSON.stringify(BlockGeeksCoin)
          }
      });
    })
    .catch(console.error);
});
button3.addEventListener('change', function(e) {
    const file3 = e.target.files[0];
    const filename3 = file3.name;
    const metadata3 = { contentType: file3.type };
    const uploadTask3 = storage.ref('paper/' + file3.name).put(file3 , metadata3);
      uploadTask3
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then((url) => {
        BlockGeeksCoin.addBlock(new Block(3, this.timestamp, { data: {filename3, url , user }}));
        upload.update({
            url3 : url,
            statusurl3 : 'ยังไม่ได้ตรวจสอบ',
            block : {
              node : JSON.stringify(BlockGeeksCoin)
            }
        });
      })
      .catch(console.error);
});
button4.addEventListener('change', function(e) {
  const file4 = e.target.files[0];
  const filename4 = file4.name;
  const metadata4 = { contentType: file4.type };
  const uploadTask4 = storage.ref('paper/' + file4.name).put(file4 , metadata4);
    uploadTask4
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then((url) => {
      BlockGeeksCoin.addBlock(new Block(4, this.timestamp, { data: {filename4, url, user }}));
      upload.update({
          url4 : url,
          statusurl4 : 'ยังไม่ได้ตรวจสอบ',
          block : {
            node : JSON.stringify(BlockGeeksCoin)
          }
      });
      })
      .catch(console.error);
});
button5.addEventListener('change', function(e) {
  const file5 = e.target.files[0];
  const filename5 = file5.name;
  const metadata5 = { contentType: file5.type };
  const uploadTask5 = storage.ref('paper/' + file5.name).put(file5 , metadata5);
    uploadTask5
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then((url) => {
      BlockGeeksCoin.addBlock(new Block(5, this.timestamp, { data: {filename5, url, user }}));
      console.log(JSON.stringify(BlockGeeksCoin));
      upload.update({
          url5 : url,
          statusurl5 : 'ยังไม่ได้ตรวจสอบ',
          block : {
            node : JSON.stringify(BlockGeeksCoin)
          }
      });
      })
      .catch(console.error);
});
}, function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Error : " + errorMessage );
});

function uploadEvent() {
      swal({
        title : "เสนอเอกสารจัดโครงการสำเร็จ",
        text: "กรุณารอการตรวจสอบเอกสารจากผู้ดูแลระบบ",
        icon: "success",
        button: "ยืนยัน",
      });
    }
function resetdocupload() {
    document.getElementById("blc").reset();
}
