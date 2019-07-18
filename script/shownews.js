  db.collection("news").orderBy('dateevent' , 'desc').get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      let newsrow = document.querySelector('#newsrow');
      var url = doc.data().urlnews;
      const months = ["มกราคม", "กุมภาพันธ์", "มีนาคม","เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
      let d = new Date(doc.data().dateevent);
      let formatted_date = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear()
      newsrow.innerHTML += "<div class='col-md-4 mb-4'>" +
                                "<div class='card h-100'>"+
                                  "<img class='card-img-top' style='width:356px;height:230px;'  src='" + doc.data().urlnews + "' >"+
                                  "<hr>"+
                                  "<div class='card-body'>"+
                                      "<h2 class='card-title'>" + doc.data().nameevent + "</h2>"+
                                        "<div class='date'>" +
                                          "<a class='gad_btn' href='#'>" + doc.data().typeevent + "</a>"+
                                          "<a><i class='fa fa-calendar'></i> " + formatted_date + "</a>"+
                                          "<p class='card-text mb-auto'>" + doc.data().contentevent + "</a>"+
                                        "</div>" +
                                      "</div>" +
                                      "<div class='footer text-center'>"+
                                        "<div class='btn-group'>"+
                                          "<p><a href=" + doc.data().moreurl + "><button class='btn btn-outline-danger'> รายละเอียดเพิ่มเติม </button></a></p>" +
                                        "</div>"+
                                      "</div>"+
                                "</div>"+
                              "</div>";
    });
  });
