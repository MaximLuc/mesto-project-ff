
import { formAddNewCard, openImagePopap} from '../../scripts/index.js';
import { createCard, deleteCard, likeCard } from './card.js';

export function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleCloseEscapePress);
  popup.removeEventListener('click', handleOverlayClick);
}

export function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleCloseEscapePress);
  popup.addEventListener('click', handleOverlayClick);
}

function handleOverlayClick(event) {
  if (event.target === event.currentTarget || event.target.classList.contains('popup__close') ) {
    closePopup(event.currentTarget);
  }
}

function handleCloseEscapePress(event) {
  if (event.key === 'Escape') {
    closePopup(document.querySelector('.popup_is-opened'));
  }
}



export function handleFormAddCardSubmit(evt, cardContainer, popupNewCard) {
  evt.preventDefault();
  const namePlace = formAddNewCard.querySelector('.popup__input_type_card-name');
  const inputURL = formAddNewCard.querySelector('.popup__input_type_url');
  const newCard = {
    name: namePlace.value,
    link: inputURL.value,
  };
  const cardElement = createCard(newCard, deleteCard, likeCard, openImagePopap);
  cardContainer.prepend(cardElement);
  closePopup(popupNewCard);
}
