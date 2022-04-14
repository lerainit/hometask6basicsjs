## Экранирование 

«экранирование символов»-
это использование специальных символ как обычных, добавлением  к ним обратную косой черты: \..

Для  специальных символов [ \ ^ $ . | ? * + ( ), нам нужно добавить перед ними \ («экранировать их»).

Также необходимо экранировать кавычки '' "" и круглые скобки ()

```js

let workplace = "factoty "Burevisnyk" ";// ошибка 

// интерпретатор воспринимает кавычки как окончание строки

console.log(workplace);


let workplace  = " factory \" Burevisnyk \" "; 

console.log(workplace);// factory "Burevisnyk"

//интерпретатор воспринимает кавычки как часть текста поэтому код
 //выполняется без ошибок


 alert('Hello I'm Mike');// ошибка

 alert('Hello I\'m Mike');// код работает нормально

 ```

## Cпособы обьявления функций

</hr>

- Function declaration:

функция обьявляется с помощью ключевого слова function

cоздается интерпретатором до начала выполнения Javascript кода, поэтому в коде ее можно вызывать до того места, где она была объявлена.


```js

function introduceMyself(name,surname,age,job){

let userIntroduction = `Let me introduce myself, I am  ${name} ${surname} .I am ${age} years old. My job is a ${job}`

return userIntroduction
}

alert(introduceMyself(gregory,house,44,scientist ))

// ключевое слово function используется один раз при //обьявлении функции Когда вызываем функцию пишем ее //назание и круглые скобки с задаваемыми аргументами 
//либо пустые круглые скобки если у  функции нет  //аргументов

```

- Function expression - функция также объявляется с помощью ключевого слова function, но у нее нет имени, и она записывется в переменную.


```js

const introduceMyself = function(name,surname,age,job){

let userIntroduction = `Let me introduce myself, I am  ${name} ${surname} .I am ${age} years old. My job is a ${job}`

return userIntroduction
}

alert(introduceMyself(gregory,house,44,scientist ))


//в этом случае function также пишется только один раз при обьявлении функции
// 

```

- Named Function expression - функция записывается в переменную, а также имеет свое имя (правда функцию нельзя будет вызвать по этому имени).


```js

const introduceMyself = function sayHi(name,surname,age,job){

let userIntroduction = `Let me introduce myself, I am  ${name} ${surname} .I am ${age} years old. My job is a ${job}`

return userIntroduction
}

alert(introduceMyself(gregory,house,44,scientist ))



```


## Hoisting(Поднятие )

</hr>

объявления переменных и функций попадают в память в процессе фазы компиляции, но остаются в коде на том месте, где вы их объявили.

Это означает что интерпретатор вначле компиляции находит все функции и переменные с данным названием 

Переменные обьявленные устаревшим ключевым словом 'var' могут быть инициализированы и использованы до их объявления. Однако, они не могут быть использованы без инициализации.
Переменные обьявленные с помощью ключевых слов синтаксиса ES2015 'let' и 'const' не могут быть использованы до их обьявления даже если были инициализированы дальше в коде.

```js
num = 6;
num2 = num + 7;
console.log(num2);
var num;
var num2;
// не генерирует ошибку, так как num и num2 объявлен 

```
```js
num = 6;
num2 = num + 7;
console.log(num2);
let num;
let num2;
// при использовании ключевых слов ES2015 выдаст ошибку Такая переменная доступна только после инициализации 

```


Eсли функция обьявлена с помощью декларативного метода то может быть вызвана в до того как она обьявлена но если функция обьявлена с использованием переменных то это выдаст ошибку потому что нельзя получить доступ к переменной до ее обьявления.

```js
dogName("Рекс");

function catName(name) {
  console.log("Мою собаку зовут " + name);
}

//Результатом будет вывод строки: "Мою собаку зовут Рекс"

dogName("Рекс");

const dogName = function(name) {
    
  console.log("Мою собаку зовут " + name);
}

//ошибка невозможно вызать функцию обьявленную в переменной до ее 
//инициализации в коде


```








