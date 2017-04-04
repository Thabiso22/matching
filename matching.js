var input = document.querySelector("#inp");
var weekdays = document.querySelectorAll("#weekday");


input.addEventListener("change", function() {

  var date1 = document.querySelector("#date1");
  var date2 = document.querySelector("#date2");

        var day1 = new Date(date1.value);
        var day2 = new Date(date2.value);

        var getDate1 = day1.getDay();
        var getDate2 = day2.getDay();

        // removing any existing styling...
    for(var i=0; i<weekdays.length;i++) {9
      weekdays[i].classList.remove('colorMatch');
      weekdays[i].classList.remove('color1');
      weekdays[i].classList.remove('color2');

    }

    if(getDate1 === getDate2) {
      weekdays[getDate2].classList.add("colorMatch");
    }
    else{

       if (getDate1) {
         weekdays[getDate1].classList.add("color1");
       }

       if (getDate2){
         weekdays[getDate2].classList.add("color2");
       }
    }


});
