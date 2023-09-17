import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
import Tasks from '../tasks/Tasks';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
          </>
        }>
        </Route>

        <Route path="/tasks" element={
          <>
            <Header />
            <Tasks />
          </>
        }>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
