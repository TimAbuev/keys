import './Experience.css';

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
      userParentRecursion(obj.parent[key]);
    }
  }
}

for(let key in users) {
  userParentRecursion(users[key]);
}


function Experience() {
  return (
    <section className="experience">
      <div className='experience__figure'></div>
      <p className='experience__paragraph'>Exp</p>
      {/* <p>Результат работы функции newF: {newF(12)}</p> */}
      <p className='experience__paragraph'>Результат работы функции: { }</p>
    </section>
  );
}

export default Experience;