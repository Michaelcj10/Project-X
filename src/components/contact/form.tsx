import * as React from "react";
import styled from "styled-components";
import Input from "../atoms/inputs/input";
import Button from "../atoms/buttons/button";
import green from "../../images/y.png";
import { motion } from "framer-motion";
import { useState } from "react";
import SendEmail from "../email/sendEmailScreen";

const InfographicStyle = styled.div`
  background: #fbfbfb;
  padding: 100px 30px 0px;

  .twelve {
    text-align: center;
  }

  img {
    max-width: 100%;
    position: absolute;
  }

  input {
    margin-top: 10px;
  }

  .error {
    margin-bottom: 25px;
    text-align: left;
    color: red;
    font-size: 16px;
  }
`;

const BlobImg = styled.img`
  height: 300px;
  margin-top: -165px;
  max-width: 90%;

  @media only screen and (max-width: 660px) {
    opacity: 0.5;
  }
`;

function Form() {
  const [email, setEmail] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [formError, setError] = useState<string | null>(null);
  const [sending, setSending] = useState<boolean>(false);

  const resetForm = () => {
    setError("");
    setEmail("");
    setMsg("");
  };

  const isValidEmail = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email === "" || msg === "") {
      setError("Enter your details");
      return;
    }
    if (!isValidEmail()) {
      setError("That email doesnt look right......");
      return;
    } else {
      setSending(true);

      setTimeout(() => {
        resetForm();
        setSending(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 4000);
    }
  };

  return (
    <InfographicStyle>
      {sending && <SendEmail />}
      <BlobImg src={green} />
      <div className="infographic-block container-half centered">
        <div className="row">
          <h2>Contact</h2>
          <div className="twelve">
            <form onSubmit={submit}>
              <Input
                value={email}
                onChange={(val: string) => {
                  setError(null);
                  setEmail(val);
                }}
                label="Enter email or phone number"
              />
              <Input
                value={msg}
                onChange={(val: string) => {
                  setError(null);
                  setMsg(val);
                }}
                label="Your message here"
              />

              {formError && <div className="error">{formError} </div>}
              <motion.div whileTap={{ scale: 0.9 }}>
                <Button fullWidth={true} type="submit" text="Submit" />
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </InfographicStyle>
  );
}

export default Form;
