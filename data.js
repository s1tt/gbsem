const getCards = function () {
  fetch('https://api.restful-api.dev/objects')
    .then(response => {
      return response.json();
    })
    .then(data => {
      createCards(data);
    });
};
getCards();

const createCards = function (data) {
  const content = document.querySelector('.content');
  for (let element of data) {
    const cardTemplate = document.querySelector('#card').content.cloneNode(true);
    const cardDescription = cardTemplate.querySelector('.card__description');
    cardTemplate.querySelector('.card__title-link').textContent = element.name;
    cardTemplate.querySelector('.card__id').textContent = 'ID товара: ' + element.id;

    if (!isFinite(element.data)) {
      for (let elementData in element.data) {
        const feature = document.createElement('p');
        feature.classList.add('card__feature');
        feature.textContent = `: ${element.data[elementData]}`;

        const featureKey = document.createElement('span');
        featureKey.textContent = elementData;
        featureKey.style.fontWeight = 700;
        feature.prepend(featureKey);

        cardDescription.append(feature);
      }
    }
    content.append(cardTemplate);
  }
};
