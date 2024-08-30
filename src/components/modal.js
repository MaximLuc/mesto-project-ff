
import {formAddNewCard} from '../../scripts/index.js'
import { createCard, deleteCard, likeCard} from './card.js';

export function closePopup(target){
    target.classList.remove('popup_is-opened');
    clearFeald()
}

function clearFeald(){
    const namePlace = formAddNewCard.querySelector(".popup__input_type_card-name")
    const inputURL =formAddNewCard.querySelector('.popup__input_type_url')
    namePlace.value =''
    inputURL.value = ''
}

export function openPopup(target,closeButtonCallback){

    function handleCloseButtonClick() {
      closeButtonCallback(target);
      popupCloseButton.removeEventListener('click', handleCloseButtonClick); 
      target.removeEventListener('click', handleOverlayClick); 
    }

    function handleOverlayClick(event) {
      if (event.target === target) { 
          closeButtonCallback(target);
          target.removeEventListener('click', handleOverlayClick);
      }
    }

    function handleCloseEscapePress(event) {
      if (event.key === 'Escape') { 
          closeButtonCallback(target);
          document.removeEventListener('keydown', handleCloseEscapePress);
      }
    }

    target.classList.add('popup_is-opened');

    const popupCloseButton = target.querySelector('.popup__close');

    document.addEventListener('keydown', handleCloseEscapePress);
    target.addEventListener('click', handleOverlayClick);
    popupCloseButton.addEventListener('click', handleCloseButtonClick);

}


export function openImagePopap(target){
    const imagePopupTemplate = document.querySelector('.popup_type_image')
    const popupImage =imagePopupTemplate.querySelector('.popup__image') 
    const popupCaption =imagePopupTemplate.querySelector('.popup__caption')
    const popupImageButton = target.querySelector('.card__image')
  
    popupImage.src = popupImageButton.src
    popupCaption.alt = target.querySelector('.card__image').alt 
    popupCaption.textContent =target.querySelector('.card__title').textContent
  
    openPopup(imagePopupTemplate,closePopup)
  
}

export function handleFormAddCardSubmit(evt,cardContainer,popupNewCard){
    evt.preventDefault();
    const namePlace = formAddNewCard.querySelector(".popup__input_type_card-name")
    const inputURL =formAddNewCard.querySelector('.popup__input_type_url')
    const newCard = 
    {
      name: namePlace.value,
      link: inputURL.value,
    }
    const cardElement = createCard(newCard,deleteCard, likeCard,openImagePopap)
    cardContainer.prepend(cardElement);
    closePopup(popupNewCard)
  }

