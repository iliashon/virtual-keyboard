'use strict';

// Сброс таба до дефолта
window.onkeydown = evt => {
    if (evt.key == 'Tab') {
        evt.preventDefault();
    }
}

// Массивы раскладок
const buttonKeyEn = [['Backquote', '§'], ['Digit1', '1'], ['Digit2', '2'], ['Digit3', '3'], ['Digit4', '4'], ['Digit5', '5'], ['Digit6', '6'], ['Digit7', '7'], ['Digit8', '8'], ['Digit9', '9'], ['Digit0', '0'], ['Minus', '-'], ['Equal', '='], ['Backspace', 'Backspace'], ['Tab', 'Tab'], ['KeyQ', 'q'], ['KeyW', 'w'], ['KeyE', 'e'], ['KeyR', 'r'], ['KeyT', 't'], ['KeyY', 'y'], ['KeyU', 'u'], ['KeyI', 'i'], ['KeyO', 'o'], ['KeyP', 'p'], ['BracketLeft', '['], ['BracketRight', ']'], ['Backslash', '\\'], ['Enter', 'Enter'], ['CapsLock', 'CapsLock'], ['KeyA', 'a'], ['KeyS', 's'], ['KeyD', 'd'], ['KeyF', 'f'], ['KeyG', 'g'], ['KeyH', 'h'], ['KeyJ', 'j'], ['KeyK', 'k'], ['KeyL', 'l'], ['Semicolon', ';'], ['Quote', "'"], ['ShiftLeft', 'Shift'], ['IntlBackslash', '`'], ['KeyZ', 'z'], ['KeyX', 'x'], ['KeyC', 'c'], ['KeyV', 'v'], ['KeyB', 'b'], ['KeyN', 'n'], ['KeyM', 'm'], ['Comma', ','], ['Period', '.'], ['Slash', '/'], ['ShiftRight', 'Shift'], ['ControlLeft', 'Ctrl'], ['AltLeft', 'Alt'], ['MetaLeft', 'Cmd'], ['Space', ' '], ['MetaRight', 'Cmd'], ['AltRight', 'Alt'], ['ArrowLeft', '←'], ['ArrowUp', '↑'], ['ArrowDown', '↓'], ['ArrowRight', '→']];
const buttonKeyEnShift = [['Backquote', '<'], ['Digit1', '!'], ['Digit2', '@'], ['Digit3', '#'], ['Digit4', '$'], ['Digit5', '%'], ['Digit6', '^'], ['Digit7', '&'], ['Digit8', '*'], ['Digit9', '('], ['Digit0', ')'], ['Minus', '_'], ['Equal', '+'], ['Backspace', 'Backspace'], ['Tab', 'Tab'], ['KeyQ', 'Q'], ['KeyW', 'W'], ['KeyE', 'E'], ['KeyR', 'R'], ['KeyT', 'T'], ['KeyY', 'Y'], ['KeyU', 'U'], ['KeyI', 'I'], ['KeyO', 'O'], ['KeyP', 'P'], ['BracketLeft', '{'], ['BracketRight', '}'], ['Backslash', '|'], ['Enter', 'Enter'], ['CapsLock', 'CapsLock'], ['KeyA', 'A'], ['KeyS', 'S'], ['KeyD', 'D'], ['KeyF', 'F'], ['KeyG', 'G'], ['KeyH', 'H'], ['KeyJ', 'J'], ['KeyK', 'K'], ['KeyL', 'L'], ['Semicolon', ':'], ['Quote', '"'], ['ShiftLeft', 'Shift'], ['IntlBackslash', '~'], ['KeyZ', 'Z'], ['KeyX', 'X'], ['KeyC', 'C'], ['KeyV', 'V'], ['KeyB', 'B'], ['KeyN', 'N'], ['KeyM', 'M'], ['Comma', '<'], ['Period', '>'], ['Slash', '?'], ['ShiftRight', 'Shift'], ['ControlLeft', 'Ctrl'], ['AltLeft', 'Alt'], ['MetaLeft', 'Cmd'], ['Space', ' '], ['MetaRight', 'Cmd'], ['AltRight', 'Alt'], ['ArrowLeft', '←'], ['ArrowUp', '↑'], ['ArrowDown', '↓'], ['ArrowRight', '→']];
const buttonKeyRu = [['Backquote', '±'], ['Digit1', '1'], ['Digit2', '2'], ['Digit3', '3'], ['Digit4', '4'], ['Digit5', '5'], ['Digit6', '6'], ['Digit7', '7'], ['Digit8', '8'], ['Digit9', '9'], ['Digit0', '0'], ['Minus', '-'], ['Equal', '='], ['Backspace', 'Backspace'], ['Tab', 'Tab'], ['KeyQ', 'й'], ['KeyW', 'ц'], ['KeyE', 'у'], ['KeyR', 'к'], ['KeyT', 'е'], ['KeyY', 'н'], ['KeyU', 'г'], ['KeyI', 'ш'], ['KeyO', 'щ'], ['KeyP', 'з'], ['BracketLeft', 'х'], ['BracketRight', 'ъ'], ['Backslash', 'ё'], ['Enter', 'Enter'], ['CapsLock', 'CapsLock'], ['KeyA', 'ф'], ['KeyS', 'ы'], ['KeyD', 'в'], ['KeyF', 'а'], ['KeyG', 'п'], ['KeyH', 'р'], ['KeyJ', 'о'], ['KeyK', 'л'], ['KeyL', 'д'], ['Semicolon', 'ж'], ['Quote', "э"], ['ShiftLeft', 'Shift'], ['IntlBackslash', '`'], ['KeyZ', 'я'], ['KeyX', 'ч'], ['KeyC', 'с'], ['KeyV', 'м'], ['KeyB', 'и'], ['KeyN', 'т'], ['KeyM', 'ь'], ['Comma', 'б'], ['Period', 'ю'], ['Slash', '/'], ['ShiftRight', 'Shift'], ['ControlLeft', 'Ctrl'], ['AltLeft', 'Alt'], ['MetaLeft', 'Cmd'], ['Space', ' '], ['MetaRight', 'Cmd'], ['AltRight', 'Alt'], ['ArrowLeft', '←'], ['ArrowUp', '↑'], ['ArrowDown', '↓'], ['ArrowRight', '→']];
const buttonKeyRuShift = [['Backquote', '>'], ['Digit1', '!'], ['Digit2', '"'], ['Digit3', '№'], ['Digit4', '%'], ['Digit5', ':'], ['Digit6', ','], ['Digit7', '.'], ['Digit8', ';'], ['Digit9', '('], ['Digit0', ')'], ['Minus', '_'], ['Equal', '+'], ['Backspace', 'Backspace'], ['Tab', 'Tab'], ['KeyQ', 'Й'], ['KeyW', 'Ц'], ['KeyE', 'У'], ['KeyR', 'К'], ['KeyT', 'Е'], ['KeyY', 'Н'], ['KeyU', 'Г'], ['KeyI', 'Ш'], ['KeyO', 'Щ'], ['KeyP', 'З'], ['BracketLeft', 'Х'], ['BracketRight', 'Ъ'], ['Backslash', 'Ё'], ['Enter', 'Enter'], ['CapsLock', 'CapsLock'], ['KeyA', 'Ф'], ['KeyS', 'Ы'], ['KeyD', 'В'], ['KeyF', 'А'], ['KeyG', 'П'], ['KeyH', 'Р'], ['KeyJ', 'О'], ['KeyK', 'Л'], ['KeyL', 'Д'], ['Semicolon', 'Ж'], ['Quote', "Э"], ['ShiftLeft', 'Shift'], ['IntlBackslash', '['], ['KeyZ', 'Я'], ['KeyX', 'Ч'], ['KeyC', 'С'], ['KeyV', 'М'], ['KeyB', 'И'], ['KeyN', 'Т'], ['KeyM', 'Ь'], ['Comma', 'Б'], ['Period', 'Ю'], ['Slash', '?'], ['ShiftRight', 'Shift'], ['ControlLeft', 'Ctrl'], ['AltLeft', 'Alt'], ['MetaLeft', 'Cmd'], ['Space', ' '], ['MetaRight', 'Cmd'], ['AltRight', 'Alt'], ['ArrowLeft', '←'], ['ArrowUp', '↑'], ['ArrowDown', '↓'], ['ArrowRight', '→']];
const checkBtn = ['Backspace', 'Tab', 'Enter', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'ControlLeft', 'AltRight', 'MetaLeft', 'MetaRight', 'Space'];
 
// Создание необходимых блоков 
const textField = document.createElement('textarea'),
      container = document.createElement('div'),
      keyBoardWrapper = document.createElement('div'),
      text = document.createElement('h3');

//  Добавление класов блокам и их добавление в DOM 
text.classList = "text";
text.innerHTML = 'Клавиатура написана на операционной системе MacOS <br> Для переключения языка используйте комбинацию клавиш AltLeft + Control <br> Чтобы активировать shift, зажмите его и уведите курсор с кнопки, диактивировать можно просто нажав на него';
container.classList = 'container';
keyBoardWrapper.classList = 'key-board-wrapper';
document.body.append(container);
container.append(textField);
container.append(text);
container.append(keyBoardWrapper);

// Класс кнопок
class button {
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
                textField.value += `${this.element.innerText}`
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
        if(this.code == 'ShiftLeft' || this.code == 'ShiftRight'){
            // let shiftState = false;
            this.element.addEventListener('mousedown', () => {
                if(localStorage.getItem('lang') == 'en'){
                    keyBoardWrapper.replaceChildren(keyBoardEnShift);
                    if(this.code === 'ShiftLeft'){
                        document.querySelector('[data="ShiftLeft"]').classList.add('key_active');
                        document.querySelector('[data="ShiftRight"]').classList.remove('key_active');     
                    } else if(this.code === 'ShiftRight'){
                        document.querySelector('[data="ShiftRight"]').classList.add('key_active');  
                        document.querySelector('[data="ShiftLeft"]').classList.remove('key_active');  
                    }
                } else if(localStorage.getItem('lang') == 'ru'){
                    keyBoardWrapper.replaceChildren(keyBoardRuShift);
                    if(this.code === 'ShiftLeft'){
                        document.querySelector('[data="ShiftLeft"]').classList.add('key_active');
                        document.querySelector('[data="ShiftRight"]').classList.remove('key_active');     
                    } else if(this.code === 'ShiftRight'){
                        document.querySelector('[data="ShiftRight"]').classList.add('key_active');  
                        document.querySelector('[data="ShiftLeft"]').classList.remove('key_active');  
                    }
                }
            })
            this.element.addEventListener('mouseup', () => {
                if(localStorage.getItem('lang') == 'en'){
                    keyBoardWrapper.replaceChildren(keyBoardEn);
                } else if(localStorage.getItem('lang') == 'ru'){
                    keyBoardWrapper.replaceChildren(keyBoardRu);
                }
            })
            // this.element.addEventListener('click', () => {
            //     if(shiftState === false){
            //         if(localStorage.getItem('lang') == 'en'){
            //             keyBoardWrapper.replaceChildren(keyBoardEnShift);
            //         } else if(localStorage.getItem('lang') == 'ru'){
            //             keyBoardWrapper.replaceChildren(keyBoardRuShift);
            //         }
            //         shiftState = true;
            //     }else if(shiftState === true){
            //         if(localStorage.getItem('lang') == 'en'){
            //             keyBoardWrapper.replaceChildren(keyBoardEn);
            //         } else if(localStorage.getItem('lang') == 'ru'){
            //             keyBoardWrapper.replaceChildren(keyBoardRu);
            //         }
            //         shiftState = false;
            //     }
            // })
        }
        if(this.code == 'CapsLock'){
            let capsState = false;
            this.element.addEventListener('click', () => {
                this.element.classList.toggle('key_active');
                if(capsState === false) {
                    document.querySelectorAll('.key-button').forEach((e) => {
                        if(e.getAttribute('data').indexOf('Key') >= 0){
                            e.innerHTML = e.innerHTML.toUpperCase();
                            e.value = e.innerHTML.toUpperCase();
                        }
                    })
                    capsState = true
                } else {
                    document.querySelectorAll('.key-button').forEach((e) => {
                        if(e.getAttribute('data').indexOf('Key') >= 0){
                            e.innerHTML = e.innerHTML.toLowerCase();
                            e.value = e.innerHTML.toLowerCase();
                        }
                    })
                    capsState = false
                }
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

// Рендер всех необходимых раскладок
const keyBoardEn = new keyBoard(buttonKeyEn).render(),
      keyBoardRu = new keyBoard(buttonKeyRu).render(),
      keyBoardEnShift = new keyBoard(buttonKeyEnShift).render(),
      keyBoardRuShift = new keyBoard(buttonKeyRuShift).render();

// Работа с shift на физической клавиатуре
document.addEventListener('keydown', (e) => {
    if(e.code === 'ShiftLeft' && localStorage.getItem('lang') == 'en'){
        keyBoardWrapper.replaceChildren(keyBoardEnShift);
    } else if(e.code === 'ShiftLeft' && localStorage.getItem('lang') == 'ru'){
        keyBoardWrapper.replaceChildren(keyBoardRuShift);
    }
})
document.addEventListener('keyup', (e) => {
    if(e.code === 'ShiftLeft' && localStorage.getItem('lang') == 'en'){
        keyBoardWrapper.replaceChildren(keyBoardEn);
    } else if(e.code === 'ShiftLeft' && localStorage.getItem('lang') == 'ru'){
        keyBoardWrapper.replaceChildren(keyBoardRu);
    }
})

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

// Фокус на textarea
document.addEventListener('keydown', () => {
    textField.focus();
})

// Капс на физической клаве
document.addEventListener('keydown', (e) => {
    if(e.code == 'CapsLock'){
        document.querySelectorAll('.key-button').forEach((e) => {
            if(e.getAttribute('data').indexOf('Key') >= 0){
                e.innerHTML = e.innerHTML.toUpperCase();
                e.value = e.innerHTML.toUpperCase();
            }
        })
    }
})
document.addEventListener('keyup', (e) => {
    if(e.code == 'CapsLock') {
        document.querySelectorAll('.key-button').forEach((e) => {
            if(e.getAttribute('data').indexOf('Key') >= 0){
                e.innerHTML = e.innerHTML.toLowerCase();
                e.value = e.innerHTML.toLowerCase();
            }
        })
    }
})