fetch('http://numbersapi.com/42?json&amount=4')
  .then(response => response.json())
  .then(data => {
    
    const facts = Object.values(data);

   
    const factList = document.getElementById('fact-list');
    facts.forEach(fact => {
      const listItem = document.createElement('li');
      listItem.textContent = fact;
      factList.appendChild(listItem);
    });
  })
  .catch(error => console.log(error));