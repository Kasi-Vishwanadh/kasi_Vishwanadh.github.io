const details = document.getElementById("details");

let home = document.getElementById('home')
let about = document.getElementById('about')
let profession = document.getElementById('profession')
let portfolio = document.getElementById('portfolio')
let contact = document.getElementById('contact')


let home_details = document.getElementById('home_details')
let about_details = document.getElementById("about_details")
let profession_details = document.getElementById('profession_details')
let portfolio_details = document.getElementById('portfolio_details')
let contact_details = document.getElementById('contact_details')




home.addEventListener("click", () => {
    about_details.style.display = 'none'
    profession_details.style.display = 'none'
    portfolio_details.style.display = 'none'
    contact_details.style.display = 'none'
    home_details.style.display = 'block'

})
about.addEventListener("click", () => {
    home_details.style.display = 'none'
    profession_details.style.display = 'none'
    portfolio_details.style.display = 'none'
    contact_details.style.display = 'none'
    about_details.style.display = 'block'


})
profession.addEventListener("click", () => {
    home_details.style.display = 'none'
    about_details.style.display = 'none'
    portfolio_details.style.display = 'none'
    contact_details.style.display = 'none'
    profession_details.style.display = 'block'

})
portfolio.addEventListener("click", () => {
    home_details.style.display = 'none'
    about_details.style.display = 'none'
    profession_details.style.display = 'none'
    contact_details.style.display = 'none'
    portfolio_details.style.display = 'block'

})

contact.addEventListener('click', () => {
    home_details.style.display = 'none'
    about_details.style.display = 'none'
    profession_details.style.display = 'none'
    portfolio_details.style.display = 'none'
    contact_details.style.display = 'block'


})