const table = document.querySelector('#datatabel');
db.collection('documentdownload').orderBy('dateupload','desc').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    showDownload(doc);
  });
});
function showDownload(doc) {
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    const months = ["มกราคม", "กุมภาพันธ์", "มีนาคม","เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
    let d = new Date(doc.data().dateupload);
    let formatted_date = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear()
    cell1.innerHTML = doc.data().namedoc;
    cell2.innerHTML = formatted_date;
    cell3.innerHTML = "<a href ="+  doc.data().urld + " target='_blank'> <button class='fa fa-download btn btn-success'></button></a>"
}
