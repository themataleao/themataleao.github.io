import React, { FC } from "react";
import "./Publications.css";
import { Link } from "react-router-dom";
interface PublicationProps {
  width?: string;
}

const Publications: FC<PublicationProps> = ({ width }) => {
  return (
    <div className="publications" style={{ width: width }}>
      <h1>Publications</h1>

      <p>
        <b>
          {" "}
          A Retrieval System for Images and Videos based on Aesthetic Assessment
          of Visuals -{" "}
        </b>
        Daniel Vera Nieto, Saikishore Kalloori, Fabio Zund, Clara Fernandez
        Labrador, Marc Willhaus, Severin Klingler, Markus Gross. "SIGIR '23:
        Proceedings of the 46th International ACM SIGIR Conference on Research
        and Development in Information Retrieval." July 2023, pp. 3180-3184.
        Available at:{" "}
        <a className="link" href="https://doi.org/10.1145/3539618.3591817">
          https://doi.org/10.1145/3539618.3591817
        </a>
        .
      </p>
    </div>
  );
};

export default Publications;
