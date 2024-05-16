import { Fragment, useContext, useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import request from "../../../service/request";
import { ROLE, TOKEN } from "../../../constants";

import "./index.scss";
import { AuthContext } from "../../../context";
import loginSchema from "../../../scheme/loginSchema";
import LoadingLogin from "../../../components/loading/loading-login";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const { setIsAuth, setRole } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    handleChange,
    values: { username, password },
    errors,
    touched,
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
  });

  const login = async (e) => {
    try {
      e.preventDefault();
      const { username, password } = e.currentTarget.elements;
      const user = {
        username: username.value,
        password: password.value,
      };
      setLoading(true);
      const {
        data: { role, token },
      } = await request.post("auth/login", user);
      console.log(role);
      console.log(token);
      if (role === "user") {
        navigate("/my-posts");
      } else if (role === "admin") {
        navigate("/admin/dashboard");
      }
      Cookies.set(TOKEN, token);
      localStorage.setItem(ROLE, role);
      setIsAuth(true);
      setRole(role);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Fragment>
      <section id="login">
        <div className="container">
          <h1>Login</h1>
          <form onSubmit={login} className="form-groups">
            <input
              onChange={handleChange}
              value={username}
              placeholder="Username"
              type="text"
              id="username"
              name="username"
              className="form-control"
            />
            {touched.username && errors.username ? (
              <div>{errors.username}</div>
            ) : null}
            <input
              onChange={handleChange}
              value={password}
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              className="form-control"
            />
            {touched.password && errors.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit" value="Login" disabled={loading}>
              Login
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default LoginPage;
