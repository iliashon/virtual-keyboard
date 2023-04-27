'use strict';

// let shiftNum = 2;
// let altNum = 2;

// const checkBtn = ['Backspace','Tab','Enter','CapsLock','Shift','Control','Alt','Meta', ' ']
// const clickCodeEn = ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Enter', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Shift', '`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Control', 'Alt', 'Meta', ' ', 'Meta', 'Alt', '←', '↓', '↑', '→']
// const clickCodeRu = ['±', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Enter', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Shift', 'ё', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'Shift', 'Control', 'Alt', 'Meta', ' ', 'Meta', 'Alt', '←', '↓', '↑', '→']

window.onkeydown = evt => {
    if (evt.key == 'Tab') {
        evt.preventDefault();
    }
}

const buttonKeyEn = [['Backquote', '§'], ['Digit1', '1'], ['Digit2', '2'], ['Digit3', '3'], ['Digit4', '4'], ['Digit5', '5'], ['Digit6', '6'], ['Digit7', '7'], ['Digit8', '8'], ['Digit9', '9'], ['Digit0', '0'], ['Minus', '-'], ['Equal', '='], ['Backspace', 'Backspace'], ['Tab', 'Tab'], ['KeyQ', 'q'], ['KeyW', 'w'], ['KeyE', 'e'], ['KeyR', 'r'], ['KeyT', 't'], ['KeyY', 'y'], ['KeyU', 'u'], ['KeyI', 'i'], ['KeyO', 'o'], ['KeyP', 'p'], ['BracketLeft', '['], ['BracketRight', ']'], ['Backslash', '\\'], ['Enter', 'Enter'], ['CapsLock', 'CapsLock'], ['KeyA', 'a'], ['KeyS', 's'], ['KeyD', 'd'], ['KeyF', 'f'], ['KeyG', 'g'], ['KeyH', 'h'], ['KeyJ', 'j'], ['KeyK', 'k'], ['KeyL', 'l'], ['Semicolon', ';'], ['Quote', "'"], ['ShiftLeft', 'Shift'], ['IntlBackslash', '`'], ['KeyZ', 'z'], ['KeyX', 'x'], ['KeyC', 'c'], ['KeyV', 'v'], ['KeyB', 'b'], ['KeyN', 'n'], ['KeyM', 'm'], ['Comma', ','], ['Period', '.'], ['Slash', '/'], ['ShiftRight', 'Shift'], ['ControlLeft', 'Ctrl'], ['AltLeft', 'Alt'], ['MetaLeft', 'Cmd'], ['Space', ' '], ['MetaRight', 'Cmd'], ['AltRight', 'Alt'], ['ArrowLeft', '←'], ['ArrowUp', '↑'], ['ArrowDown', '↓'], ['ArrowRight', '→']];
const buttonKeyRu = [['Backquote', '±'], ['Digit1', '1'], ['Digit2', '2'], ['Digit3', '3'], ['Digit4', '4'], ['Digit5', '5'], ['Digit6', '6'], ['Digit7', '7'], ['Digit8', '8'], ['Digit9', '9'], ['Digit0', '0'], ['Minus', '-'], ['Equal', '='], ['Backspace', 'Backspace'], ['Tab', 'Tab'], ['KeyQ', 'й'], ['KeyW', 'ц'], ['KeyE', 'у'], ['KeyR', 'к'], ['KeyT', 'е'], ['KeyY', 'н'], ['KeyU', 'г'], ['KeyI', 'ш'], ['KeyO', 'щ'], ['KeyP', 'з'], ['BracketLeft', 'х'], ['BracketRight', 'ъ'], ['Backslash', '\\'], ['Enter', 'Enter'], ['CapsLock', 'CapsLock'], ['KeyA', 'ф'], ['KeyS', 'ы'], ['KeyD', 'в'], ['KeyF', 'а'], ['KeyG', 'п'], ['KeyH', 'р'], ['KeyJ', 'о'], ['KeyK', 'л'], ['KeyL', 'д'], ['Semicolon', 'ж'], ['Quote', "э"], ['ShiftLeft', 'Shift'], ['IntlBackslash', '`'], ['KeyZ', 'я'], ['KeyX', 'ч'], ['KeyC', 'с'], ['KeyV', 'м'], ['KeyB', 'и'], ['KeyN', 'т'], ['KeyM', 'ь'], ['Comma', 'б'], ['Period', 'ю'], ['Slash', '/'], ['ShiftRight', 'Shift'], ['ControlLeft', 'Ctrl'], ['AltLeft', 'Alt'], ['MetaLeft', 'Cmd'], ['Space', ' '], ['MetaRight', 'Cmd'], ['AltRight', 'Alt'], ['ArrowLeft', '←'], ['ArrowUp', '↑'], ['ArrowDown', '↓'], ['ArrowRight', '→']];
const checkBtn = ['Backspace', 'Tab', 'Enter', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'Control', 'AltRight', 'MetaLeft', 'MetaRight', 'Space'];
 
const textField = document.createElement('textarea'),
      container = document.createElement('div'),
      keyBoardWrapper = document.createElement('div');
//       keyboard = document.createElement('div');

container.classList = 'container';
keyBoardWrapper.classList = 'key-board-wrapper';
// keyboard.classList = 'key-board';
document.body.append(container);
container.append(textField);
container.append(keyBoardWrapper);
// container.append(keyboard);

class button {
    code;
    key;
    element;
    constructor(code, key) {
        this.code = code;
        this.key = key;
        this.element = document.createElement('div');
        this.element.classList = 'key-button';
        this.element.setAttribute('data', this.code);
        this.element.append(this.key);
        this.addListeners();
    }

    addListeners(){
        document.addEventListener('keydown', (e) => {
            if(e.code == this.code){
                this.element.classList.add('key_active');
            }
            if(e.code == this.code && e.code == 'Tab'){
                    textField.value += '  ';
            }
        })
        document.addEventListener('keyup', (e) => {
            if(e.code == this.code){
                this.element.classList.remove('key_active');
            }
        })
        this.element.addEventListener('mousedown', () => {
            if(checkBtn.indexOf(this.code) < 0){
                textField.value += `${this.key}`
            }
        })
        if(this.code == 'Backspace'){
            this.element.addEventListener('mousedown', () => {
                textField.value = textField.value.slice(0, -1);
            })
        }
        if(this.code == 'Enter'){
            this.element.addEventListener('mousedown', () => {
                textField.value += `\n`
            })
        }
        if(this.code == 'Space'){
            this.element.addEventListener('mousedown', () => {
                textField.value += ' ';
            })
        }
        if(this.code == 'Tab'){
            this.element.addEventListener('mousedown', () => {
                textField.value += '    ';
            })
        }
        
    }


}

class keyBoard {
    buttons = [];
    element;
    constructor(arr) {
        this.element = document.createElement('div');
        this.element.classList = 'key-board';
        arr.forEach(e => {
            this.buttons.push(new button(e[0], e[1]));4
        });
    }

    render() {
        this.buttons.forEach((btn) => {
            this.element.append(btn.element);
        })
        return this.element;
    }

}
const keyBoardEn = new keyBoard(buttonKeyEn).render(),
      keyBoardRu = new keyBoard(buttonKeyRu).render();
// Проверка localStorage
if(localStorage.getItem('lang') == undefined){
    localStorage.setItem('lang', 'en')
}
if(localStorage.getItem('lang') == 'en'){
    keyBoardWrapper.append(keyBoardEn);
} else if(localStorage.getItem('lang') == 'ru'){
    keyBoardWrapper.append(keyBoardRu);
}

// Смена языка
document.addEventListener('keydown', (e) => {
    if(e.altKey && e.code === 'ControlLeft' && localStorage.getItem('lang') == 'en'){
        keyBoardWrapper.replaceChildren(keyBoardRu);
        localStorage.setItem('lang', 'ru');
    } else if(e.altKey && e.code === 'ControlLeft' && localStorage.getItem('lang') == 'ru'){
        keyBoardWrapper.replaceChildren(keyBoardEn)
        localStorage.setItem('lang', 'en');
    }
})











// class clickBtn {
//     constructor(code, data){
//         this.code = code;
//         this.data = data;
//     }

//     render(){
//         let keyBtn = document.createElement('div');
//         keyBtn.classList = `key-button ${(this.code).toLowerCase()}`;
//         keyBtn.dataset.id = this.data;
//         keyBtn.textContent = `${this.code}`;
//         keyboard.append(keyBtn);

//         if(this.code == ' ') {
//             keyBtn.classList = `key-button Space`;
//         } else if(this.code == 'Shift' && shiftNum == 2) {
//             keyBtn.classList = `key-button ${this.code}Left`;
//             shiftNum--;
//         } else if(this.code == 'Shift' && shiftNum == 1){
//             keyBtn.classList = `key-button ${this.code}Right`;
//             shiftNum++;
//         } else if(this.code == 'Alt' && altNum == 2) {
//             keyBtn.classList = `key-button ${this.code}l`;
//             altNum--;
//         } else if(this.code == 'Alt' && altNum == 1){
//             keyBtn.classList = `key-button ${this.code}r`;
//             altNum++;
//         }

        // document.activeElement('keydown', (e) => {

        // })

//         keyBtn.addEventListener('mousedown', () => {
//             if(checkBtn.indexOf(this.code) < 0){
//                 textField.textContent += `${this.code}`
//             }
//         })

//         if(this.code == 'Backspace'){
//             keyBtn.addEventListener('mousedown', () => {
//                 textField.textContent = textField.textContent.slice(0, -1);
//             })
//         }
//         if(this.code == 'Enter'){
//             keyBtn.addEventListener('mousedown', () => {
//                 textField.textContent += `\n`
//             })
//         }
//         if(this.code == ' '){
//             keyBtn.addEventListener('mousedown', () => {
//                 textField.textContent += ' ';
//             })
//         }

//     }
// }

// function createKeyBoard(arr){
//     for(let i = 0; i < arr.length; i++){
//         new clickBtn(arr[i], arr[i]).render();
//     }
// }

// document.addEventListener('keydown', (e) => {
//     if(e.altKey && e.code === 'ControlLeft' && leng === 1){
//         keyboard.innerHTML = '';
//         createKeyBoard(clickCodeRu);
//         leng++;
//     } else if(e.altKey && e.code === 'ControlLeft' && leng === 2){
//         keyboard.innerHTML = '';
//         createKeyBoard(clickCodeEn);
//         leng--;
//     }
// })

// console.log(createKeyBoard(clickCodeEn));



// class keyBoardBtn {
//     constructor(key, code){
//         this.key = key;
//         this.code = code;
//     }
//     render(){
//         keyboard.innerHTML += `<div class="key-button" id="${this.code}">${this.key}</div>`;

//         const hardBtn = document.querySelector('.key-button');
//         document.addEventListener('keydown', (e) => {
//             if(e.code === this.code){
//                 hardBtn.classList.add('key_active');
//             }
//         })
//         document.addEventListener('keyup', (e) => {
//                 if(e.code === this.code){
//                     hardBtn.classList.remove('key_active');
//                 }
//         })

//         // keyBtn.addEventListener('mousedown', () => {
//         //     if(checkBtn.indexOf(this.code) < 0){
//         //         textField.textContent += `${this.code}`
//         //     }
//         // })
//     }
// }

// function createKeyBoard(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         new keyBoardBtn(arr[i][1], arr[i][0]).render()
//     }
// }

// // Проверка localStorage
// if(localStorage.getItem('lang') == undefined){
//     localStorage.setItem('lang', 'en')
// }
// if(localStorage.getItem('lang') == 'en'){
//     createKeyBoard(buttonKeyEn);
// } else if(localStorage.getItem('lang') == 'ru'){
//     createKeyBoard(buttonKeyRu);
// }


// // Смена языка
// document.addEventListener('keydown', (e) => {
//     console.log(e.code);
//     if(e.altKey && e.code === 'ControlLeft' && localStorage.getItem('lang') == 'en'){
//         keyboard.innerHTML = '';
//         createKeyBoard(buttonKeyRu);
//         localStorage.setItem('lang', 'ru');
//     } else if(e.altKey && e.code === 'ControlLeft' && localStorage.getItem('lang') == 'ru'){
//         keyboard.innerHTML = '';
//         createKeyBoard(buttonKeyEn);
//         localStorage.setItem('lang', 'en');
//     }
// })