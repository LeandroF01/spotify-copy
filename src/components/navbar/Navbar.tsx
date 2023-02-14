const Navbar = () => {
  return (
    <main className="navbar">
      <ul className="navbar-button">
        <button className="navbar-button_before"></button>
        <button className="navbar-button_after"></button>
      </ul>
      <ul className="navbar-info">
        <li className="navbar-info_title">Premium</li>
        <li className="navbar-info_title">Assistance</li>
        <li className="navbar-info_title">Download</li>
      </ul>
      <ul className="navbar-session">
        <button className="navbar-session_register">Register</button>
        <button className="navbar-session_log-in">Log In</button>
      </ul>
    </main>
  );
};

export default Navbar;
