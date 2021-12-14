// за допомогою jquery я змогла значно зменшити свій код
$(document).ready(MyRandom);
// використовую метод ready() , щоб зробити функцію доступною після завантаження документа.
array1 = [];
array2 = [];
// оголосила масиви

function MyRandom() {
// створила функцію, яка відповідає за рандомне запускання функції, що відповідає за зміну кольору і тд
  array1.push(Math.round(Math.random() * 3) + 1);
  // Метод push() додає один або кілька елементів в кінець масиву і повертає нову довжину масиву. 
  // Функція Math.round() повертає значення числа, округлене до найближчого цілого. 
  // Функція Math.random() повертає псевдовипадкове число з плаваючою комою в діапазоні від 0 до менше 1 
  // з приблизно рівномірним розподілом у цьому діапазоні, яке потім можна масштабувати до бажаного діапазон. 
  for (var i = 0; i < array1.length; i++)
  // створила цикл, який пробіжиться по масиву і буде виконувати певну дію:
    setTimeout(coloring, (i + 1) * 3000, array1[i]);
    // метод setTimeout() встановлює таймер, який виконує функцію(coloring) та який. 
}
function coloring(n) {
// створила функцію
  console.log(n);
  switch (n) {
  // створила перевірку switch, де в залежності який елемент ми виберемо, у такому поміняється колір
    case 1:
      $('#game1').css('background', '#a8adff');
      break;
    case 2:
      $('#game2').css('background', '#865b60');
      break;
    case 3:
      $('#game3').css('background', '#ffc34a');
      break;
    case 4:
      $('#game4').css('background', '#7eff42');
      break;
  }
  setTimeout(function () {
    $('#game1').css('background', '#0062ff');
    $('#game2').css('background', '#ff0019');
    $('#game3').css('background', '#ffaa00');
    $('#game4').css('background', '#3ec400');
  }, 700);
  // функція змінюватиме колір з певним таймером
}

function checkFoo() {
// створила функцію
  var k = 0;
  // оголосила змінну та присвоїла їй значення
  for (var i = 0; i < array2.length; i++)
  // створила цикл for, який пробіжиться по перевірці міняючи змінну та порівнюючи її до розміру одного масиву
    if (array1[i] == array2[i])
    // у перевірці if я порівнюю два масиви
      k++;
      // збільшую на 1 значення змінної k
  if (k == array2.length)
  // перевірка чи рівні k та розмір масиву(2)
    return true;
    // повертаю значення істини, якщо рівні
  return false;
  // повертаю значення хибне, якщо ні
}

$('#game1').click(function () {
// з html-файлу 'присвоюю' до елементів із певним id(game1) функцію, яка запускається при кліку
  array2.push(1);
  // Метод push() додає елемент в кінець масиву і повертає нову довжину масиву. 
  if (checkFoo()) {
  // роблю перевірку 
    if (array2.length == array1.length) {
    // якщо довжини масивів рівні, то:
      array2 = [];
      MyRandom();
      // викликаю функцію
      var right = new Audio('jg-032316-sfx-elearning-correct-answer-sound-1.mp3');
      // присвоюю змінній аудіо
      right.play();
      // виклик фунції плей(включиться звук аудіо)
    }
  } else {
  // якщо ні, то
    var losesound = new Audio('wide-design-z_uk-oshibki-windows.mp3');
    // присвоюю змінній аудіо інше
    losesound.play();
    // виклик фунції плей(включиться звук аудіо)
    alert("Ти програв");
    // виклик діалогово вікна із певним текстом
  }
  $('#game1').css('background', '#a8adff');
  setTimeout(function () {
    $('#game1').css('background', '#0062ff');
  }, 1000);
  // встановила таймер на зміну кольору
});

// створила аналогічні функції пр кліку до решта елементів

$('#game2').click(function () {
// з html-файлу 'присвоюю' до елементів із певним id(game2) функцію, яка запускається при кліку
  array2.push(2);
  // Метод push() додає елементи в кінець масиву і повертає нову довжину масиву. 
  if (checkFoo()) {
    // роблю перевірку 
    if (array2.length == array1.length) {
      // якщо довжини масивів рівні, то:
      array2 = [];
      MyRandom();// викликаю функцію
      var right = new Audio('jg-032316-sfx-elearning-correct-answer-sound-1.mp3');
      // присвоюю змінній аудіо
      right.play();// виклик фунції плей(включиться звук аудіо)
    }
  } else {
    // якщо ні, то
    var losesound = new Audio('wide-design-z_uk-oshibki-windows.mp3');
    // присвоюю змінній інше аудіо
    losesound.play();// виклик фунції плей(включиться звук аудіо)
    alert("Ти програв((((");// виклик діалогово вікна із певним текстом
  }
  $('#game2').css('background', '#bf4e58');
  setTimeout(function () {
    $('#game2').css('background', '#ff0019');
  }, 1000);
  // встановила таймер на зміну кольору
});

$('#game3').click(function () {
// з html-файлу 'присвоюю' до елементів із певним id(game3) функцію, яка запускається при кліку
  array2.push(3);
    // Метод push() додає елементи в кінець масиву і повертає нову довжину масиву. 
  if (checkFoo()) {
    // роблю перевірку 
    if (array2.length == array1.length) {
      array2 = [];
      MyRandom();// викликаю функцію
      var right = new Audio('jg-032316-sfx-elearning-correct-answer-sound-1.mp3');
      // присвоюю змінній аудіо
      right.play();// виклик фунції плей(включиться звук аудіо)
    }
  } else {
    // якщо ні, то
    var losesound = new Audio('wide-design-z_uk-oshibki-windows.mp3');
    // присвоюю змінній інше аудіо
    losesound.play();// виклик фунції плей(включиться звук аудіо)
    alert("Ти програв((((");// виклик діалогово вікна із певним текстом
  }
  $('#game3').css('background', '#ffc34a');
  setTimeout(function () {
    $('#game3').css('background', '#ffaa00');
  }, 1000);
  // встановила таймер на зміну кольору
});

$('#game4').click(function () {
// з html-файлу 'присвоюю' до елементів із певним id(game4) функцію, яка запускається при кліку
  array2.push(4);
  // Метод push() додає елементи в кінець масиву і повертає нову довжину масиву. 
  if (checkFoo()) {
    // роблю перевірку 
    if (array2.length == array1.length) {
      array2 = [];
      MyRandom();// викликаю функцію
      var right = new Audio('jg-032316-sfx-elearning-correct-answer-sound-1.mp3');
      // присвоюю змінній аудіо
      right.play();// виклик фунції плей(включиться звук аудіо)
    }
  } else {
    // якщо ні, то
    var losesound = new Audio('wide-design-z_uk-oshibki-windows.mp3');
    // присвоюю змінній інше аудіо
    losesound.play();// виклик фунції плей(включиться звук аудіо)
    alert("Ти програв((((");// виклик діалогово вікна із певним текстом
  }
  $('#game4').css('background', '#7eff42');
  setTimeout(function () {
    $('#game4').css('background', '#3ec400');
  }, 1000);
  // встановила таймер на зміну кольору
});