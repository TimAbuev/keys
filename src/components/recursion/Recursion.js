import './Recursion.css';
import React from 'react';
import { useState, useEffect } from 'react';

function countFactorialByCycle(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// непонятный вариант вычисления
function countFactorialByRecursion(n) {
  if (n === 0) return 1;
  else return countFactorialByRecursion(n - 1) * n;
}

// понятный вариант вычисления
let s = 1;

function calcFactByRec(n) {
  if (n === 0) return;
  s = s * n;
  calcFactByRec(n - 1);
}

// урок из
// https://www.youtube.com/watch?v=bh5TKVync9M

// задача с подсчётом денег

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// Рекурсивное решение
let sum = 0;
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


function Recursion() {
  const [animationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    handleAnimationClick();
  }, [])

  function handleAnimationClick() {
    setAnimationActive(!animationActive);
  }
  // let position = 0;

  // function recursionAnimation() {
  //   position = position + 5;
  //   if (position > 500) return;

  //   document.querySelector('.recursion__figure').style.left = position + 'px';
  //   animation();
  // }

  // function animation() {
  //   setTimeout(recursionAnimation, 100);
  //   console.log('animation is activated');
  // }

  // animation();


  return (
    <section className="recursion">
      <div
        className={`recursion__figure ${animationActive ? 'rotation' : ''}`}
        onClick={handleAnimationClick}
      ></div>
      <p className='recursion__paragraph'>Результат работы функции : { }</p>
    </section>
  );
}

export default Recursion;