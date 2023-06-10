import React from "react";
import { motion } from "framer-motion";

import { BsFillMortarboardFill } from "react-icons/bs";

const Education = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="education">
      <h2><BsFillMortarboardFill/> Education</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3><BsFillMortarboardFill/></h3>
          
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        > 
         <h3>10th</h3>
         <span>NNH/School Niranjanpur</span>
         <h4>(2016)</h4> 
         <h4>74.4%</h4>

          
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <h3>12th</h3>
          <span>SDS College, Kaler, Arwal</span>
          <h4>(2016-18)</h4>
          <h4>61.4%</h4>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
           <h3>B.Tech</h3>
          <span>Motihari College of Engineering, Motihari</span>
          <h4>(2018-22)</h4>
          <h4>72%</h4>
        </motion.div>
      </section>
    </div>
  );
};

export default Education;
