// cf38c160-560a-4afd-a12d-edcc41a0a354
//wff-cohort-21


const getConfigProfile = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-21/users/me',
    headers: {
      authorization: 'cf38c160-560a-4afd-a12d-edcc41a0a354',
      'Content-Type': 'application/json'
    }
}

const getConfigCards ={
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-21/cards',
    headers: {
      authorization: 'cf38c160-560a-4afd-a12d-edcc41a0a354',
      'Content-Type': 'application/json'
    }
}

const patchEditConfigProfile={
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-21/users/me ',
    method: 'PATCH',
    headers: {
        authorization: 'cf38c160-560a-4afd-a12d-edcc41a0a354',
        'Content-Type': 'application/json'
    },

}

const postConfigNewCard={
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-21/cards',
    method: 'POST',
    headers: {
        authorization: 'cf38c160-560a-4afd-a12d-edcc41a0a354',
        'Content-Type': 'application/json'
    },

}

const deleteConfigCard= {
    method: 'DELETE',
    headers: {
        authorization: 'cf38c160-560a-4afd-a12d-edcc41a0a354',
        'Content-Type': 'application/json'
    },
}

const likeConfigCard= {
    headers: {
        authorization: 'cf38c160-560a-4afd-a12d-edcc41a0a354',
        'Content-Type': 'application/json'
    },
}

const patchEditConfigProfileImage={
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-21/users/me/avatar',
    method: 'PATCH',
    headers: {
        authorization: 'cf38c160-560a-4afd-a12d-edcc41a0a354',
        'Content-Type': 'application/json'
    },

}

export const  patchEditProfileImage = (newAvatarLink) => {
    return fetch(patchEditConfigProfileImage.baseUrl,{
        method: patchEditConfigProfileImage.method,
        headers:patchEditConfigProfileImage.headers,
        body: JSON.stringify({
            avatar: newAvatarLink,
        })
    })
    .then(res => {
        if (!res.ok) {
          throw new Error(`Ошибка: ${res.status}`);
        }
        return res.json();
      })
    .catch((error) => {
        console.error('Произошла ошибка:', error);
    });
}

export const getProfile = () => {
    return fetch(getConfigProfile.baseUrl,{
        headers:getConfigProfile.headers
    })
    .then(res => {
        if (!res.ok) {
          throw new Error(`Ошибка: ${res.status}`);
        }
        return res.json();
      })
    .catch((error) => {
        console.error('Произошла ошибка:', error);
    });
}

export const getInitialCards = () => {
    console.log('get cards')
    return fetch(getConfigCards.baseUrl,{
        headers:getConfigCards.headers
    })
    .then(res => {
        if (!res.ok) {
          throw new Error(`Ошибка: ${res.status}`);
        }
        return res.json();
      })
    .catch((error) => {
        console.error('Произошла ошибка:', error);
    });
}

export const  patchEditProfile = (newName, newDescription) => {
    return fetch(patchEditConfigProfile.baseUrl,{
        method: patchEditConfigProfile.method,
        headers:getConfigCards.headers,
        body: JSON.stringify({
            name: newName,
            about: newDescription
        })
    })
    .then(res => {
        if (!res.ok) {
          throw new Error(`Ошибка: ${res.status}`);
        }
        return res.json();
      })
    .catch((error) => {
        console.error('Произошла ошибка:', error);
    });
}

export const  postNewCard = (name, link) => {
    return fetch( postConfigNewCard.baseUrl,{
        method:  postConfigNewCard.method,
        headers: postConfigNewCard.headers,
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
    .then(res => {
        if (!res.ok) {
          throw new Error(`Ошибка: ${res.status}`);
        }
        return res.json();
      })
    .catch((error) => {
        console.error('Произошла ошибка:', error);
    });
}

export const deleteRequestCard = (cardId)=>{
    return fetch(`https://nomoreparties.co/v1/wff-cohort-21/cards/${cardId}`,{
        method:  deleteConfigCard.method,
        headers: deleteConfigCard.headers,
    })
    .then(res => {
        if (!res.ok) {
          throw new Error(`Ошибка: ${res.status}`);
        }
        return res.json();
      })
    .catch((error) => {
        console.error('Произошла ошибка:', error);
    });
}

export const likeRequestCard = (cardId,method)=>{
    return fetch(`https://nomoreparties.co/v1/wff-cohort-21/cards/likes/${cardId}`,{
        method: method,
        headers: likeConfigCard.headers,
    })
    .then(res => {
        console.log(method)
        if (!res.ok) {
          throw new Error(`Ошибка: ${res.status}`);
        }
        return res.json();
      })
    .catch((error) => {
        console.error('Произошла ошибка:', error);
    });
}