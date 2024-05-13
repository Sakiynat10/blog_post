import { Fragment } from "react";

import "./index.scss"

const AdminAccountPage = () => {
  return (
    <Fragment>
      <section id="account">
        <div className="container">
          <h1>Account</h1>
          <form className="form-groups">
            <input type="text" value={"Abdulaziz"} />
            <input type="text" value={"Programmer"} />
            <input type="text" value={"abdulazizprogrammer"} />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm password" />
            <button type="submit">Save</button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default AdminAccountPage;
