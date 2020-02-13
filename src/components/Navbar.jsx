import React  from 'react';
import {useHistory} from "react-router";

const Navbar = ({darkMode, setDarkMode}) => {
  const history = useHistory();

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1 onClick={() => history.push("/")}>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
