import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { adminDataOperation } from "../../http";
import { Copyright } from "../../import";
import Styles from "./Contact.module.css";

const Contact = () => {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  const submit = async (e) => {
    e.preventDefault();
    const fieldName = "contacts";
    let reqData = {
      fieldName,
      operationName: "create",
      dbData: contactFormData,
    };
    const { data } = await adminDataOperation({ data: reqData });
    if (data.next === true) {
      alert("Thank you we will Contact soon...");
      history.push("/");
    } else {
      alert("please try again !");
    }
  };
  useEffect(() => {
    document.title = "ContactUs - Shilpakanan Phase 3";
  }, []);
  return (
    <>
      <div className="container container-margin-top">
        <h2
          className="heading"
          data-aos="zoom-in"
          style={{ marginTop: "30px" }}
        >
          Contact To Society
        </h2>
        <div className={` ${Styles.contactWrapper}`}>
          <form onSubmit={submit} data-aos="zoom-in" className="box-shadow">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={contactFormData.name}
              onChange={handleChange}
              required
              autoFocus
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={contactFormData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              rows="5"
              value={contactFormData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btnStructure">
              Send Message
            </button>
          </form>
          <div className={`${Styles.rightSide}`}>
            <div
              className={`box-shadow ${Styles.contactEmail}`}
              data-aos="zoom-in"
            >
              <h3>Email</h3>
              <p>
                <i className="fas fa-envelope"></i>
                ABC@gmail.com
              </p>
            </div>
            <div
              className={`box-shadow ${Styles.contactLocation}`}
              data-aos="zoom-in"
            >
              <h3>Location</h3>
              <p>
                Shilpakanan Phase-III near Dr.B.C.Roy Polytechnique,
                Bidhanangar, Durgapur-713206, West Bengal, India.
              </p>
              <a
                href="https://www.google.com/maps?q=Shilpakanan+Phase-III+near+Dr.B.C.Roy+Polytechnique,+Bidhanangar,+Durgapur-713206,+West+Bengal,+India"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/free-google-map-461800.png?f=webp&w=256"
                  alt="Google Maps"
                  style={{ width: "350px", height: "300px" }}
                />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Contact;
