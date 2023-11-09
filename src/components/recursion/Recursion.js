import './Recursion.css';
import React from 'react';

// function f1(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//       result *= i; // result = result * i
//       // result = 1 * 2 = 2
//       // result = 2 * 3 = 6
//       // result = 6 * 4 = 24
//   }
//   return result;
// }

function f1(n) {
  if (n === 0) return 1;
  else return f1(n - 1) * n;
}

function f2() {
  let out = '';
  for (let i = 1; i <= 200; i++) {
    // out += i + ' ';
    out = out + i + ' ';

    // '$' = '$' + 1;
    // '$1' = '$1' + 2;
    // '$12' = '$12' + 3;
    // '$123' = '$123' + 4;
  }
  return out;
}

function f3() {
  let out = 0;
  for (let i = 1; i <= 4; i++) {
    out = out + i;
    // 0 = 0 + 1;
    // 1 = 1 + 2;
    // 3 = 3 + 3;
    // 6 = 6 + 4;
  }
  return out;
}
// урок из
// https://www.youtube.com/watch?v=bh5TKVync9M

// задача с подсчётом денег

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let sum = 0;

// Рекурсивное решение

function moneyRecursion() {
  if (sum >= 300) return;
  let m = randomInteger(0, 100);
  console.log('add: ' + m);
  sum += m;
  console.log('sum: ' + sum);
  moneyRecursion();
}

// Циклическое решение

function moneyCycle() {
  while (true) {
    if (sum >= 300) return;
    let m = randomInteger(0, 100);
    console.log('add: ' + m);
    sum += m;
    console.log('add: ' + sum);
  }
}

function showSmth() {
  moneyCycle();
  return sum;
}



function Recursion() {
  // задача с выводом дочерних элементов

  const [array, setArray] = React.useState([]);
  const newArray = [];
  newArray.split(' ');

  React.useEffect(() => {
    setArray(newArray);
  }, []);

  React.useEffect(() => {
    for (let key in users) {
      userParentRecursion(users[key]);
    }
  }, []);

  const users = {
    "ivanov": {
      age: 25,
      favColor: 'red',
      parent: {
        "ivanov-b": {
          age: 43,
          favColor: 'white',
          parent: {
            "sergeev-a": {
              age: 88,
              parent: {
                "lionenko": {}
              }
            }
          }
        }
      }
    },
    "kostenko": {
      age: 56,
      parent: {
        "ignatenko": {

        },
        "sniezko": {
          age: 45
        }
      }
    }
  }

  function userParentRecursion(obj) {

    if (obj.parent !== undefined) {
      for (let key in obj.parent) {
        console.log(key);
        newArray.push(key);
        userParentRecursion(obj.parent[key]);
      }
    }
  }

  return (
    <section className="experience">
      <p className='experience__paragraph'>(тема рекурсия)array: {array}</p>
      {/* <p className='experience__paragraph'>Результат работы функции: {array}</p> */}
    </section>
  );
}

export default Recursion;