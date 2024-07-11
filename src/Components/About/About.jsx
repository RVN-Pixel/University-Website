import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          afojflkdjsflk jsdklfsj dldsj ofi jasoifsaklfj asldfois gjo fklsj
          flkdsa jfklsd jfklsogjlif jalifjlkajgklaj glkadjgk ldjglsd;f oalkfkla
          j lkahflkjs dliint main i for the bst in the or d
        </p>
        <p>
          aingi lfidsnfl isdaig lfjai lpsdf asldfjslfjaslkf jioajfmlafjoff
          fofskfj sig fioahfoia jslf ifas jifjsidf nksdaf io senf sdfksf
          oghnfioahg fklahgi onlfi
        </p>
        <p>
          jk faig kfmkldsjf ionfklh tafnkdjf kljdsfilasmfom flaj foajffmdkl ihgl
          i aj f klsajgojlk jsail fjkl jflj aoifh os ajf o fialshfj klas lj foi
          ahfoamfoa
        </p>
      </div>
    </div>
  );
};

export default About;
