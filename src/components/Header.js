import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
    
    
  };

  return (
    <header>
    <nav className='header'>
      <ScrollLink to="home" smooth={true} duration={500}>
        <div>HOME</div>
      </ScrollLink>
      <ScrollLink to="about" smooth={true} duration={500}>
        <div>ABOUT</div>
      </ScrollLink>
      <ScrollLink to="projects" smooth={true} duration={500}>
        <div>PROJECTS</div>
      </ScrollLink>
      {/* <ScrollLink to="contact" smooth={true} duration={500}>
        <div>CONTACT</div>
      </ScrollLink> */}
    </nav>
  </header>
  );
}

export default Header;
