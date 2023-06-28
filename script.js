const button = document.querySelector(".btn")
const arrow = document.querySelector(".share-icon")
const social = document.querySelector(".social-icons")

button.addEventListener('click', activePassiveButton)

function activePassiveButton(){
    if (button.classList == "btn active") {
        button.classList.remove("active")
        arrow.classList.remove("active")
        social.classList.remove("social-active")
        
    } else {
        button.classList.add("active")
        arrow.classList.add("active")
        social.classList.add("social-active")
    }
    
    
}