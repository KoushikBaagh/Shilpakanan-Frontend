import Styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { Copyright } from "../../../import";

const Footer = () => {
  return (
    <>
      <div className={`${Styles.footerWrapper}`}>
        <div className={`container ${Styles.footer}`}>
          <div className={`${Styles.aboutSociety}`}>
            <div>
              <h2>Contact us</h2>
              <p>
                <i className="fas fa-envelope"></i>
                <span> ABC@gmail.com</span>
              </p>
              <p style={{ alignItems: "flex-start" }}>
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  Shilpakanan Phase-III ,Bidhannagar <br /> Durgapur,West
                  Bengal,
                  <br /> India.
                </span>
              </p>
            </div>
          </div>
          <div className={`${Styles.quickLinks}`}>
            <div>
              <h2>Quick Links</h2>
              <ul>
                <Link to="/2dview">
                  <li>2D view</li>
                </Link>
                <Link to="/advertise">
                  <li>Advertise</li>
                </Link>
                <Link to="/gallery">
                  <li>Gallery</li>
                </Link>
                <Link to="/contact">
                  <li>Contact us</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className={`${Styles.eventsPlanning}`}>
            <div>
              <h2>Event Planning Guidelines</h2>
              <p>
                All events held within the society require prior authorization
                from the society administration.
              </p>
              <Link to="/contact">
                <button className="btnStructure">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className={Styles.imagesWarning}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Any Sort of Warning</p>
      </div> */}
      <Copyright />
    </>
  );
};

export default Footer;
