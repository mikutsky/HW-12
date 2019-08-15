// ЗАДАНИЕ №1
// Создать конструктор для производства автомобилей. Конструктор должен принимать
// марку автомобиля и возраст машины. Конструктор должен иметь метод, который
// возвращает марку, и второй метод, который возвращает год производства машины
// (год текущий минус возраст машины, использовать Date для получения текущего
// года)

// var lexus = new Car(‘lexus’, 2);
// lexus.получитьМарку(); // “Lexus”
// lexus.получитьГодВыпуска(); // 2017 (2019-2);

// Марка машины всегда должна возвращаться с большой буквы!

function Car(brand, age) {
  this.getBrand = () => brand[0].toUpperCase() + brand.slice(1);
  this.getYear = () => new Date().getFullYear() - age;
}

var lexus = new Car("lexus", 2);
console.log(lexus.getBrand());
console.log(lexus.getYear());

// ЗАДАНИЕ №2
// Написать конструктор, который умеет элементарно шифровать строки (например,
// сделать из строки строку-перевертыш, или заменить все символы их цифровым
// представлением, или любой другой метод). Конструктор при инициализации
// получает строку и имеет следующие методы:
// a. показать оригинальную строку
// b. показать зашифрованную строку
// Строки не должны быть доступны через this, только с помощью методов.

function Crypto(str, key) {
  this.getOriginal = () => str;
  this.getEncrypted = () =>
    // я решил использоать метод XOR, так интересней
    Array(Math.ceil(str.length / key.length) + 1)
      .join(key)
      .slice(-str.length)
      .split("")
      .map((char, index) =>
        ("0" + (char.charCodeAt() ^ str.charCodeAt(index)).toString(16)).slice(
          -2
        )
      )
      .join("");
  // для себя дешифратор добавил ;)
  this.getDecrypted = () =>
    Array(Math.ceil(str.length / 2 / key.length) + 1)
      .join(key)
      .slice(-Math.floor(str.length / 2))
      .split("")
      .map((char, index) =>
        String.fromCharCode(
          char.charCodeAt() ^ parseInt(str.slice(index * 2, index * 2 + 2), 16)
        )
      )
      .join("");
}

var enсryp = new Crypto("dmitry mikutsky", "secret key");
console.log(
  `"${enсryp.getOriginal()}"  ===Encrypted XOR==>  "${enсryp.getEncrypted()}"`
);
var decryp = new Crypto(enсryp.getEncrypted(), "secret key");
console.log(
  `"${decryp.getOriginal()}"  ===Decrypted XOR==>  "${decryp.getDecrypted()}"`
);

// ЗАДАНИЕ №3
// Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по
// умолчанию):
// function Component(tagName) {
//   this.tagName = tagName || 'div';
//   this.node = document.createElement(tagName);
// }

// Пример вызова:
// const comp = new Component('span');

// ЗАДАНИЕ №4
// Реализовать конструктор и методы в ES6 синтаксисе:
// ...
// Component.prototype.setText = function (text) {
//   this.node.textContent = text;
// };

class Component {
  constructor(tagName) {
    this.tagName = tagName || "div";
    this.node = document.createElement(this.tagName);
  }
  setText(text) {
    this.node.textContent = text;
  }
}

const comp = new Component("span");
console.dir(comp);

comp.setText(
  'My class "Component", has one method "setText()", and created this node Span :/'
);
document.body.appendChild(comp.node);

// ЗАДАНИЕ №5
// Создать класс калькулятора который будет принимать стартовое значение и у него
// будут методы сложить, вычесть, умножить , разделить. Также у него должны быть
// геттер и сеттер для получения и установки текущего числа с которым производятся
// вычисления.

class Calculator {
  constructor(startValue = 0) {
    this._result = startValue;
  }
  sum(nextValue = this._result) {
    this._result += nextValue;
    return calc;
  }
  sub(nextValue = this._result) {
    this._result -= nextValue;
    return calc;
  }
  mult(nextValue = this._result) {
    this._result *= nextValue;
    return calc;
  }
  div(nextValue = this._result) {
    this._result /= nextValue;
    this._result.toFixed(2);
    return calc;
  }

  set setValue(value) {
    this._result = value;
  }
  get getResult() {
    return this._result.toFixed(2);
  }
}

const calc = new Calculator(12);
calc
  .sum(2)
  .div(2)
  .sub(4)
  .mult();
console.log(`Result: ${calc.getResult}`);

calc.setValue = 19;
calc.div(3);
console.log(`Result: ${calc.getResult}`);

// ЗАДАНИЕ №6
// Есть класс Planet
// function Planet(name) {
//     this.name = name;
//     this.getName = function () {
//         return 'Planet name is ' + this.name;
//     }
// }
// Создать наследника от Planet, который будет называться PlanetWithSatellite
// и будет принимать, кроме name, название спутника (satelliteName).
// Переопределите метод getName для PlanetWithSatellite так, чтобы он возвращал
// ту же самую строчку + дополнительный текст 'The satellite is' + satelliteName.
// Например:
// var earth = new PlanetWithSatellite('earth', 'moon');
// earth.getName(); // 'Planet name is earth. The satellite is moon’

class Planet {
  constructor(name = "unnamed") {
    this.name = name;
  }

  getName() {
    return `Planet name is "${this.name}".`;
  }
}

class PlanetWithSatellite extends Planet {
  constructor(name, satelliteName) {
    super(name);
    this.satelliteName = satelliteName;
  }

  getName() {
    return super.getName() + ` The satellite is "${this.satelliteName}".`;
  }
}

const exoplanet = new Planet("Kepler-22 b");
const exsatellite = new PlanetWithSatellite(
  "Kepler-22 d",
  "Kepler-22 d-Sattelite-c"
);
console.log(exoplanet.getName());
console.log(exsatellite.getName());

// ЗАДАНИЕ №7
// Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод
// “получить количество этажей” и метод “установить количество этажей”).
// Создайте наследников этого класса:
// классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование

// У жилого дома появится свойство “количество квартир на этаже”, а метод
// “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир:
// 5 * количествоКвартир}

// У торгового центра появится свойство “количество магазинов на этаже”, а метод
// “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экземпляр (дом, торговый центр)

class Build {
  constructor(name = "unnamed", levels = 1) {
    this.name = name;
    this.levels = levels;
  }

  getLevels() {
    return { levels: this.levels };
  }

  setLevels(levels) {
    this.levels = levels;
  }
}

class LivingBuild extends Build {
  constructor(name = "unnamed for live", levels = 1, appOnLevel) {
    super(name, levels);
    this.appOnLevel = appOnLevel;
  }
  getLevels() {
    return { levels: this.levels, appTotal: this.levels * this.appOnLevel };
  }
}

class MallBuild extends Build {
  constructor(name = "unnamed for live", levels = 1, shopsOnLevel) {
    super(name, levels);
    this.shopsOnLevel = shopsOnLevel;
  }
  getLevels() {
    return { levels: this.levels, shopsTotal: this.levels * this.shopsOnLevel };
  }
}

const build = new Build("BUILD-Other", 5);
const resident = new LivingBuild("My Resident", 5, 4);
const mall = new MallBuild("My Mall", 3, 2);

build.setLevels(8);
console.log(build.getLevels());
console.log(resident.getLevels());
console.log(mall.getLevels());

// ЗАДАНИЕ №8
// Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом
// “получить информацию” (метод должен вывести имя и цену). Метод должен быть
// объявлен с помощью прототипов (Func.prototype...). Создать два экземпляра
// класса “Мебель”: экземпляр “ОфиснаяМебель” и “Мебель для дома”. Придумайте
// им по одному свойству, которые будут характерны только для этих экземпляров
// (например, для офисной мебели - наличие компьютерного стола или шредера).
// Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.

function Mebel(name = "unnamed", price = 0.0) {
  this.name = name;
  this.price = price;
}

Mebel.prototype.getInfo = function() {
  return console.log(
    "Other info:\n" +
      Object.keys(this).reduce((acc, el) => {
        acc += `${el}: ${this[el]}\n`;
        return acc;
      }, "")
  );
};

const officeMebel = new Mebel("RWB Office", 200.34);
officeMebel.haveTable = true;

const homeMebel = new Mebel("Covalli Home", 1400.99);
homeMebel.style = "classic";

officeMebel.getInfo();
homeMebel.getInfo();

// ЗАДАНИЕ №9
// Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации”
// и методом “получить информацию” (метод должен вывести имя и дату регистрации).
// Метод должен быть объявлен с помощью прототипов (Func.prototype...) Создать
// два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
// true/false, должно быть скрытым). Свойства определяются в момент вызова
// конструктора.
// У класса “Гость” должно быть свойство “срокДействия” (validDate, например),
// содержащее дату (например, одну неделю от момента регистрации).
// У классов-наследников метод “получить информацию” должен так же содержать
// информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)

function User(name = "user", dateReg) {
  this.name = name;
  this.dateReg = dateReg;
}
User.prototype.getInfo = function() {
  return `Name: ${this.name}\nDateReg: ${this.dateReg}`;
};

function Admin(name = "admin", dateReg, superAdmin = false) {
  User.call(this, name, dateReg);
  this._superAdmin = superAdmin;
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;
Admin.prototype.getInfo = function() {
  return (
    User.prototype.getInfo.call(this) + `\nSuper admin: ${this._superAdmin}`
  );
};

function Guest(name = "guest", dateReg, dateEnd) {
  User.call(this, name, dateReg);
  this._dateEnd = dateEnd;
}
Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;
Guest.prototype.getInfo = function() {
  return User.prototype.getInfo.call(this) + `\nDate end: ${this._dateEnd}`;
};

const myUser = new User("Dimon", "15-Aug-2019");
const myAdmin = new Admin("Administrator", "10-Dec-2013", true);
const myGuest = new Guest("Vasya", "04-Aug-2019", "31-Sep-2019");
console.log(myUser.getInfo());
console.log(myAdmin.getInfo());
console.log(myGuest.getInfo());
