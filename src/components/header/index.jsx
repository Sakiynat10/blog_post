import { NavLink, useNavigate } from "react-router-dom";

import "./index.scss";
import { Fragment, useContext, useState } from "react";
import Cookies from "js-cookie";

import { TOKEN } from "../../constants";
import { AuthContext } from "../../context";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { isAuth, setIsAuth, setRole } = useContext(AuthContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const navigate = useNavigate();

  const logout = () => {
    Cookies.remove(TOKEN);
    navigate("/");
    setIsAuth(false);
    setRole(null);
  };

  return (
    <Fragment>
      <nav>
        <div className="nav-content container">
          {isAuth ? (
            <NavLink className="my-blog-link" to={"/my-posts"}>
              My-blog
            </NavLink>
          ) : (
            <NavLink to={"/"} className="nav-left">
              <img src="/logo.svg" alt="logo" />
            </NavLink>
          )}
          <div className={toggle ? "nav-right" : "nav-right"}>
            <ul className="nav-menu">
              <li className="nav-item">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/posts">Blog</NavLink>
              </li>
              <li className="nav-item">
                {isAuth ? <NavLink to="/my-posts">My-posts</NavLink> : <NavLink to="/about">About Us</NavLink>}
              </li>
              <li className="nav-item">
                {isAuth ? (
                  <NavLink to="/account">Account</NavLink>
                ) : (
                  <NavLink to="/register">Register</NavLink>
                )}
              </li>
            </ul>
            {isAuth ? (
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            ) : (
              <NavLink to="login" className="login-link">
                login
              </NavLink>
            )}
            <div className="menu-img">
              {toggle ? (
                <img
                  className="toggle"
                  src="/close.svg"
                  onClick={handleToggle}
                  alt=""
                />
              ) : (
                <img
                  src="/menu.svg"
                  onClick={handleToggle}
                  className="toggle"
                  alt="logo"
                />
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className={toggle ? "none-toggle nav-toggle" : " none-toggle"}>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="posts">Blog</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="about">About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="register">Register</NavLink>
          </li>
        </ul>
        {isAuth ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <NavLink to="/login" className="login-link">
            login
          </NavLink>
        )}
      </div>
    </Fragment>
  );
};

export default Header;
