// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const places = document.querySelector('.places');
const placesContainer = places.querySelector('.places__list');
const addButton = document.querySelector(".profile__add-button");
const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
const deleteButton = placesContainer.querySelector(".card__delete-button");

// @todo: Функция создания карточки
function createCard(name, link, deleteCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = link;
    cardImage.alt = name;
    cardElement.querySelector(".card__title").textContent = name;
    cardElement.querySelector(".card__delete-button").addEventListener('click', function() {
        deleteCard(cardElement);
    });
    return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
    cardElement.remove()
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (elements) {
    placesContainer.append(createCard(elements.name, elements.link, deleteCard)); 
});