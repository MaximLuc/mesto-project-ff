

import '../pages/index.css';
import { initialCards } from './cards';
import { createCard, deleteCard, likeCard} from '../src/components/card.js';
import {openPopup,closePopup,openImagePopap,handleFormAddCardSubmit} from '../src/components/modal.js'

const avatarImage = new URL('../images/avatar.jpg', import.meta.url);
const avatar ={ name: 'avatar', link: avatarImage}
const cardContainer = document.querySelector('.places__list'); 
  initialCards.forEach(cardContent => {
      const cardElement = createCard(cardContent, deleteCard, likeCard, openImagePopap);
      cardContainer.append(cardElement);
    });

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

profileFormEdit.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  profileName.textContent = nameInput.value
  profileDescription.textContent =jobInput.value
  closePopup(popupTypeEdit)
});

formAddNewCard.addEventListener('submit',()=>{handleFormAddCardSubmit(event,cardContainer,popupTypeNewCard)});

popupAddNewCard.addEventListener('click',()=>openPopup(popupTypeNewCard,closePopup))

profileEditButton.addEventListener('click',()=>{

  nameInput.value = profileName.textContent
  jobInput.value = profileDescription.textContent
  openPopup(popupTypeEdit,closePopup)
})


    

