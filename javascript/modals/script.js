'use strict';
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal');

for(let i = 0; i<showModal.length; i++)
    showModal[i].addEventListener('click',function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

const snapModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

closeModal.addEventListener('click',snapModal)
overlay.addEventListener('click',snapModal)
    
document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        snapModal();
    }
})