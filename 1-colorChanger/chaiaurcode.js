const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

// button.forEach((item) => {
//   console.log(item);
//   item.addEventListener('click', function (e) {
//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'white') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }
//   });
// });
button.forEach((item) => {
  item.addEventListener('click', function (e) {
    body.style.backgroundColor = e.target.id;
  });
});
