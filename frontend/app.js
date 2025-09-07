document.getElementById('statForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const region = document.getElementById('region').value;
  const population = document.getElementById('population').value;

  const response = await fetch('http://localhost:8080/api/stats', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ region, population })
  });

  const result = await response.json();
  document.getElementById('response').innerText = `Saved: ${result.region} - ${result.population}`;
});
