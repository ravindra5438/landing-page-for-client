import "./Header.css";
import showcase1 from "../assets/showcase1.jpg"
import showcase2 from "../assets/showcase2.jpg"
import showcase3 from "../assets/showcase3.jpg"
import showcase4 from "../assets/showcase4.jpg"

function Header() {
  return (
    <header id="header">
      <div className="header__container">
        <div className="header__showcase">
          <div className="showcase__one">
          <img  src={showcase1} alt="showcase1.jpg"/>
          </div>
          <div className="showcase__two">
          <img  src={showcase2} alt="showcase2.jpg"/>

          </div>
          <div className="showcase__three">
          <img  src={showcase3} alt="showcase3.jpg"/>
          </div>
          <div className="showcase__four">
          <img  src={showcase4} alt="showcase4.jpg"/>
          </div>
        </div>
        <div className="header__welcome">

        </div>
      </div>
    </header>
  );
}

export default Header;
