
document.addEventListener('DOMContentLoaded', function () {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardContainer = document.querySelector('.places__list');
    
      function createCard(cardContent, deleteCardCallback){
    
        const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
        cardElement.querySelector('.card__image').src = cardContent.link;
        cardElement.querySelector('.card__image').alt = cardContent.name;
        cardElement.querySelector('.card__title').textContent = cardContent.name;
    
        const deleteButton = cardElement.querySelector('.card__delete-button');
        deleteButton.addEventListener('click', () => {
          deleteCardCallback(cardElement);
        });
        
        return cardElement;
      }
    
      function deleteCard(card){
        card.remove()
      }
    
    initialCards.forEach(cardContent => {
        const cardElement = createCard(cardContent, deleteCard);
        cardContainer.append(cardElement);
      });
    });