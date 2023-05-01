// Сброс таба до дефолта
window.onkeydown = (elem) => {
  if (elem.key === 'Tab') {
    elem.preventDefault();
  } else if (elem.code.indexOf('Key') >= 0) {
    elem.preventDefault();
  } else if (elem.code.indexOf('Digit') >= 0) {
    elem.preventDefault();
  } else if (elem.code.indexOf('Arrow') >= 0) {
    elem.preventDefault();
  }
};

// метод uppercase для capsLock
const upperBtn = () => {
  document.querySelectorAll('.key-button').forEach((elem) => {
    if (elem.getAttribute('data').indexOf('Key') >= 0) {
      const parentKeyBtn = elem.parentNode;
      const element = elem;
      element.innerHTML = elem.innerText.toUpperCase();
      element.value = elem.innerText.toUpperCase();
      parentKeyBtn.replaceChild(element, elem);
    }
  });
};
// метод lowercase для capsLock
const lowerBtn = () => {
  document.querySelectorAll('.key-button').forEach((elem) => {
    if (elem.getAttribute('data').indexOf('Key') >= 0) {
      const parentKeyBtn = elem.parentNode;
      const element = elem;
      element.innerHTML = elem.innerText.toLowerCase();
      element.value = elem.innerText.toLowerCase();
      parentKeyBtn.replaceChild(element, elem);
    }
  });
};

// Массивы раскладок
const buttonKeyEn = [
  ['Backquote', '§'],
  ['Digit1', '1'],
  ['Digit2', '2'],
  ['Digit3', '3'],
  ['Digit4', '4'],
  ['Digit5', '5'],
  ['Digit6', '6'],
  ['Digit7', '7'],
  ['Digit8', '8'],
  ['Digit9', '9'],
  ['Digit0', '0'],
  ['Minus', '-'],
  ['Equal', '='],
  ['Backspace', 'Backspace'],
  ['Tab', 'Tab'],
  ['KeyQ', 'q'],
  ['KeyW', 'w'],
  ['KeyE', 'e'],
  ['KeyR', 'r'],
  ['KeyT', 't'],
  ['KeyY', 'y'],
  ['KeyU', 'u'],
  ['KeyI', 'i'],
  ['KeyO', 'o'],
  ['KeyP', 'p'],
  ['BracketLeft', '['],
  ['BracketRight', ']'],
  ['Backslash', '\\'],
  ['Enter', 'Enter'],
  ['CapsLock', 'CapsLock'],
  ['KeyA', 'a'],
  ['KeyS', 's'],
  ['KeyD', 'd'],
  ['KeyF', 'f'],
  ['KeyG', 'g'],
  ['KeyH', 'h'],
  ['KeyJ', 'j'],
  ['KeyK', 'k'],
  ['KeyL', 'l'],
  ['Semicolon', ';'],
  ['Quote', '\''],
  ['ShiftLeft', 'Shift'],
  ['IntlBackslash', '`'],
  ['KeyZ', 'z'],
  ['KeyX', 'x'],
  ['KeyC', 'c'],
  ['KeyV', 'v'],
  ['KeyB', 'b'],
  ['KeyN', 'n'],
  ['KeyM', 'm'],
  ['Comma', ','],
  ['Period', '.'],
  ['Slash', '/'],
  ['ShiftRight', 'Shift'],
  ['ControlLeft', 'Ctrl'],
  ['AltLeft', 'Alt'],
  ['MetaLeft', 'Cmd'],
  ['Space', ' '],
  ['MetaRight', 'Cmd'],
  ['AltRight', 'Alt'],
  ['ArrowLeft', '←'],
  ['ArrowUp', '↑'],
  ['ArrowDown', '↓'],
  ['ArrowRight', '→'],
];
const buttonKeyEnShift = [
  ['Backquote', '±'],
  ['Digit1', '!'],
  ['Digit2', '@'],
  ['Digit3', '#'],
  ['Digit4', '$'],
  ['Digit5', '%'],
  ['Digit6', '^'],
  ['Digit7', '&'],
  ['Digit8', '*'],
  ['Digit9', '('],
  ['Digit0', ')'],
  ['Minus', '_'],
  ['Equal', '+'],
  ['Backspace', 'Backspace'],
  ['Tab', 'Tab'],
  ['KeyQ', 'Q'],
  ['KeyW', 'W'],
  ['KeyE', 'E'],
  ['KeyR', 'R'],
  ['KeyT', 'T'],
  ['KeyY', 'Y'],
  ['KeyU', 'U'],
  ['KeyI', 'I'],
  ['KeyO', 'O'],
  ['KeyP', 'P'],
  ['BracketLeft', '{'],
  ['BracketRight', '}'],
  ['Backslash', '|'],
  ['Enter', 'Enter'],
  ['CapsLock', 'CapsLock'],
  ['KeyA', 'A'],
  ['KeyS', 'S'],
  ['KeyD', 'D'],
  ['KeyF', 'F'],
  ['KeyG', 'G'],
  ['KeyH', 'H'],
  ['KeyJ', 'J'],
  ['KeyK', 'K'],
  ['KeyL', 'L'],
  ['Semicolon', ':'],
  ['Quote', '\''],
  ['ShiftLeft', 'Shift'],
  ['IntlBackslash', '~'],
  ['KeyZ', 'Z'],
  ['KeyX', 'X'],
  ['KeyC', 'C'],
  ['KeyV', 'V'],
  ['KeyB', 'B'],
  ['KeyN', 'N'],
  ['KeyM', 'M'],
  ['Comma', '<'],
  ['Period', '>'],
  ['Slash', '?'],
  ['ShiftRight', 'Shift'],
  ['ControlLeft', 'Ctrl'],
  ['AltLeft', 'Alt'],
  ['MetaLeft', 'Cmd'],
  ['Space', ' '],
  ['MetaRight', 'Cmd'],
  ['AltRight', 'Alt'],
  ['ArrowLeft', '←'],
  ['ArrowUp', '↑'],
  ['ArrowDown', '↓'],
  ['ArrowRight', '→'],
];
const buttonKeyRu = [
  ['Backquote', '§'],
  ['Digit1', '1'],
  ['Digit2', '2'],
  ['Digit3', '3'],
  ['Digit4', '4'],
  ['Digit5', '5'],
  ['Digit6', '6'],
  ['Digit7', '7'],
  ['Digit8', '8'],
  ['Digit9', '9'],
  ['Digit0', '0'],
  ['Minus', '-'],
  ['Equal', '='],
  ['Backspace', 'Backspace'],
  ['Tab', 'Tab'],
  ['KeyQ', 'й'],
  ['KeyW', 'ц'],
  ['KeyE', 'у'],
  ['KeyR', 'к'],
  ['KeyT', 'е'],
  ['KeyY', 'н'],
  ['KeyU', 'г'],
  ['KeyI', 'ш'],
  ['KeyO', 'щ'],
  ['KeyP', 'з'],
  ['BracketLeft', 'х'],
  ['BracketRight', 'ъ'],
  ['Backslash', 'ё'],
  ['Enter', 'Enter'],
  ['CapsLock', 'CapsLock'],
  ['KeyA', 'ф'],
  ['KeyS', 'ы'],
  ['KeyD', 'в'],
  ['KeyF', 'а'],
  ['KeyG', 'п'],
  ['KeyH', 'р'],
  ['KeyJ', 'о'],
  ['KeyK', 'л'],
  ['KeyL', 'д'],
  ['Semicolon', 'ж'],
  ['Quote', 'э'],
  ['ShiftLeft', 'Shift'],
  ['IntlBackslash', '`'],
  ['KeyZ', 'я'],
  ['KeyX', 'ч'],
  ['KeyC', 'с'],
  ['KeyV', 'м'],
  ['KeyB', 'и'],
  ['KeyN', 'т'],
  ['KeyM', 'ь'],
  ['Comma', 'б'],
  ['Period', 'ю'],
  ['Slash', '/'],
  ['ShiftRight', 'Shift'],
  ['ControlLeft', 'Ctrl'],
  ['AltLeft', 'Alt'],
  ['MetaLeft', 'Cmd'],
  ['Space', ' '],
  ['MetaRight', 'Cmd'],
  ['AltRight', 'Alt'],
  ['ArrowLeft', '←'],
  ['ArrowUp', '↑'],
  ['ArrowDown', '↓'],
  ['ArrowRight', '→'],
];
const buttonKeyRuShift = [
  ['Backquote', '±'],
  ['Digit1', '!'],
  ['Digit2', '\''],
  ['Digit3', '№'],
  ['Digit4', '%'],
  ['Digit5', ':'],
  ['Digit6', ','],
  ['Digit7', '.'],
  ['Digit8', ';'],
  ['Digit9', '('],
  ['Digit0', ')'],
  ['Minus', '_'],
  ['Equal', '+'],
  ['Backspace', 'Backspace'],
  ['Tab', 'Tab'],
  ['KeyQ', 'Й'],
  ['KeyW', 'Ц'],
  ['KeyE', 'У'],
  ['KeyR', 'К'],
  ['KeyT', 'Е'],
  ['KeyY', 'Н'],
  ['KeyU', 'Г'],
  ['KeyI', 'Ш'],
  ['KeyO', 'Щ'],
  ['KeyP', 'З'],
  ['BracketLeft', 'Х'],
  ['BracketRight', 'Ъ'],
  ['Backslash', 'Ё'],
  ['Enter', 'Enter'],
  ['CapsLock', 'CapsLock'],
  ['KeyA', 'Ф'],
  ['KeyS', 'Ы'],
  ['KeyD', 'В'],
  ['KeyF', 'А'],
  ['KeyG', 'П'],
  ['KeyH', 'Р'],
  ['KeyJ', 'О'],
  ['KeyK', 'Л'],
  ['KeyL', 'Д'],
  ['Semicolon', 'Ж'],
  ['Quote', 'Э'],
  ['ShiftLeft', 'Shift'],
  ['IntlBackslash', '['],
  ['KeyZ', 'Я'],
  ['KeyX', 'Ч'],
  ['KeyC', 'С'],
  ['KeyV', 'М'],
  ['KeyB', 'И'],
  ['KeyN', 'Т'],
  ['KeyM', 'Ь'],
  ['Comma', 'Б'],
  ['Period', 'Ю'],
  ['Slash', '?'],
  ['ShiftRight', 'Shift'],
  ['ControlLeft', 'Ctrl'],
  ['AltLeft', 'Alt'],
  ['MetaLeft', 'Cmd'],
  ['Space', ' '],
  ['MetaRight', 'Cmd'],
  ['AltRight', 'Alt'],
  ['ArrowLeft', '←'],
  ['ArrowUp', '↑'],
  ['ArrowDown', '↓'],
  ['ArrowRight', '→'],
];

const checkBtn = [
  'Backspace',
  'Tab',
  'Enter',
  'CapsLock',
  'ShiftLeft',
  'ShiftRight',
  'AltLeft',
  'ControlLeft',
  'AltRight',
  'MetaLeft',
  'MetaRight',
  'Space',
];

// Создание необходимых блоков
const textField = document.createElement('textarea');
const container = document.createElement('div');
const keyBoardWrapper = document.createElement('div');
const text = document.createElement('h3');

//  Добавление класов блокам и их добавление в DOM
text.classList = 'text';
text.innerHTML = 'Клавиатура написана на операционной системе MacOS <br> Для переключения языка используйте комбинацию клавиш Alt + Control';
container.classList = 'container';
keyBoardWrapper.classList = 'key-board-wrapper';
document.body.append(container);
container.append(textField);
container.append(text);
container.append(keyBoardWrapper);

// Класс кнопок
const button = (code, key) => {
  const codeBtn = code;
  const keyBtn = key;
  const elementBtn = document.createElement('div');
  elementBtn.classList = 'key-button';
  elementBtn.setAttribute('data', codeBtn);
  elementBtn.append(keyBtn);

  document.addEventListener('keydown', (e) => {
    if (e.code === codeBtn) {
      elementBtn.classList.add('key_active');
    }
    if (e.code === codeBtn && e.code === 'Tab') {
      textField.value += ' ';
    }
  });
  document.addEventListener('keyup', (e) => {
    if (e.code === codeBtn) {
      elementBtn.classList.remove('key_active');
    }
  });
  elementBtn.addEventListener('mousedown', () => {
    if (checkBtn.indexOf(codeBtn) < 0) {
      textField.value += `${elementBtn.innerText}`;
    }
  });
  if (codeBtn === 'Backspace') {
    elementBtn.addEventListener('mousedown', () => {
      textField.value = textField.value.slice(0, -1);
    });
  }
  if (codeBtn === 'Enter') {
    elementBtn.addEventListener('mousedown', () => {
      textField.value += '\n';
    });
  }
  if (codeBtn === 'Space') {
    elementBtn.addEventListener('mousedown', () => {
      textField.value += ' ';
    });
  }
  if (codeBtn === 'Tab') {
    elementBtn.addEventListener('mousedown', () => {
      textField.value += '    ';
    });
  }
  if (codeBtn === 'CapsLock') {
    let capsState = false;
    elementBtn.addEventListener('mousedown', () => {
      elementBtn.classList.toggle('key_active');
      if (capsState === false) {
        upperBtn();
        capsState = true;
      } else {
        lowerBtn();
        capsState = false;
      }
    });
  }
  return elementBtn;
};

class KeyBoard {
  buttons = [];

  constructor(arr) {
    this.element = document.createElement('div');
    this.element.classList = 'key-board';
    arr.forEach((e) => {
      this.buttons.push(button(e[0], e[1]));
    });
  }

  render() {
    this.buttons.forEach((btn) => {
      this.element.append(btn);
    });
    return this.element;
  }
}

// Рендер всех необходимых раскладок
const keyBoardEn = new KeyBoard(buttonKeyEn).render();
const keyBoardRu = new KeyBoard(buttonKeyRu).render();
const keyBoardEnShift = new KeyBoard(buttonKeyEnShift).render();
const keyBoardRuShift = new KeyBoard(buttonKeyRuShift).render();

// Работа с shift на физической клавиатуре
document.addEventListener('keydown', (e) => {
  if (
    (e.code === 'ShiftLeft' || e.code === 'ShiftRight') && localStorage.getItem('lang') === 'en') {
    keyBoardWrapper.replaceChildren(keyBoardEnShift);
  } else if (
    (e.code === 'ShiftLeft' || e.code === 'ShiftRight') && localStorage.getItem('lang') === 'ru') {
    keyBoardWrapper.replaceChildren(keyBoardRuShift);
  }
});
document.addEventListener('keyup', (e) => {
  if (
    (e.code === 'ShiftLeft' || e.code === 'ShiftRight') && localStorage.getItem('lang') === 'en') {
    keyBoardWrapper.replaceChildren(keyBoardEn);
  } else if (
    (e.code === 'ShiftLeft' || e.code === 'ShiftRight') && localStorage.getItem('lang') === 'ru') {
    keyBoardWrapper.replaceChildren(keyBoardRu);
  }
});

// Проверка localStorage
if (localStorage.getItem('lang') === null) {
  localStorage.setItem('lang', 'en');
}
if (localStorage.getItem('lang') === 'en') {
  keyBoardWrapper.append(keyBoardEn);
} else if (localStorage.getItem('lang') === 'ru') {
  keyBoardWrapper.append(keyBoardRu);
}

// Смена языка
document.addEventListener('keydown', (e) => {
  if (e.altKey && e.code === 'ControlLeft' && localStorage.getItem('lang') === 'en'
  ) {
    keyBoardWrapper.replaceChildren(keyBoardRu);
    localStorage.setItem('lang', 'ru');
  } else if (e.altKey && e.code === 'ControlLeft' && localStorage.getItem('lang') === 'ru'
  ) {
    keyBoardWrapper.replaceChildren(keyBoardEn);
    localStorage.setItem('lang', 'en');
  }
});

// Фокус на textarea
document.addEventListener('keydown', () => {
  textField.focus();
});

// Капс на физической клаве
document.addEventListener('keydown', (e) => {
  if (e.code === 'CapsLock') {
    upperBtn();
  }
});
document.addEventListener('keyup', (e) => {
  if (e.code === 'CapsLock') {
    lowerBtn();
  }
});

// Перехват кликов по клавишам текста
document.addEventListener('keydown', (e) => {
  if (e.code.indexOf('Key') >= 0) {
    document.querySelectorAll('.key-button').forEach((elem) => {
      if (e.code === elem.getAttribute('data')) {
        textField.value += `${elem.innerText}`;
      }
    });
  } else if (e.code.indexOf('Digit') >= 0) {
    document.querySelectorAll('.key-button').forEach((elem) => {
      if (e.code === elem.getAttribute('data')) {
        textField.value += `${elem.innerText}`;
      }
    });
  } else if (e.code.indexOf('Arrow') >= 0) {
    document.querySelectorAll('.key-button').forEach((elem) => {
      if (e.code === elem.getAttribute('data')) {
        textField.value += `${elem.innerText}`;
      }
    });
  }
});

// Работа с шифтами на виртуальной клаве
document.addEventListener('mousedown', (elem) => {
  const shiftLeft = document.querySelector('[data="ShiftLeft"]');
  const shiftRight = document.querySelector('[data="ShiftRight"]');
  if (elem.target === shiftLeft || elem.target === shiftRight) {
    if (localStorage.getItem('lang') === 'en') {
      keyBoardWrapper.replaceChildren(keyBoardEnShift);
      if (elem.target === shiftLeft) {
        document
          .querySelector('[data="ShiftLeft"]')
          .classList.add('key_active');
        document
          .querySelector('[data="ShiftRight"]')
          .classList.remove('key_active');
      } else if (elem.target === shiftRight) {
        document
          .querySelector('[data="ShiftRight"]')
          .classList.add('key_active');
        document
          .querySelector('[data="ShiftLeft"]')
          .classList.remove('key_active');
      }
    } else if (localStorage.getItem('lang') === 'ru') {
      keyBoardWrapper.replaceChildren(keyBoardRuShift);
      if (elem.target === shiftLeft) {
        document
          .querySelector('[data="ShiftLeft"]')
          .classList.add('key_active');
        document
          .querySelector('[data="ShiftRight"]')
          .classList.remove('key_active');
      } else if (elem.target === shiftRight) {
        document
          .querySelector('[data="ShiftRight"]')
          .classList.add('key_active');
        document
          .querySelector('[data="ShiftLeft"]')
          .classList.remove('key_active');
      }
    }
  }
});
document.addEventListener('click', () => {
  if (localStorage.getItem('lang') === 'en') {
    keyBoardWrapper.replaceChildren(keyBoardEn);
  } else if (localStorage.getItem('lang') === 'ru') {
    keyBoardWrapper.replaceChildren(keyBoardRu);
  }
});
