var button = document.getElementById('inputImgEvent');
button.addEventListener('change', function(e) {
  const file = e.target.files[0];
  const filename = file.name;
  const metadata = { contentType: file.type };
  const uploadTask = storage.ref('news/' + file.name).put(file , metadata);
  uploadTask
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then((url) => {
    var name = document.getElementById("nameEvent").value;
    var type = document.getElementById("typeEvent").value;
    var date = document.getElementById("dnEvent").value;
    var content = document.getElementById("contentEvent").value;
    var more = document.getElementById("moreurl").value;
    db.collection("news").doc().set({
              nameevent : name,
              typeevent : type,
              dateevent : date,
              contentevent : content,
              moreurl : more,
              urlnews : url
          });
  })
  .catch(console.error);
  })

function addeventData() {
  swal({
    title: "ประชาสัมพันธ์สำเร็จ",
    text: "สามารถติดตามข่าวสารได้จากหน้ากิจกรรม",
    icon: "success",
    button: "ตกลง",
  });
}

function resetDatanews() {
    document.getElementById("resetnewsForm").reset();
}
