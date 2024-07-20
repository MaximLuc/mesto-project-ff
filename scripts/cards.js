const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

document.addEventListener('DOMContentLoaded', function () {
const cardTemplate = document.querySelector('#card-template').content;
const cardContainer = document.querySelector('.places__list');

  function addCard(cardContent, deleteCardCallback){

    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__image').src = cardContent.link;
    cardElement.querySelector('.card__title').textContent = cardContent.name;

    cardContainer.append(cardElement);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', () => {
      deleteCardCallback(cardElement);
    });
  }

  function deleteCard(card){
    card.remove()
  }

  initialCards.forEach(cardContent => addCard(cardContent, deleteCard));
});