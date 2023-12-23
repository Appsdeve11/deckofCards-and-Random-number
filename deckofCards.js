function requestSingleCard() {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
      .then(response => response.json())
      .then(data => {
        const card = data.cards[0];
        console.log(`${card.value} of ${card.suit}`);
      })
      .catch(error => console.log(error));
  }
  
  
  function requestTwoCards() {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => response.json())
      .then(data => {
        const deckId = data.deck_id;
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
          .then(response => response.json())
          .then(data => {
            const cards = data.cards;
            cards.forEach(card => {
              console.log(`${card.value} of ${card.suit}`);
            });
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }
  
  // Function to create a new deck and draw cards on button click
  function drawCard() {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => response.json())
      .then(data => {
        const deckId = data.deck_id;
        const button = document.getElementById('draw-button');
        
        button.addEventListener('click', () => {
          fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
            .then(response => response.json())
            .then(data => {
              const card = data.cards[0];
              const cardDisplay = document.getElementById('card-display');
              cardDisplay.textContent = `${card.value} of ${card.suit}`;
              
              if (data.remaining === 0) {
                button.disabled = true;
              }
            })
            .catch(error => console.log(error));
        });
      })
      .catch(error => console.log(error));