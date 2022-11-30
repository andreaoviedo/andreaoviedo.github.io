var i = 0;
var counter = document.getElementById("counter");

var down = document.getElementById("GFG_DOWN");

function GetRandomElement(arrayname) {
  return arrayname[Math.floor(Math.random() * arrayname.length)];
}

function printArray() {
  i++;
  let studentcount = 0;
  counter.innerHTML = i;
  let estudiantes = document.getElementById("inputstudents").value.split("\n");
  let firstoption = document.getElementById("firstoption").value.split("\n");
  let secondoption = document.getElementById("secondoption").value.split("\n");
  //.value.split("\n");
  down.innerHTML = "<ol>";
  estudiantes.sort();
  estudiantes.forEach((student) => {
    studentcount++;
    down.innerHTML +=
      studentcount +
      ". " +
      student +
      ": " +
      GetRandomElement(firstoption) +
      " + " +
      GetRandomElement(secondoption) +
      " <br> ";
  });
  down.innerHTML += "</ol>";
}
