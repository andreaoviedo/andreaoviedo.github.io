function printArray(label, arr, output) {
  output.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    output.innerHTML += `<p> ${label} ${i + 1}<br>${arr[i].join(", ")} </p>`;
    console.log(arr[i]);
  }
}

function divideArray(arr, amount, isNumberOfGroups) {
  let chunks = [],
    i = 0,
    n = arr.length;
  isNumberOfGroups ? (amount = n / amount) : amount;

  while (i < n) {
    chunks.push(arr.slice(i, (i += amount)));
  }
  return chunks;
}


      function startTimer() {
        document.getElementById("start").style.display = "none";
        document.getElementById("pause").style.display = "inline";
        minutes = document.getElementById("minutes").value;
        seconds = document.getElementById("seconds").value;

        if (!seconds) {
          seconds = 0;
        }
        if (!minutes) {
          minutes = 0;
        }
        time = parseInt(minutes) * 60 + parseInt(seconds) + 1;
        interval = setInterval(countdown, 1000);
      }

      function countdown() {
        if (time == 0) {
          clearInterval(interval);
          alert("Tiempo terminado");
        } else {
          time--;
          minutes = Math.floor(time / 60);
          seconds = time % 60;
          document.getElementById("timer").innerHTML =
            ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
        }
      }

      function pauseTimer() {
        clearInterval(interval);
        document.getElementById("continue").style.display = "inline";
        document.getElementById("pause").style.display = "none";
      }

      function continueTimer() {
        interval = setInterval(countdown, 1000);
        document.getElementById("continue").style.display = "none";
        document.getElementById("pause").style.display = "inline";
      }

      function resetTimer() {
        clearInterval(interval);
        document.getElementById("minutes").value = "";
        document.getElementById("seconds").value = "";
        document.getElementById("timer").innerHTML = "00:00";
        document.getElementById("continue").style.display = "none";
        document.getElementById("pause").style.display = "none";
        document.getElementById("start").style.display = "inline";
      }
      function restartTimer() {
        clearInterval(interval);
        startTimer();
      }

      function addTime() {
        var addedTime = parseInt(document.getElementById("timeToAdd").value);
        time += addedTime * 60;
        minutes = Math.floor(time / 60);
        seconds = time % 60;
        document.getElementById("timer").innerHTML =
          ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
      }