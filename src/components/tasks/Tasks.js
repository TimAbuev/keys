import './Tasks.css';

function charConcat(str) {
  var i = 1;
  var res = '';
  while (str.length > 1) {
    res += str[0] + str[str.length - 1] + i;
    i++;
    str = str.slice(1, -1)
  }
  return res;
}

function to24hourtime(hour, minute, period) {
  let result;
  // AM
  if (period === 'am') {

    if (hour === 12) {
      if (minute < 10) {
        result = `0${hour - 12}0${minute}`;
      } else {
        result = `0${hour - 12}${minute}`;
      }
    }

    else if (hour < 10 && minute < 10) {
      result = `0${hour}0${minute}`;
    } else if (hour < 10) {
      result = `0${hour}${minute}`;
    } else if (minute < 10) {
      result = `${hour}0${minute}`;
    } else {
      result = `${hour}${minute}`;
    }
  }
  // PM 
  else if (period === 'pm') {

    if (hour === 12) {
      if (minute < 10) {
        result = `120${minute}`;
      } else {
        result = `12${minute}`;
      }
    }

    else if (minute < 10) {
      result = `${hour + 12}0${minute}`;
    } else {
      result = `${hour + 12}${minute}`;
    }

  }

  return result;
}

function getProperty(obj, path) {
  let arr = path.split('.');

  for(let i = 0; i < arr.length; i++) {
    obj = obj[arr[i]];
  }
  return obj;
}

const object = {
  one: 1,
  two: {
    three: {
      egg: 'pet',
    }
  },
  four: 4
};

function Tasks() {
  return (
    <section className="tasks">
      <p>Результат работы функции charConcat: {charConcat('honda')}</p>
      <p>Результат работы функции to24hourtime: {to24hourtime(1, 0, 'pm')}</p>
      <p>Результат работы функции getProperty: {
        getProperty(object, 'two.three.egg') // 3
      }
      </p>
    </section>
  );
}

export default Tasks;