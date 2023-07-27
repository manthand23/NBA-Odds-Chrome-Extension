async function fetchData() {
    const url =
      'https://nba-player-props-odds.p.rapidapi.com/get-player-odds-for-event?eventId=22200&bookieId=1%3A4%3A5%3A6%3A7%3A8%3A9%3A10&marketId=1%3A2%3A3%3A4%3A5%3A6&decimal=true&best=true';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5e9907428emsh8db3c0499b84d67p1a9af7jsndea83c839c0e',
        'X-RapidAPI-Host': 'nba-player-props-odds.p.rapidapi.com',
      },
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Parse the response as JSON
      displayPlayerOdds(result); // Call the function to display the fetched data
    } catch (error) {
      console.error(error);
    }
  }
  
  function displayPlayerOdds(data) {
    const playerOddsContainer = document.getElementById('player-odds-container');
    
    // Create a new <pre> element to preserve formatting and indentation
    const preElement = document.createElement('pre');
    preElement.textContent = JSON.stringify(data, null, 2); // Format the JSON with 2-space indentation
    playerOddsContainer.appendChild(preElement);
  }
  
  document.addEventListener('DOMContentLoaded', fetchData);
  