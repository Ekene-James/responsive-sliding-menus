const signUp = document.querySelector('#signUp');
const signIn = document.querySelector('#signIn');
const container = document.querySelector('.container');

signIn.addEventListener('click', () => {
    container.classList.add('clicked')
});
signUp.addEventListener('click', () => {
    container.classList.remove('clicked');
    
})