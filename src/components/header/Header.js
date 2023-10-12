import './Header.css';

function Header(props) {
  const {
    handleTheme,
  } = props;

  return (
    <header className='header'>
      <button className='button' onClick={handleTheme}>change theme</button>
      <p>Welcome</p>
    </header>
  );
}

export default Header;