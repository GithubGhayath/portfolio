const navbar = document.querySelector(".navbar")
const Hidenavbar = document.querySelector(".active")


const button = document.querySelector('.lets-talk');
const newClassName = 'ListOfContect'; 

button.addEventListener('click', () => {
  const listElement = document.querySelector('.list');
  
  listElement.classList.toggle(newClassName);
});

const links = document.querySelectorAll('.btn-box a');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

  });
});


actions.addEventListener("click",()=>{
     hidelMenu();
});

function hidelMenu(){
     navbar.classList.toggle("is-active");
}


menu.addEventListener("click",()=>{
     hundelMenu();
});

function hundelMenu(){
   navbar.classList.toggle("is-active");
}


// Select the menu element by its class name
const menuList = document.querySelector('.list'); // Replace '.menu' with the actual class or ID of your menu



window.addEventListener('scroll', () => {
  // Check the current scroll position
  if (window.scrollY > 570) {
    // If the scroll position is not at the top, add 'hide' class to the menu
    menuList.classList.add('hide');

  } else {
    // If the scroll position is at the top, remove 'hide' class from the menu
    menuList.classList.remove('hide','ListOfContect');
   
  }
});
