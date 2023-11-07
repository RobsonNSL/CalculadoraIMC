export const AlertError = {
    error: document.querySelector('.alertError'),

    open() {
        AlertError.error.classList.add('open')
    },

    close() {
        AlertError.error.classList.remove('open')
    }
}