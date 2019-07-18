  const table = document.querySelector('#showMessage');
  db.collection('contact').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      showMessages(doc);
    });
  });

function showMessages(doc) {
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = doc.data().name;
  cell2.innerHTML = doc.data().phone;
  cell3.innerHTML = doc.data().email;
  cell4.innerHTML = doc.data().message;
}

function logout() {
  if(firebase.auth().currentUser) {
    firebase.auth().signOut();
     window.location.href = 'index.html';
  }
}
