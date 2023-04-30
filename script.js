'use strict';

window.onkeydown = evt => {
    if (evt.key == 'Tab') {
        evt.preventDefault();
    }
}

const buttonKeyEn = [['Backquote', '§'], ['Digit1', '1'], ['Digit2', '2'], ['Digit3', '3'], ['Digit4', '4'], ['Digit5', '5'], ['Digit6', '6'], ['Digit7', '7'], ['Digit8', '8'], ['Digit9', '9'], ['Digit0', '0'], ['Minus', '-'], ['Equal', '='], ['Backspace', 'Backspace'], ['Tab', 'Tab'], ['KeyQ', 'q'], ['KeyW', 'w'], ['KeyE', 'e'], ['KeyR', 'r'], ['KeyT', 't'], ['KeyY', 'y'], ['KeyU', 'u'], ['KeyI', 'i'], ['KeyO', 'o'], ['KeyP', 'p'], ['BracketLeft', '['], ['BracketRight', ']'], ['Backslash', '\\'], ['Enter', 'Enter'], ['CapsLock', 'CapsLock'], ['KeyA', 'a'], ['KeyS', 's'], ['KeyD', 'd'], ['KeyF', 'f'], ['KeyG', 'g'], ['KeyH', 'h'], ['KeyJ', 'j'], ['KeyK', 'k'], ['KeyL', 'l'], ['Semicolon', ';'], ['Quote', "'"], ['ShiftLeft', 'Shift'], ['IntlBackslash', '`'], ['KeyZ', 'z'], ['KeyX', 'x'], ['KeyC', 'c'], ['KeyV', 'v'], ['KeyB', 'b'], ['KeyN', 'n'], ['KeyM', 'm'], ['Comma', ','], ['Period', '.'], ['Slash', '/'], ['ShiftRight', 'Shift'], ['ControlLeft', 'Ctrl'], ['AltLeft', 'Alt'], ['MetaLeft', 'Cmd'], ['Space', ' '], ['MetaRight', 'Cmd'], ['AltRight', 'Alt'], ['ArrowLeft', '←'], ['ArrowUp', '↑'], ['ArrowDown', '↓'], ['ArrowRight', '→']];
const buttonKeyEnShift = [['Backquote', '<'], ['Digit1', '!'], ['Digit2', '@'], ['Digit3', '#'], ['Digit4', '$'], ['Digit5', '%'], ['Digit6', '^'], ['Digit7', '&'], ['Digit8', '*'], ['Digit9', '('], ['Digit0', ')'], ['Minus', '_'], ['Equal', '+'], ['Backspace', 'Backspace'], ['Tab', 'Tab'], ['KeyQ', 'Q'], ['KeyW', 'W'], ['KeyE', 'E'], ['KeyR', 'R'], ['KeyT', 'T'], ['KeyY', 'Y'], ['KeyU', 'U'], ['KeyI', 'I'], ['KeyO', 'O'], ['KeyP', 'P'], ['BracketLeft', '{'], ['BracketRight', '}'], ['Backslash', '|'], ['Enter', 'Enter'], ['CapsLock', 'CapsLock'], ['KeyA', 'A'], ['KeyS', 'S'], ['KeyD', 'D'], ['KeyF', 'F'], ['KeyG', 'G'], ['KeyH', 'H'], ['KeyJ', 'J'], ['KeyK', 'K'], ['KeyL', 'L'], ['Semicolon', ':'], ['Quote', '"'], ['ShiftLeft', 'Shift'], ['IntlBackslash', '~'], ['KeyZ', 'Z'], ['KeyX', 'X'], ['KeyC', 'C'], ['KeyV', 'V'], ['KeyB', 'B'], ['KeyN', 'N'], ['KeyM', 'M'], ['Comma', '<'], ['Period', '>'], ['Slash', '?'], ['ShiftRight', 'Shift'], ['ControlLeft', 'Ctrl'], ['AltLeft', 'Alt'], ['MetaLeft', 'Cmd'], ['Space', ' '], ['MetaRight', 'Cmd'], ['AltRight', 'Alt'], ['ArrowLeft', '←'], ['ArrowUp', '↑'], ['ArrowDown', '↓'], ['ArrowRight', '→']];
const buttonKeyRu = [['Backquote', '±'], ['Digit1', '1'], ['Digit2', '2'], ['Digit3', '3'], ['Digit4', '4'], ['Digit5', '5'], ['Digit6', '6'], ['Digit7', '7'], ['Digit8', '8'], ['Digit9', '9'], ['Digit0', '0'], ['Minus', '-'], ['Equal', '='], ['Backspace', 'Backspace'], ['Tab', 'Tab'], ['KeyQ', 'й'], ['KeyW', 'ц'], ['KeyE', 'у'], ['KeyR', 'к'], ['KeyT', 'е'], ['KeyY', 'н'], ['KeyU', 'г'], ['KeyI', 'ш'], ['KeyO', 'щ'], ['KeyP', 'з'], ['BracketLeft', 'х'], ['BracketRight', 'ъ'], ['Backslash', 'ё'], ['Enter', 'Enter'], ['CapsLock', 'CapsLock'], ['KeyA', 'ф'], ['KeyS', 'ы'], ['KeyD', 'в'], ['KeyF', 'а'], ['KeyG', 'п'], ['KeyH', 'р'], ['KeyJ', 'о'], ['KeyK', 'л'], ['KeyL', 'д'], ['Semicolon', 'ж'], ['Quote', "э"], ['ShiftLeft', 'Shift'], ['IntlBackslash', '`'], ['KeyZ', 'я'], ['KeyX', 'ч'], ['KeyC', 'с'], ['KeyV', 'м'], ['KeyB', 'и'], ['KeyN', 'т'], ['KeyM', 'ь'], ['Comma', 'б'], ['Period', 'ю'], ['Slash', '/'], ['ShiftRight', 'Shift'], ['ControlLeft', 'Ctrl'], ['AltLeft', 'Alt'], ['MetaLeft', 'Cmd'], ['Space', ' '], ['MetaRight', 'Cmd'], ['AltRight', 'Alt'], ['ArrowLeft', '←'], ['ArrowUp', '↑'], ['ArrowDown', '↓'], ['ArrowRight', '→']];
const buttonKeyRuShift = [['Backquote', '>'], ['Digit1', '!'], ['Digit2', '"'], ['Digit3', '№'], ['Digit4', '%'], ['Digit5', ':'], ['Digit6', ','], ['Digit7', '.'], ['Digit8', ';'], ['Digit9', '('], ['Digit0', ')'], ['Minus', '_'], ['Equal', '+'], ['Backspace', 'Backspace'], ['Tab', 'Tab'], ['KeyQ', 'Й'], ['KeyW', 'Ц'], ['KeyE', 'У'], ['KeyR', 'К'], ['KeyT', 'Е'], ['KeyY', 'Н'], ['KeyU', 'Г'], ['KeyI', 'Ш'], ['KeyO', 'Щ'], ['KeyP', 'З'], ['BracketLeft', 'Х'], ['BracketRight', 'Ъ'], ['Backslash', 'Ё'], ['Enter', 'Enter'], ['CapsLock', 'CapsLock'], ['KeyA', 'Ф'], ['KeyS', 'Ы'], ['KeyD', 'В'], ['KeyF', 'А'], ['KeyG', 'П'], ['KeyH', 'Р'], ['KeyJ', 'О'], ['KeyK', 'Л'], ['KeyL', 'Д'], ['Semicolon', 'Ж'], ['Quote', "Э"], ['ShiftLeft', 'Shift'], ['IntlBackslash', '['], ['KeyZ', 'Я'], ['KeyX', 'Ч'], ['KeyC', 'С'], ['KeyV', 'М'], ['KeyB', 'И'], ['KeyN', 'Т'], ['KeyM', 'Ь'], ['Comma', 'Б'], ['Period', 'Ю'], ['Slash', '?'], ['ShiftRight', 'Shift'], ['ControlLeft', 'Ctrl'], ['AltLeft', 'Alt'], ['MetaLeft', 'Cmd'], ['Space', ' '], ['MetaRight', 'Cmd'], ['AltRight', 'Alt'], ['ArrowLeft', '←'], ['ArrowUp', '↑'], ['ArrowDown', '↓'], ['ArrowRight', '→']];
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
    // code;
    // key;
    // element;
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
      keyBoardRu = new keyBoard(buttonKeyRu).render(),
      keyBoardEnShift = new keyBoard(buttonKeyEnShift).render(),
      keyBoardRuShift = new keyBoard(buttonKeyRuShift).render();

// Работа с shift
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

document.addEventListener('keydown', () => {
    textField.focus();
})