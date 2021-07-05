import { Parallax, Background } from "react-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faInfoCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const Header = () => (
  <Parallax
    blur={0}
    bgImage="./nature-bg-2.jpg"
    bgImageAlt="a background image of a natural landscape"
    strength={200}
  >
    <h1 className="header-name">
      Joia<br></br>
      <span className="header-second">Creative</span>
    </h1>
  </Parallax>
);

export default Header;
