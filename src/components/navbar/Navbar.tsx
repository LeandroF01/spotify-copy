const Navbar = () => {
  return (
    <main className="navbar">
      <ul className="navbar__button">
        <button className="navbar__button_before"></button>
        <button className="navbar__button_after"></button>
      </ul>
      <ul className="navbar__info">
        <li className="navbar__info_title">Premium</li>
        <li className="navbar__info_title">Assistance</li>
        <li className="navbar__info_title">Download</li>
      </ul>
      <ul className="navbar__session">
        <button className="navbar__session_register">Register</button>
        <button className="navbar__session_log-in">Log In</button>
      </ul>
    </main>
  );
};

export default Navbar;
