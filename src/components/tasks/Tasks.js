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

function Tasks() {
  return (
    <section className="tasks">
      <p>Здесь будут задания</p>
      <p>Резульат работы функции charConcat: {charConcat('honda')}</p>
    </section>
  );
}

export default Tasks;