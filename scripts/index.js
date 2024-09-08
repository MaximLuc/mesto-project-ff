

import '../pages/index.css';
import { createCard} from '../src/components/card.js';
import {openPopup,closePopup} from '../src/components/modal.js'
import {enableValidation,hideInputError} from '../src/components/validation.js'
import {getProfile,getInitialCards,patchEditProfile, postNewCard,deleteRequestCard,likeRequestCard,patchEditProfileImage} from '../src/components/api.js'


const cardContainer = document.querySelector('.places__list'); 
function showCards(cardsData,userId){
  const cardContainer = document.querySelector('.places__list'); 
    cardsData.forEach(cardContent => {
        const cardElement = createCard(cardContent, deleteRequestCard, likeRequestCard, openImagePopap,userId);
        cardContainer.append(cardElement);
    });
}

export function getProfileAndCard(){
  Promise.all([getProfile(), getInitialCards()])
    .then(([userData, cardsData]) => {
      const divElement = document.querySelector('.profile__image');
      divElement.style.backgroundImage = `url(${userData.avatar})`;
      profileName.textContent = userData.name;
      profileDescription.textContent = userData.about;
      showCards(cardsData,userData._id)
    })
    .catch(error => {
      console.error('Произошла ошибка:', error);
    });
}
getProfileAndCard()

  function clearFormFealds(popup){
    const form = popup.querySelector('form');  
    if (form) {
        form.reset();  
    }
  }
const profileEditButton = document.querySelector('.profile__edit-button');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupAddNewCard = document.querySelector('.profile__add-button');
const imagePopupTemplate = document.querySelector('.popup_type_image')
const popupEditImageProfile = document.querySelector('.popup_type_update-avatar')

const profileImageForm =  document.forms['update-avatar']
const profileFormEdit = document.forms['edit-profile']
const nameInput = profileFormEdit.querySelector(".popup__input_type_name")
const jobInput =profileFormEdit.querySelector('.popup__input_type_description')
const formAddNewCard = document.forms['new-place']

popupTypeNewCard.classList.add('popup_is-animated')
popupTypeEdit.classList.add('popup_is-animated')
imagePopupTemplate.classList.add('popup_is-animated')

const profileName = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')
const profileImage = document.querySelector('.profile__image')
const inputProfileImage = profileImageForm.querySelector('.popup__input_type_avatar-url')

export {formAddNewCard,profileName,profileDescription}

const closeButtons = document.querySelectorAll('.popup__close');

profileImage.addEventListener('click',()=>{
  clearFormFealds(popupEditImageProfile)
  
  hideInputError(profileImageForm,inputProfileImage)
  enableValidation(profileImageForm);
  openPopup(popupEditImageProfile,closePopup)
})

function renderLoading (form ,isLoading){
  const saveButton = form.querySelector('.popup__button')
  if(isLoading){
    saveButton.textContent = 'Сохранение...'

  }else{
     saveButton.textContent = 'Сохранить'
  }
}

profileImageForm.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  renderLoading(profileImageForm,true)
  patchEditProfileImage(inputProfileImage.value)
  .then(() => {
    cardContainer.innerHTML = ''; 
    return getProfileAndCard();
  })
  .finally(()=>{
    renderLoading(profileImageForm,false)
  })

  closePopup(popupEditImageProfile)
})

closeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const popup = event.target.closest('.popup');
        closePopup(popup);
    });
});

profileFormEdit.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  renderLoading(profileFormEdit,true)
  // 
  profileName.textContent = nameInput.value
  profileDescription.textContent =jobInput.value
  // 
  patchEditProfile(profileName.textContent,profileDescription.textContent)
  .finally(()=>{
    renderLoading(profileFormEdit,false)
  })
  closePopup(popupTypeEdit)
});

formAddNewCard.addEventListener('submit',()=>{
  handleFormAddCardSubmit(event,cardContainer,popupTypeNewCard)

});

popupAddNewCard.addEventListener('click',()=>{
  clearFormFealds(popupTypeNewCard)
  const cardName = formAddNewCard.querySelector('.popup__input_type_card-name') 
  const cardUrl = formAddNewCard.querySelector('.popup__input_type_url ')
  hideInputError(formAddNewCard,cardName)
  hideInputError(formAddNewCard,cardUrl)
  enableValidation(formAddNewCard);
  openPopup(popupTypeNewCard,closePopup)
})

profileEditButton.addEventListener('click',()=>{
  hideInputError(profileFormEdit,nameInput)
  hideInputError(profileFormEdit,jobInput)

  clearFormFealds(popupTypeEdit)
  nameInput.value = profileName.textContent
  jobInput.value = profileDescription.textContent

  enableValidation(profileFormEdit);
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

function handleFormAddCardSubmit(evt, cardContainer, popupNewCard) {
  evt.preventDefault();
  renderLoading(formAddNewCard,true)
  const namePlace = formAddNewCard.querySelector('.popup__input_type_card-name');
  const inputURL = formAddNewCard.querySelector('.popup__input_type_url');
  postNewCard(namePlace.value, inputURL.value)
  .then(() => {
    cardContainer.innerHTML = ''; 
    return getProfileAndCard();
  })
  .catch(error => {
    console.error('Произошла ошибка при добавлении или загрузке карточек:', error);
  })
  .finally(()=>{
    renderLoading(formAddNewCard,false)
  })
  closePopup(popupNewCard);
}
    

