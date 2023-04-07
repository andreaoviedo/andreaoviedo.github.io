document.getElementById("pause").style.display = "none";
document.getElementById("restart").style.display = "none";
document.getElementById("addTimeBlock").style.display = "none";
document.getElementById("reset").style.display = "none";
document.getElementById("continue").style.display = "none";
var interval;
var minutes = 0;
var seconds = 0;
var time;
let = document.getElementById("end");
var audio = new Audio("waves.mp3");
end.style.display = "none";

function startTimer() {
    audio.pause();
    end.style.display = "none";
    document.getElementById("start").style.display = "none";
    document.getElementById("continue").style.display = "none";
    document.getElementById("pause").style.display = "inline";
    document.getElementById("restart").style.display = "inline";
    document.getElementById("addTimeBlock").style.display = "block";
    document.getElementById("reset").style.display = "inline";
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
      
        audio.play();
      end.style.display = "block";
      document.getElementById("addTimeBlock").style.display = "none";
      document.getElementById("pause").style.display = "none";
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
    audio.pause();
    document.getElementById("addTimeBlock").style.display = "none";
    clearInterval(interval);
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
    document.getElementById("timer").innerHTML = "00:00";
    document.getElementById("continue").style.display = "none";
    document.getElementById("pause").style.display = "none";
    document.getElementById("start").style.display = "inline";
    document.getElementById("restart").style.display = "none";
    end.style.display = "none";
  }
  function restartTimer() {
    audio.pause();
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