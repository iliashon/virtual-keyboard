'use strict';

let shiftNum = 2;
let altNum = 2;
let leng = 1;
const checkBtn = ['Backspace','Tab','Enter','CapsLock','Shift','Control','Alt','Meta', ' ']

const clickCodeEn = ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Enter', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Shift', '`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Control', 'Alt', 'Meta', ' ', 'Meta', 'Alt', '←', '↓', '↑', '→']

const clickCodeRu = ['±', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Enter', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Shift', 'ё', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'Shift', 'Control', 'Alt', 'Meta', ' ', 'Meta', 'Alt', '←', '↓', '↑', '→']

const textField = document.createElement('textarea'),
      container = document.createElement('div'),
      keyboard = document.createElement('div');

container.classList = 'container';
keyboard.classList = 'key-board';
document.body.append(container);
container.append(textField);
container.append(keyboard);

class clickBtn {
    constructor(code, data){
        this.code = code;
        this.data = data;
    }

    render(){
        let keyBtn = document.createElement('div');
        keyBtn.classList = `key-button ${(this.code).toLowerCase()}`;
        keyBtn.dataset.id = this.data;
        keyBtn.textContent = `${this.code}`;
        keyboard.append(keyBtn);

        if(this.code == ' ') {
            keyBtn.classList = `key-button Space`;
        } else if(this.code == 'Shift' && shiftNum == 2) {
            keyBtn.classList = `key-button ${this.code}Left`;
            shiftNum--;
        } else if(this.code == 'Shift' && shiftNum == 1){
            keyBtn.classList = `key-button ${this.code}Right`;
            shiftNum++;
        } else if(this.code == 'Alt' && altNum == 2) {
            keyBtn.classList = `key-button ${this.code}l`;
            altNum--;
        } else if(this.code == 'Alt' && altNum == 1){
            keyBtn.classList = `key-button ${this.code}r`;
            altNum++;
        }

        keyBtn.addEventListener('mousedown', () => {
            if(checkBtn.indexOf(this.code) < 0){
                textField.textContent += `${this.code}`
            }
        })

        if(this.code == 'Backspace'){
            keyBtn.addEventListener('mousedown', () => {
                textField.textContent = textField.textContent.slice(0, -1);
            })
        }
        if(this.code == 'Enter'){
            keyBtn.addEventListener('mousedown', () => {
                textField.textContent += `\n`
            })
        }
        if(this.code == ' '){
            keyBtn.addEventListener('mousedown', () => {
                textField.textContent += ' ';
            })
        }
    }
}

function createKeyBoard(arr){
    for(let i = 0; i < arr.length; i++){
        new clickBtn(arr[i], arr[i]).render();
    }
}

document.addEventListener('keydown', (e) => {
    if(e.altKey && e.code === 'ControlLeft' && leng === 1){
        keyboard.innerHTML = '';
        createKeyBoard(clickCodeRu);
        leng++;
    } else if(e.altKey && e.code === 'ControlLeft' && leng === 2){
        keyboard.innerHTML = '';
        createKeyBoard(clickCodeEn);
        leng--;
    }
})

console.log(createKeyBoard(clickCodeEn));

// document.addEventListener('keydown', (e) => {
//     if (clickCode.indexOf(e.key) >= 0) {
//         let bgClick = document.querySelectorAll('.key-button')[clickCode.indexOf(e.key)];
//         bgClick.style.backgroundColor = '#00ff49';
//         bgClick.style.borderRadius = '30px'; 
//     } 
// })
// document.addEventListener('keyup', () => {
//     bgClick.style.backgroundColor = '#3a424e';
//     bgClick.style.borderRadius = '10px';
// })