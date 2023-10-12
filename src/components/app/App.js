import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
import Tasks from '../tasks/Tasks';
import Footer from '../footer/Footer';

function App() {

  const [theme, setTheme] = React.useState(false);

  function handleTheme() {
    setTheme(!theme);
  }

  return (
    <div className={`app ${theme ? 'app_theme_light' : ''}`}>
      <Routes>
        <Route path="/" element={
          <>
            <Header handleTheme={handleTheme}/>
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
