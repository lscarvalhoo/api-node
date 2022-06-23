import changeContent from "./change-content.js";

export default function initProfile() {
    const buttonEdit = document.querySelector('.button-edit');
    changeContent('header');
    buttonEdit.addEventListener('click', changeContent('edit'));
}