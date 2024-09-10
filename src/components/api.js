// cf38c160-560a-4afd-a12d-edcc41a0a354
//wff-cohort-21


const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-21',
    headers: {
      authorization: 'cf38c160-560a-4afd-a12d-edcc41a0a354',
      'Content-Type': 'application/json',
    },
  };
  
  const getResponseData = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  };
  

  export const patchEditProfileImage = (newAvatarLink) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({
        avatar: newAvatarLink,
      }),
    }).then(getResponseData);
  };
  

  export const getProfile = () => {
    return fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers,
    }).then(getResponseData);
  };
  

  export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers,
    }).then(getResponseData);
  };
  

  export const patchEditProfile = (newName, newDescription) => {
    return fetch(`${config.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({
        name: newName,
        about: newDescription,
      }),
    }).then(getResponseData);
  };
  
  export const postNewCard = (name, link) => {
    return fetch(`${config.baseUrl}/cards`, {
      method: 'POST',
      headers: config.headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(getResponseData);
  };
  
  export const deleteRequestCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: config.headers,
    }).then(getResponseData);
  };
  
  export const likeRequestCard = (cardId, method) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: method,
      headers: config.headers,
    }).then(getResponseData);
  };
  