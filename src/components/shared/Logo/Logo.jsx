import Styles from "./Logo.module.css";

const Logo = () => {
  return (
    <>
      <a href="/" className={Styles.logo}>
        <div>
          <h3>
            <i className="fas fa-home"></i> Shilpakanan Phase-III
          </h3>
        </div>
      </a>
    </>
  );
};

export default Logo;
