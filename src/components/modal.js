
export function openModal(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closePopupByEsc);
}

function closePopupByEsc(event) {
    if(event.key === 'Escape') {
       closeModal(document.querySelector('.popup_is-opened'));
    }
}

export function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closePopupByEsc);
}


