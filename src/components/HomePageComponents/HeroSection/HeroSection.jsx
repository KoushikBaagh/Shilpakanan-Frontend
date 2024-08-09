import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./textAnimation.css";
import Styles from "./HeroSection.module.css";
import anime from "animejs/lib/anime.min.js";
import { useGlobalContext } from "../../../context/context";
import LazyLoad from "react-lazy-load";

const HeroSection = () => {
  const { isAuth } = useGlobalContext();
  useEffect(() => {
    var textWrapper = document.querySelector(".hero-heading .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: false }).add({
      targets: ".hero-heading .letter",
      translateY: ["1.1em", 0],
      translateZ: 0,
      duration: 750,
      delay: (el, i) => 70 * i,
    });
  }, []);

  return (
    <div className={`${Styles.heroWrapper} container`}>
      <div className={Styles.rightSide}>
        <h1 className="hero-heading">
          <span className="text-wrapper">
            <span className="letters no-wrap">Shilpakanan Phase-III</span>
          </span>
        </h1>
        <h3>
          Durgapur's{" "}
          <span style={{ color: "var(--thirdary-color)" }}>Top </span>
          Society
        </h3>
        <p>
          Experience harmonious living with nature and ample space. Enjoy 24/7
          security with surveillance cameras, guards, and secure fencing, all
          amidst lush greenery. Shilpakanan Phase-III is renowned as the green
          society of Durgapur.{" "}
        </p>
        <button className={`btnStructure ${Styles.btn}`}>
          <span>
            <Link to="/register">
              {!isAuth ? "REGISTER YOUR FAMILY" : "GO TO PROFILE"}
            </Link>
          </span>
          <div>
            <img src="./images/icons/arrow.svg" alt="" />
          </div>
        </button>
      </div>
      <div className={Styles.leftSide}>
        <LazyLoad>
          <video
            src={require("./images/img/Shilpakanan_Phase-3_Drone_Low.mp4")}
            poster={require("./images/img/video-cover.webp?v=1")}
            data-aos="fade-down"
            autoPlay
            muted
            loop
            className={`${Styles.videoPlayer} ${Styles.media}`}
          >
            Your browser does not support the video element.
          </video>
        </LazyLoad>
        <img
          src={require("./images/img/residency.webp?v=1")}
          data-aos="fade-left"
          className={`${Styles.residencyImg} ${Styles.media}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;

///////////////////////////////////////////////////////  GLASS PANEL EFFECT GONE WRONG //////////////////////////////////////////

// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./textAnimation.css";
// import Styles from "./HeroSection.module.css";
// import anime from "animejs/lib/anime.min.js";
// import { useGlobalContext } from "../../../context/context";

// const HeroSection = () => {
//   const { isAuth } = useGlobalContext();

//   useEffect(() => {
//     var textWrapper = document.querySelector(".hero-heading .letters");
//     textWrapper.innerHTML = textWrapper.textContent.replace(
//       /\S/g,
//       "<span class='letter'>$&</span>"
//     );

//     anime.timeline({ loop: false }).add({
//       targets: ".hero-heading .letter",
//       translateY: ["1.1em", 0],
//       translateZ: 0,
//       duration: 750,
//       delay: (el, i) => 70 * i,
//     });
//   }, []);

//   return (
//     <div className={`${Styles.heroWrapper} container ${Styles.glassEffect}`}>
//       <div className={`${Styles.rightSide} ${Styles.glassEffect}`}>
//         <h1 className="hero-heading">
//           <span className="text-wrapper">
//             <span className="letters no-wrap">Shilpakanan Ph-III</span>
//           </span>
//         </h1>
//         <h3>
//           Durgapur's{" "}
//           <span style={{ color: "var(--thirdary-color)" }}>Top </span>
//           Society
//         </h3>
//         <p>
//           Experience harmonious living with nature and ample space. Enjoy 24/7
//           security with surveillance cameras, guards, and secure fencing, all
//           amidst lush greenery. Shilpakanan Ph-III is renowned as the green
//           society of Durgapur.{" "}
//         </p>
//         <button className={`btnStructure ${Styles.btn}`}>
//           <span>
//             <Link to="/register">
//               {!isAuth ? "REGISTER YOUR FAMILY" : "GO TO PROFILE"}
//             </Link>
//           </span>
//           <div>
//             <img src="./images/icons/arrow.svg" alt="" />
//           </div>
//         </button>
//       </div>
//       <div className={`${Styles.leftSide} ${Styles.glassEffect}`}>
//         <video
//           src={require("./images/img/Drone_Video_Shilpakanan_Phase_III.mp4")}
//           data-aos="fade-down"
//           controls
//           autoPlay
//           muted
//           className={`${Styles.videoPlayer} ${Styles.media}`}
//         >
//           Your browser does not support the video tag.
//         </video>
//         <img
//           src="./images/img/residency.webp"
//           data-aos="fade-left"
//           className={`${Styles.residencyImg} ${Styles.media}`}
//           alt=""
//         />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
