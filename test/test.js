
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => testDisplay.innerHTML = JSON.stringify(data[0]));
console.log("udpated");
