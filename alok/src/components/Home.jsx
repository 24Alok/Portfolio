
import {motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight,BsChevronDown  } from "react-icons/bs";
import me from "../assets/logo0.png";

const Home = ({ ratio }) => {
  
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Alok Kumar
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a target="blank" href="https://drive.google.com/file/d/1vsQytDiv0UdHZrbZaV-VPkBVJVCBJDfR/view?usp=sharing">Hire Me</a>
            <a target="blank" href="https://chatify-acij.onrender.com/">
              Projects <BsArrowUpRight />
            </a>
          </div>

            <article data-special>
              <p>Contact</p>
              <span>alok2002in@gmail.com</span>
            </article>
        
        </div>
      </section>
      <section>
        <img src={me} alt="Alok" />
      </section>
      <BsChevronDown /> 
    </div>
  );
};

export default Home;
