const subForm = document.querySelector('form');
const input = document.querySelectorAll('input');

subForm.addEventListener('submit', function (e) {
  e.preventDefault();
  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `You are under weight ${bmi}`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `You are normal weight ${bmi}`;
    } else {
      results.innerHTML = `You are over weight ${bmi}`;
    }
  }
  input.forEach((input) => {
    input.value = '';
  });
});
