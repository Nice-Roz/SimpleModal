'use strict';
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close_modal = document.querySelector(".close-modal");
const show_modal = document.querySelectorAll(".show-modal");

const hideModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};
const displayModal = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
for(let i=0;i<show_modal.length;i++){
    show_modal[i].addEventListener('click',displayModal);
}
    close_modal.addEventListener('click',hideModal);
    overlay.addEventListener('click',hideModal);
document.addEventListener('keydown',function(event){

    if(event.key=='Escape' && !modal.classList.contains("hidden")){
        hideModal();
    }
});