import React from "react";
import { AiOutlineMenu,AiOutlineMail} from "react-icons/ai";





const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>Alok</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#skill">
      Skills
      </a>
      
      <a onClick={() => setMenuOpen(false)} href="#experiences">
        Experience
      </a>
      <a onClick={() => setMenuOpen(false)} href="#education">
      Education
      </a>
      
      <a onClick={() => setMenuOpen(false)} href="#achievements">
      Achievements
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
      <a onClick={() => setMenuOpen(false)} href="#about">
        About
      </a>
    </div>
    <a target="blank" href=" "> <button> Resume </button></a>
    
  </>
);

export default Header;
