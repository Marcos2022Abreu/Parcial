const hamb = document.querySelector('.hamb')
console.log(hamb)
const nav = document.querySelector('nav')
console.log(nav)

hamb.addEventListener('click', () => {
    nav.classList.toggle('open')
})