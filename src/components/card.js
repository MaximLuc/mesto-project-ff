

export function createCard(cardContent, deleteCardCallback,likeCardCallback, openImagePopapCallback){
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__image').src = cardContent.link;
    cardElement.querySelector('.card__image').alt = cardContent.name;
    cardElement.querySelector('.card__title').textContent = cardContent.name;
    const cardImage =cardElement.querySelector('.card__image')

    const likeButton = cardElement.querySelector('.card__like-button')
    const deleteButton = cardElement.querySelector('.card__delete-button');

    deleteButton.addEventListener('click', () => {
      deleteCardCallback(cardElement);
    });

    likeButton.addEventListener('click',()=>{
      likeCardCallback(likeButton)
    })

    cardImage.addEventListener('click',()=>{

      openImagePopapCallback(cardElement)
    })

    
    return cardElement;
}

export function deleteCard(card){
    card.remove()
}

export function likeCard(target){
    target.classList.toggle('card__like-button_is-active')
  }