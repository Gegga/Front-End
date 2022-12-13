const Cont = document.querySelector('.H_Cont');
const MenuList = document.querySelector('.H-MenuList');
const DropList = document.querySelector('.H_DropList');
let ML_Enabled = true;

MenuList.addEventListener('click', () => {
    if(ML_Enabled) {
        MenuList.className = 'H-MenuList Active';
        DropList.className = 'H_DropList Active';
        DropList.prepend(MenuList);
    }else {
        Cont.appendChild(MenuList);
        MenuList.className = 'H-MenuList';
        DropList.className = 'H_DropList';
    }
    ML_Enabled = !ML_Enabled;
});