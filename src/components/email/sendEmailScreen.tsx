/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";
import mail from "../../images/design.png";
const SendEmailStyle = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: #fff100;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .row {
    width: 100%;
    display: block;
    margin: auto;
    text-align: center;
  }

  p {
    margin-top: 25px;
    font-family: Mabry-Bold;
  }
`;

function SendEmail() {
  return (
    <SendEmailStyle>
      <div className="row">
        <img
          style={{ position: "relative", width: "30%", maxWidth: "250px" }}
          src={mail}
          alt="mail"
        />
        <p>Message sent!</p>
      </div>
    </SendEmailStyle>
  );
}

export default SendEmail;
