

import '../pages/index.css';
import { initialCards } from './cards';
import { createCard, deleteCard, likeCard} from '../src/components/card.js';
import {openPopup,closePopup,handleFormAddCardSubmit} from '../src/components/modal.js'
import backgroundImage from '../images/avatar.jpg'

const divElement = document.querySelector('.profile__image');


divElement.style.backgroundImage = `url(${backgroundImage})`;

const avatarImage = new URL('../images/avatar.jpg', import.meta.url);
const avatar ={ name: 'avatar', link: avatarImage}
console.log(avatar.url)
const cardContainer = document.querySelector('.places__list'); 
  initialCards.forEach(cardContent => {
      const cardElement = createCard(cardContent, deleteCard, likeCard, openImagePopap);
      cardContainer.append(cardElement);
    });


  function clearFormFealds(popup){
    const form = popup.querySelector('form');  
    console.log(form)
    if (form) {
        form.reset();  
    }
  }

const profileEditButton = document.querySelector('.profile__edit-button');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupAddNewCard = document.querySelector('.profile__add-button');
const imagePopupTemplate = document.querySelector('.popup_type_image')

const profileFormEdit = document.forms['edit-profile']
const nameInput = profileFormEdit.querySelector(".popup__input_type_name")
const jobInput =profileFormEdit.querySelector('.popup__input_type_description')
const formAddNewCard = document.forms['new-place']

popupTypeNewCard.classList.add('popup_is-animated')
popupTypeEdit.classList.add('popup_is-animated')
imagePopupTemplate.classList.add('popup_is-animated')

const profileName = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')

export {formAddNewCard}

const closeButtons = document.querySelectorAll('.popup__close');

closeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const popup = event.target.closest('.popup');
        closePopup(popup);
    });
});

profileFormEdit.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  profileName.textContent = nameInput.value
  profileDescription.textContent =jobInput.value
  closePopup(popupTypeEdit)
});

formAddNewCard.addEventListener('submit',()=>{handleFormAddCardSubmit(event,cardContainer,popupTypeNewCard)});

popupAddNewCard.addEventListener('click',()=>{
  clearFormFealds(popupTypeNewCard)
  openPopup(popupTypeNewCard,closePopup)
})

profileEditButton.addEventListener('click',()=>{
  clearFormFealds(popupTypeEdit)
  nameInput.value = profileName.textContent
  jobInput.value = profileDescription.textContent
  openPopup(popupTypeEdit,closePopup)
})

export function openImagePopap(popup) {
  const imagePopupTemplate = document.querySelector('.popup_type_image');
  const popupImage = imagePopupTemplate.querySelector('.popup__image');
  const popupCaption = imagePopupTemplate.querySelector('.popup__caption');
  const popupImageButton = popup.querySelector('.card__image');

  popupImage.src = popupImageButton.src;
  popupImage.alt = popup.querySelector('.card__image').alt;
  popupCaption.textContent = popup.querySelector('.card__title').textContent;

  openPopup(imagePopupTemplate);
}


    

