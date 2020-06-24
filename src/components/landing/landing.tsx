import * as React from "react";
import { motion } from "framer-motion";
import Button from "../atoms/buttons/button";
import landingImg from "../../images/shapes.png";
import splat from "../../images/splat.svg";
import logo from "../../images/logo.png";
import styled from "styled-components";
import { useState } from "react";
import Modal from "../atoms/modal/modal";

const LandingStyle = styled.div`
background: #20242f;
  .hero-block {
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 500px;
    height: 100vh;
    width: 100%;
    background-image: url(${landingImg});
    background-repeat: no-repeat;
    background-position: center;
  }

  .hero-block p {
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2rem;
  }

  .hero-block .row {
    display: table-cell;
    vertical-align: middle;
  }

  .hero-block .columns {
    position: relative;
  }

  .hero-block svg {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.5s;
  }

  .hero-block svg:nth-child(1) {
    bottom: -15px;
  }

  .hero-block img {
    width: 300px;
    max-width: 90%;
  }

  button {
    margin-bottom: 50px;
  }

  .twelve {
    min-height: 300px;
    margin-top: -70px;
  }
  .six:nth-of-type(1) {
    margin-top: -50px;
  }
  .six:nth-of-type(2) {
    min-height: 300px;
  }
  #logo {
    width: 100px;
    margin-bottom: 25px;
    position: fixed;
    top: 25px;
    z-index: 99;
    border-radius: 50%;
    left: 25px;
    box-shadow: 0 6px 10px 0 rgba(21,25,68,.12), 0 8px 16px -12px rgba(21,25,68,.05), 0 4px 8px -3px rgba(21,25,68,.02);
    background: #e1e1e199;
    padding: 5px;
    cursor:pointer;
    transition: all 0.5s;
  }
  #logo:hover{
    transform:scale(1.1);
  }
  .splat{
    position: absolute;
    right: 0px;
    top: -20;
    opacity: 0.35;
  }
  h1{
    font-size: 9rem;
    color: white;
  }
`;

function Landing() {
  const [showModal, setModalShowing] = useState(false);
  return (
    <LandingStyle>
        <motion.div
              animate={{ y: 100 }}
              transition={{ ease: "easeOut", duration: 2.5 }}
        >
            <img src={splat} className="splat" />
        </motion.div>
      <img id="logo" src={logo} />
      <div className="hero-block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#23293a"
            fillOpacity="1"
            d="M0,64L34.3,74.7C68.6,85,137,107,206,112C274.3,117,343,107,411,117.3C480,128,549,160,617,192C685.7,224,754,256,823,245.3C891.4,235,960,181,1029,170.7C1097.1,160,1166,192,1234,197.3C1302.9,203,1371,181,1406,170.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          />
        </svg>
        <div className="row">
          <div className="twelve columns centered">
            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
            >
              <h1>Púca Labs
              </h1>
            </motion.div>
            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <p>Elegant and creative solutions to your software needs</p>
            </motion.div>
            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              <Button 
                  type="button" 
                  text="Contact Us"
                  onClick={() => {
                    setModalShowing(true);
                  }}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <Modal
            showModal={showModal} 
            setModalShowing={() => {
                 setModalShowing(!showModal);
            }}
      />
    </LandingStyle>
  );
}

export default Landing;
