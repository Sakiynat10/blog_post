import { Fragment } from "react";
import "./index.scss";

const AboutPage = () => {
  return (
    <Fragment>
      <section id="about-mission">
        <div className="container">
          <div className="content-mission">
            <div className="mission-side">
              <h5>Our mission</h5>
              <h3>
                Creating valuable content for creatives all around the world
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus.
              </p>
            </div>
            <div className="mission-side">
              <h5>Our Vision</h5>
              <h3>A platform that empowers individuals to improve </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="about-cards">
        <div className="container">
          <div className="card-contents">
          <div className="card-line">
            <card className="card-infos">
              <h3>Our team of creatives</h3>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat.
              </p>
            </card>
            <img src="/public/about-1.png" alt="card-img" />
          </div>
          <div className="card-line">
            <img src="/public/about-2.png" alt="card-img" />
            <card className="card-infos">
              <h3>Our team of creatives</h3>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat.
              </p>
            </card>
          </div>
          </div>

        </div>
      </section>
    </Fragment>
  );
};

export default AboutPage;
