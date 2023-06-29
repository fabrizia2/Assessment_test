const fetchJokeBtn = document.getElementById('fetch-joke-btn');
const jokeSetupText = document.querySelector('.joke-setup-text');
const jokeDeliveryText = document.querySelector('.joke-delivery-text');
const jokeError = document.getElementById('joke-error');

fetchJokeBtn.addEventListener('click', () => {
  const apiKey = '59dbf27619msh388463aa4f4bb12p15f701jsn3c520ba4720c';
  const apiUrl = 'https://jokeapi-v2.p.rapidapi.com/joke/Any';

  fetch(apiUrl, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        jokeSetupText.textContent = '';
        jokeDeliveryText.textContent = '';
        jokeError.textContent = 'Failed to fetch joke.';
      } else if (data.type === 'single') {
        jokeSetupText.textContent = '';
        jokeDeliveryText.textContent = data.joke;
        jokeError.textContent = '';
      } else if (data.type === 'twopart') {
        jokeSetupText.textContent = data.setup;
        jokeDeliveryText.textContent = data.delivery;
        jokeError.textContent = '';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      jokeSetupText.textContent = '';
      jokeDeliveryText.textContent = '';
      jokeError.textContent = 'Failed to fetch joke.';
    });
});