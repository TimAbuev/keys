import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
import Tasks from '../tasks/Tasks';
import Footer from '../footer/Footer';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Footer />
          </>
        }>
        </Route>

        <Route path="/tasks" element={
          <>
            <Header />
            <Tasks />
            <Footer />
          </>
        }>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
