import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <p>
        Made with cheese in{" "}
        <span role="img" aria-label="Swiss flag">
          🇨🇭
        </span>
      </p>
      <div>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 1rem" }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
            width="24"
            height="24"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 1rem" }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            width="24"
            height="24"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
