import Styles from "./Copyright.module.css";

const Copyright = () => {
  return (
    <div className={`${Styles.copyright}`}>
      <p>
        <a
          href="https://koushikbaagh.github.io/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by Koushik <br /> &copy; 2024 Shilpakanan Phase-III
          Authorities.
        </a>
      </p>
    </div>
  );
};

export default Copyright;
