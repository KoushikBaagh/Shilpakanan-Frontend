import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { adminDataOperation } from "../../http";
import { useGlobalContext } from "../../context/context";
import Styles from "./Complaine.module.css";

const Complaine = () => {
  const { user } = useGlobalContext();
  const [complaineData, setComplaineData] = useState({
    subject: "",
    details: "",
  });
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setComplaineData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  const submit = async (e) => {
    e.preventDefault();
    const fieldName = "complaines";
    const dbData = {
      ...complaineData,
      email: user.email,
      houseNo: user.houseNo,
      familyName: user.familyName,
    };
    let reqData = { fieldName, operationName: "create", dbData };
    const { data } = await adminDataOperation({ data: reqData });
    if (data.next === true) {
      alert("Thank you we will resolve your complain soon...");
      history.push("/profile");
    } else {
      alert("please try again");
    }
  };
  useEffect(() => {
    document.title = "Complain - Shilpakanan Phase 3";
  }, []);
  return (
    <>
      <div
        className={`container container-margin-top ${Styles.complaineWrapper}`}
      >
        <h2 className="heading">Complain to Society</h2>
        <p>
          Please provide a detailed description of your concern below. We are
          committed to resolving your issue promptly and efficiently. Thank you
          for bringing this matter to our attention. Your feedback is valuable
          in helping us improve our services.
        </p>
        <form onSubmit={submit} className="box-shadow">
          <label htmlFor="email">Complain subject</label>
          <input
            type="text"
            name="subject"
            value={complaineData.email}
            onChange={handleChange}
            required
            autoFocus
          />
          <label htmlFor="message">Complain details</label>
          <textarea
            name="details"
            rows="5"
            value={complaineData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btnStructure">
            Submit complain
          </button>
        </form>
      </div>
    </>
  );
};

export default Complaine;
