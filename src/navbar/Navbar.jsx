import "./Navbar.css";
import logo from "../assets/dummy-logo.png"


const data = [
  { id: 1, link: "#", title: "ABOUT US" },
  { id: 2, link: "#about", title: "CUSTOMERS" },
  { id: 3, link: "#services", title: "PRODUCTS" },
  { id: 4, link: "#portfolio", title: "EXPANSION PLANS" },
  { id: 5, link: "#portfolio", title: "ENGINEERING CAPABILITIES" },
  { id: 6, link: "#contact", title: "CONTACT US" },
];

function Navbar() {
  return (
    <nav id="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <img src={logo} alt="logo.png" />
        </div>
        <ul className='nav__menu'>
            {
              data.map((item) => <li key={item.id}>
                <a href={item.link} >
                  {item.title}
                  </a>
                </li>)
            }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
