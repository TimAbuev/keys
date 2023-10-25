import './Recursion.css';

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
  let out = '$';
  for (let i = 1; i <= 9; i++) {
    out = out + i;
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

// https://www.youtube.com/watch?v=bh5TKVync9M

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// Рекурсивное решение

let s1 = 0;
function moneyRecursion() {
  let m = randomInteger(0, 100);
  console.log('add: ' + m);
  s1 += m;
  console.log('sum: ' + s1);
  if (s1 >= 300) return;
  moneyRecursion();
}

// Циклическое решение

function moneyCycle() {
  let sum = 0;
  while (true) {
    let m = randomInteger(0, 100);
    console.log('add: ' + m);
    sum += m;
    console.log('add: ' + sum);
    if (sum >= 300) return;
  }
}

function Recursion() {
  return (
    <section className="experience">
      <p className='experience__paragraph'>Результат работы функции: {moneyCycle()}</p>
    </section>
  );
}

export default Recursion;