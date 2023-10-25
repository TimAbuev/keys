import './Experience.css';

function f1(n) {
  if (n === 0) return 1;
  else return f1(n - 1) * n;
}

function Experience() {
  return (
    <section className="experience">
      <p className='experience__paragraph'>Exp</p>
      {/* <p>Результат работы функции newF: {newF(12)}</p> */}
      <p className='experience__paragraph'>Результат работы функции: {f1(4)}</p>
    </section>
  );
}

export default Experience;