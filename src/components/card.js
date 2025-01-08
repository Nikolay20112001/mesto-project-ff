// @todo: Функция создания карточки
function createCard(cardTemplate, name, link, handleOpenPhoto, handleDeletePlace, handleLike, cardInfo, profileId) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardDeleteButton = cardElement.querySelector('.card__delete-button');
    const cardLikeCounter = cardElement.querySelector('.card__like-counter');
    let likeCounter = Array.from(cardInfo.likes).length;
    cardImage.src = link;
    cardImage.alt = name;
    cardElement.querySelector(".card__title").textContent = name;
    cardLikeCounter.textContent = likeCounter;
    if (cardInfo.owner._id === profileId) {
        cardDeleteButton.addEventListener('click', function() {
            handleDeletePlace(cardElement, cardInfo._id);
        });
    } else {
        cardDeleteButton.classList.add('card__delete-button-hide');
    }
    cardElement.querySelector(".card__image").addEventListener('click', function() {
        handleOpenPhoto(name, link);
    });
    cardElement.querySelector(".card__like-button").addEventListener('click', function(evt) {
        like(evt);
        handleLike(cardElement, cardInfo, likeCounter);
    });
    return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
    cardElement.remove();
}

function like(evt) {
    if (evt.target.classList.contains('card__like-button')) {
        evt.target.classList.toggle('card__like-button_is-active')
    }
}

export {createCard, deleteCard, like};