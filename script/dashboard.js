var countuserrequest = document.getElementById("countuserrequest") ;
db.collection("users").where("status", "==", 0).onSnapshot(function(querySnapshot){
        var sum = 0;
        var doo = 1;
    querySnapshot.forEach(function(doc){
        sum += doo;
    });
    countuserrequest.innerHTML =  sum + " " + "คำขอ";
});

var countuser = document.getElementById("countuser") ;
db.collection("users").where("status", "==", 2).onSnapshot(function(querySnapshot){
        var sum2 = 0;
        var doo2 = 1;
      querySnapshot.forEach(function(doc){
          sum2 += doo2;
      });
      countuser.innerHTML = sum2 + " " + "ผู้ใช้งาน";
  });

  var countdoc = document.getElementById("countdoc") ;
  db.collection("documentdownload").onSnapshot(function(querySnapshot){
          var sum3 = 0;
          var doo3 = 1;
        querySnapshot.forEach(function(doc){
            sum3 += doo3;
        });
        countdoc.innerHTML = sum3 + " " + "เอกสาร";
    });

  var countmes = document.getElementById("countmes") ;
  db.collection("contact").onSnapshot(function(querySnapshot){
          var sum4 = 0;
          var doo4 = 1;
        querySnapshot.forEach(function(doc){
            sum4 += doo4;
        });
        countmes.innerHTML = sum4 + " " + "ข้อความ";
    });

    var eventrequest = document.getElementById("eventrequest") ;
    db.collection("uploadevent").where("status" , "==" , 0).onSnapshot(function(querySnapshot){
            var sum5 = 0;
            var doo5 = 1;
          querySnapshot.forEach(function(doc){
              sum5 += doo5;
          });
          eventrequest.innerHTML = sum5 + " " + "คำขอ";
      });


      var countad = document.getElementById("countadmin") ;
      db.collection("admin").where("status" , "==" , 1).onSnapshot(function(querySnapshot){
              var sum6 = 0;
              var doo6 = 1;
            querySnapshot.forEach(function(doc){
                sum6 += doo6;
            });
            countad.innerHTML = sum6 + " " + "ผู้ดูแลระบบ";
        });

        var countnews = document.getElementById("countnews") ;
        db.collection("news").onSnapshot(function(querySnapshot){
                var sum7 = 0;
                var doo7 = 1;
              querySnapshot.forEach(function(doc){
                  sum7 += doo7;
              });
              countnews.innerHTML = sum7 + " " + "ข่าวสาร";
          });

          var countcontf = document.getElementById("countconf") ;
          db.collection("uploadevent").where("status" , "==" , 1).onSnapshot(function(querySnapshot){
                  var sum8 = 0;
                  var doo8 = 1;
                querySnapshot.forEach(function(doc){
                    sum8 += doo8;
                });
                countconf.innerHTML = sum8 + " " + "อนุมัติกิจกรรม";
            });
