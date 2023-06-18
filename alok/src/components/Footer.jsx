import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
    <footer id="about" >
      <div>
        <img
          src={"https://media.licdn.com/dms/image/D4D03AQGUeiJtyjbrRw/profile-displayphoto-shrink_800_800/0/1683226945408?e=2147483647&v=beta&t=o5uykxmcIndPxeLcSm0ev2qoW3dbwrc8KGOKsYe5yAg"}
          alt="Founder"
        />

        <h2>Alok Kumar</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>
      <article className="about">
      <h2>About</h2>
      <p>
      I am Alok Kumar from Arwal, Bihar. Currently, I have completed B.Tech in Computer Science and engineering from Motihari College of Engineering, Motihari.
      My hobbies are to play puzzle and vollyball. My strength is: I am adeptive in any environment and i am person of positive attitude as well as smart learner. 
      Apart from this i have interested in Web Development so, i worked more than 3 project on web development with the help of MERN Stack. My Short time goal is to placed in reputed IT company and improve my skill and gain more knowledge in industry.
       That's all about my self..!!
      </p>
        
       
     
      </article>

      <aside>
        <h2>Social Media</h2>

        <article className="linkSection">
          <a href="https://www.linkedin.com/in/alok-kumar-62270b1b2" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/24Alok" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://instagram.com/its.alok88" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://youtube.com/@Dev-Skill" target={"blank"}>
            <AiFillYoutube />
          </a>
         
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
      
    </footer>
    <div className="copyRight">Copyright ©2023 All rights reserved | Alok Kumar | Contact Me +91-8873856392</div>
    </>
  );
};

export default Footer;
