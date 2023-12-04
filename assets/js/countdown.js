var endDate = "12/30/2023";  // format mm/dd/yyyy

(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  var dateArray = endDate.split("/");

  // Create a new Date object (months are zero-based)
  var birthday = new Date(dateArray[2], dateArray[0] - 1, dateArray[1]);

  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = String(Math.floor(distance / (day))).padStart(2, '0'),
          document.getElementById("hours").innerText = String(Math.floor((distance % (day)) / (hour))).padStart(2, '0'),
          document.getElementById("minutes").innerText = String(Math.floor((distance % (hour)) / (minute))).padStart(2, '0'),
          document.getElementById("seconds").innerText = String(Math.floor((distance % (minute)) / second)).padStart(2, '0');

        //do something later when date is reached
        if (distance < 0) {
          // document.getElementById("headline").innerText = "It's my birthday!";
          // document.getElementById("countdown").style.display = "none";
          // document.getElementById("content").style.display = "block";
          document.getElementById("days").innerText = "00";
          document.getElementById("hours").innerText = "00";
          document.getElementById("minutes").innerText = "00";
          document.getElementById("seconds").innerText = "00";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());
