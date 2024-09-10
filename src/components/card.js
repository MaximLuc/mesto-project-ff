
function isLikedCard(cardLikes, userId) {
  return cardLikes.likes.some(obj => obj._id === userId);
}

export function createCard(cardContent, deleteCardCallback,likeCardCallback, openImagePopapCallback,userId){
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__image').src = cardContent.link;
    cardElement.querySelector('.card__image').alt = cardContent.name;
    cardElement.querySelector('.card__title').textContent = cardContent.name;
    const cardLikes = cardElement.querySelector('.card__like-count')
    cardLikes.textContent = cardContent.likes.length;
    const cardImage =cardElement.querySelector('.card__image')
    const likeButton = cardElement.querySelector('.card__like-button')
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const cardId = cardContent._id;
    if(userId !==cardContent.owner._id){
      deleteButton.style.display = 'none';
    }
    if(isLikedCard(cardContent,userId) ==true){

      likeButton.classList.add('card__like-button_is-active')
    }
    
    deleteButton.addEventListener('click', () => {
      deleteCardCallback(cardId)
        .then(() => {
          cardElement.remove()
        })
        .catch(error => {
          console.error('Произошла ошибка при удалении карточеки:', error);
        });
    });

    likeButton.addEventListener('click', () => {
      if (!likeButton.classList.contains('card__like-button_is-active')) {
        likeCardCallback(cardId, 'PUT')
          .then((arrLike) => {
            likeButton.classList.add('card__like-button_is-active');
            cardLikes.textContent = arrLike.likes.length;

          })
          .catch((error) => {
            console.error('Ошибка при добавлении лайка:', error);
          });
      } else {
        likeCardCallback(cardId, 'DELETE')
          .then((arrLike) => {
            likeButton.classList.remove('card__like-button_is-active');
            cardLikes.textContent = arrLike.likes.length;

          })
          .catch((error) => {
            console.error('Ошибка при удалении лайка:', error);
          });
      }
    });

    cardImage.addEventListener('click',()=>{

      openImagePopapCallback(cardElement)
    })

    
    return cardElement;
}
