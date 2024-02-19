const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.hero-button');
const modalBtnClose = document.querySelector('.modal-close-btn');

const toggleModal = () => modal.classList.toggle('is-open');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);


const menu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.open-menu-btn');
const menuBtnClose = document.querySelector('.mobile-menu-close-btn');

const toggleMenu = () => menu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);