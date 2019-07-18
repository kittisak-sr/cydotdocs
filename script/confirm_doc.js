const table = document.querySelector('#eventdata');
db.collection('uploadevent').where('status','==',1).get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    showconfirmevent(doc);
  });
});
function showconfirmevent(doc) {
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = doc.data().name;
  let btn = document.createElement('button');
  btn.setAttribute('class',('fa fa-eye btn btn-sm btn-primary '));
  btn.setAttribute('href',('#'))
  btn.setAttribute('data-id',doc.id);
  cell2.appendChild(btn);
  btn.addEventListener('click',(e) => {
    let id = e.target.getAttribute('data-id');
    nameev.innerHTML += "<textarea>" + doc.data().name + "</textarea>"
    one.innerHTML += "<a href ="+  doc.data().url + " target='_blank'> <button class='fa fa-eye btn btn-light'> แสดงรายละเอียด</button></a>"
    two.innerHTML += "<a href ="+  doc.data().url2 + " target='_blank'> <button class='fa fa-eye btn btn-light'> แสดงรายละเอียด</button></a>"
    three.innerHTML += "<a href ="+  doc.data().url3 + " target='_blank'> <button class='fa fa-eye btn btn-light'> แสดงรายละเอียด</button></a>"
    four.innerHTML += "<a href ="+  doc.data().url4 + " target='_blank'> <button class='fa fa-eye btn btn-light'> แสดงรายละเอียด</button></a>"
    five.innerHTML += "<a href ="+  doc.data().url5 + " target='_blank'> <button class='fa fa-eye btn btn-light'> แสดงรายละเอียด</button></a>"
  });
}
