import { Fragment } from "react";

import "./index.scss";

const RegisterPage = () => {
  return (
    <Fragment>
      <section id="register">
        <div className="container">
          <h1>Register</h1>
          <form className="form-groups">
            <input type="text" placeholder="Firstname" />
            <input type="text" placeholder="Lastname" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Confirm password" />
            <button type="submit">Register</button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default RegisterPage;
