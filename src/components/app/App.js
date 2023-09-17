import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../header/Header'

function App() {

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

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={
          <Header/>
        }>
        </Route>

        <Route path="/tasks" element={
          <>

          </>
        }>
        </Route>

      </Routes>

    </div>
  );
}

export default App;
