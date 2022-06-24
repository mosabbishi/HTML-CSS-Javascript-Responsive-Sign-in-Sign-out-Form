const signin = document.querySelector('.sginin-btn') 
const signup = document.querySelector('.sginup-btn') 
const move = document.querySelector('.move-btn')

signin.addEventListener('click', ()=> {
    move.classList.add('move-right')
    move.innerText = 'Sign In'
})

signup.addEventListener('click', ()=>{
    move.classList.remove('move-right')
    move.innerText = 'Sign Up'
})