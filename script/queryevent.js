const table = document.querySelector('#eventdata');
db.collection('uploadevent').where('status','==',0).get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    showevent(doc);
  });
});
function showevent(doc) {
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = doc.data().name;
  let btn = document.createElement('button');
  btn.setAttribute('class',('fa fa-eye btn btn-primary'));
  btn.setAttribute('href',('#'))
  btn.setAttribute('data-id',doc.id);
  cell2.appendChild(btn);
  btn.addEventListener('click',(e) => {
    let id = e.target.getAttribute('data-id');
    nameev.innerHTML += "<textarea>" + doc.data().name + "</textarea>"
    one.innerHTML += "<a href ="+  doc.data().url + " target='_blank'> <button class='fa fa-eye btn btn-light'> ตรวจสอบ</button> </a>"
    two.innerHTML += "<a href ="+  doc.data().url2 + " target='_blank'> <button class='fa fa-eye btn btn-light'> ตรวจสอบ</button></a>"
    three.innerHTML += "<a href ="+  doc.data().url3 + " target='_blank'> <button class='fa fa-eye btn btn-light'> ตรวจสอบ</button></a>"
    four.innerHTML += "<a href ="+  doc.data().url4 + " target='_blank'> <button class='fa fa-eye btn btn-light'> ตรวจสอบ</button></a>"
    five.innerHTML += "<a href ="+  doc.data().url5 + " target='_blank'> <button class='fa fa-eye btn btn-light'> ตรวจสอบ</button></a>"
    let btn1 = document.createElement('button');
    btn1.textContent=' ยืนยัน';
    btn1.setAttribute('class',('fa fa-check btn btn-success'));
    btn1.setAttribute('href',('#'))
    btn1.setAttribute('data-id',doc.id);
    btn1.setAttribute('data-toggle',('modal'));
    btn1.setAttribute('data-target',('#modalconfirm'));
    abc.appendChild(btn1);
    btn1.addEventListener('click',(e) => {
      let id = e.target.getAttribute('data-id');
      namecon.innerHTML += doc.data().name;
      let btnc = document.createElement('button');
      btnc.textContent=' อนุมัติโครงการ';
      btnc.setAttribute('class',('fa fa-check btn btn-success'));
      btnc.setAttribute('data-id',doc.id);
      fg.appendChild(btnc);
      btnc.addEventListener('click',(e) => {
        var notecon = document.getElementById("notecon").value;
        db.collection('uploadevent').doc(id).update({
          notecon : notecon,
          status : 1,
          statusurl : 'ผ่าน',
          statusurl2 : 'ผ่าน',
          statusurl3 : 'ผ่าน',
          statusurl4 : 'ผ่าน',
          statusurl5 : 'ผ่าน',
        });
        confirmdocs();
        });
    });
    let btn2 = document.createElement('button');
    btn2.textContent=' แก้ไข';
    btn2.setAttribute('class',('fa fa-pencil-square-o btn btn-danger'));
    btn2.setAttribute('data-id',doc.id);
    btn2.setAttribute('data-toggle',('modal'));
    btn2.setAttribute('data-target',('#modaledit'));
    ed.appendChild(btn2);
    btn2.addEventListener('click',(e) => {
      let id = e.target.getAttribute('data-id');
      nameedi.innerHTML += doc.data().name;
      let btne = document.createElement('button');
      btne.textContent='  ยืนยันการแก้ไขเอกสารโครงการ';
      btne.setAttribute('class',('fa fa-pencil-square-o btn btn-danger'));
      btne.setAttribute('data-id',doc.id);
      ch.appendChild(btne);
      btne.addEventListener('click',(e) => {
        var sta = document.getElementById("sta").value;
        var sta2 = document.getElementById("sta2").value;
        var sta3 = document.getElementById("sta3").value;
        var sta4 = document.getElementById("sta4").value;
        var sta5 = document.getElementById("sta5").value;
        var noteedi = document.getElementById("noteedi").value;
        db.collection('uploadevent').doc(id).update({
          noteedi : noteedi,
          status : 2,
          statusurl : sta,
          statusurl2 : sta2,
          statusurl3 : sta3,
          statusurl4 : sta4,
          statusurl5 : sta5,
        });
        editdocs();
        });
    });
  });
}

function confirmdocs() {
  swal({
    text: "อนุมัติโครงการสำเร็จ",
    icon: "success",
    button: "ยืนยัน",
  });
}

function editdocs() {
  swal({
    text: "ยืนยันการแก้ไขโครงการสำเร็จ",
    icon: "success",
    button: "ยืนยัน",
  });
}

function reload() {
  window.location.reload();
}
