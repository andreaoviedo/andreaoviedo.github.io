function createTeams(input, output, inputIsNumberOfMembers) {
  let estudiantes = document.getElementById("inputstudents").value.split("\n");
  output = document.getElementById(output);
  input = parseInt(document.getElementById(input).value);
  let shuffle = estudiantes.sort(() => Math.random() - 0.5);
  if (inputIsNumberOfMembers) {
    teams = divideArray(shuffle, input);
  } else {
    teams = divideArray(shuffle, input, true);
  }
  printArray("Equipo", teams, output);
}
