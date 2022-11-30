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
