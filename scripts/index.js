// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const places = document.querySelector('.places');
const placesContainer = places.querySelector('.places__list');
const addButton = document.querySelector(".profile__add-button");
const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
const deleteButton = placesContainer.querySelector(".card__delete-button");

// @todo: Функция создания карточки
function addCard(name, link, deleteCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector(".card__image").src = link;
    cardElement.querySelector(".card__title").textContent = name;
    cardElement.querySelector(".card__delete-button").addEventListener('click', function(event) {
        const button = event.target;
        const card = button.parentElement;
        deleteCard(card);
    });
    return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
    cardElement.remove()
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (elements) {
    placesContainer.append(addCard(elements.name, elements.link, deleteCard)); 
});