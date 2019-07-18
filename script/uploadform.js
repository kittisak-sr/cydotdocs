var button = document.getElementById('inputGroupFile01');
button.addEventListener('change', function(e) {
    const file = e.target.files[0];
    const filename = file.name;
    const metadata = { contentType: file.type };
    const uploadTask = storage.ref('paperdownload/' + file.name).put(file , metadata);
    uploadTask
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then((url) => {
      var name = document.getElementById("namedocupload").value;
      var date = document.getElementById("datedocupload").value;
    db.collection("documentdownload").doc().set({
      namedoc : name,
      dateupload : date,
      urld : url
    });
   }).catch(console.error);
  })

function uploadDoc() {
  swal({
    title : "อัพโหลดเอกสารสำเร็จ",
    text: "คุณได้ทำการอัพโหลดเอกสารสำเร็จ",
    icon: "success",
    button: "ยืนยัน",
  });
}

function resetdocupload() {
    document.getElementById("resetdocForm").reset();
}
