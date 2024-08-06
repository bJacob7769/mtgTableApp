const names = document.getElementById('names');
const tableListButt = document.querySelectorAll('#tables');
const addPlayerButt = document.getElementById('add-player');
const removePlayerButt = document.getElementById('remove-player');
const markWinnerButt = document.getElementById('mark-winner');
const shuffleSeatsButt = document.getElementById('shuffle-seats');
const dynamicList = document.getElementById('dynamic-list');
const nameInput = document.getElementById('name-input');


const addPlayer = () => {
    const newPlayer = nameInput.value;

    if(newPlayer) {
        const listItem = document.createElement('li');
        listItem.textContent = newPlayer;

        dynamicList.appendChild(listItem);
        
    } else {
        alert('Please Enter A Name');
    }
   
    itemInput.value = '';
}

addPlayerButt.addEventListener('click', addPlayer);

// nameInput.addEventListener('keydown', (e) => {
//     e.preventDefault();
    
//     if(e.key === 'Enter') {
//         addPlayer();
//     }
//     return;
// })





// names.innerHTML += '<div class="name-cont">Rusty Shackleford</div>';