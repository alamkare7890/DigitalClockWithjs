setInterval(function () {
  const myDate = new Date();
  document.querySelector('#clock').innerHTML = myDate.toLocaleTimeString();
}, 1000);
