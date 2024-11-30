



let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}

const btnn=document.querySelector('.btnn');
const hide = document.querySelectorAll('.content1');

hide.forEach(card => {
    card.classList.add('hidden');
});

btnn.addEventListener('click', () => {
    hide.forEach(card => {
    card.classList.toggle('hidden');
});

if (btnn.textContent === 'View More') {
    btnn.textContent = 'View Less';
} else {
    btnn.textContent = 'View More';
}
});


const boxes = document.querySelectorAll('.box1');

boxes.forEach((currentbox) =>{ 
    currentbox.addEventListener('mouseenter', () => {

        currentbox.classList.add('scale');

        boxes.forEach((otherBox) => {
            if (otherBox !== currentbox) {
                otherBox.classList.add('blur');
            }
        });
    });

    currentbox.addEventListener('mouseleave', () => {

        currentbox.classList.remove('scale');

        boxes.forEach((otherBox) => {
            otherBox.classList.remove('blur');
        });
    });
});


function flipCard(button) {
    const card = button.closest('.pbox1');
    card.classList.toggle('flip');
}

const x=document.querySelectorAll('.pbox1');
 x.forEach((card) => {
    card.addEventListener('mouseleave', () => {
        card.classList.remove('flip');
    });
});




// let modal = document.createElement('div');
//     modal.classList.add('modal');
//     modal.innerHTML = `
//       <div class="modal-content">
//         <p>Please sign in</p>
//         <button id="closeButton">Close</button>
//       </div>`;
//     document.body.appendChild(modal);

//     document.querySelector('.lbtn').addEventListener('click', (e) => {
//       e.preventDefault(); // Prevent default link behavior
//       modal.style.display = 'block';
//     });

//     modal.addEventListener('click', (e) => {
//       if (e.target.id === 'closeButton' || e.target === modal) {
//         modal.style.display = 'none';
//       }
//     });

