function doggo() {
  fetch('https://dog.ceo/api/breed/hound/images')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);

      for (var i = 0; i < 4; i++) {
        var dogImg = data.message[i];

        var card = document.createElement('div');
        var cardImg = document.createElement('div');
        var cardFig = document.createElement('figure');
        var figureImg = document.createElement('img');
        var cardContent = document.createElement('div');
        var dogName = document.createElement('h2');

        card.setAttribute('class', 'card column is-one-quarter');
        cardImg.setAttribute('class', 'card-image');
        cardFig.setAttribute('class', 'image is-4by3');
        figureImg.setAttribute('src', dogImg);
        figureImg.setAttribute('alt', 'dog Image');
        cardContent.setAttribute('class', 'card-content');
        dogName.textContent = 'Lucky';

        cardFig.append(figureImg);
        cardImg.append(cardFig);
        cardContent.append(dogName);
        card.append(cardImg, cardContent);
        document.getElementById('dog-cards').append(card);
      }
    });
}
doggo();
