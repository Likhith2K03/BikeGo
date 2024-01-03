const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
} 

const openPopup = document.getElementById('filter-btn')
const popup = document.getElementById('popup')
const closePopup = document.getElementById('close-btn')

if (openPopup) {
    openPopup.addEventListener('click', () => {
        popup.classList.add('active')
    })
}

if (closePopup) {
    closePopup.addEventListener('click', () => {
        popup.classList.remove('active')
    })
} 