import React from "react";
import "./styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"; // LinkedIn icon
import { faGlobe } from "@fortawesome/free-solid-svg-icons"; // Globe icon
import { faInstagram } from "@fortawesome/free-brands-svg-icons"; // Instagram icon

// Define the links as an object
let Link = {
  linkedin:
    "https://www.linkedin.com/company/caps-centre-for-academic-and-professional-support/mycompany/",
  instagram: "https://www.instagram.com/caps_christuniversity/",
  capsWebsite:
    "https://christuniversity.in/centre-for-academic-and-professional-support",
};

const SocialMedia = () => {
  return (
    <div className="SocialMedia">
      <ul
        style={{ listStyle: "none", display: "flex", gap: "1rem", padding: 0 }}
      >
        <li>
          <a
            href={Link.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a
            href={Link.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a
            href={Link.capsWebsite}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
