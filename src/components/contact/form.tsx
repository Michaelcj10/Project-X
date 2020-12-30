/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";
import Input from "../atoms/inputs/input";
import Button from "../atoms/buttons/button";
import { useState } from "react";
import { Row, Col } from "react-grid";
import Slide from "react-reveal/Slide";
import { makeGet } from "../../api/fetchApi";

const InfographicStyle = styled.div`
  position: relative;
  text-align: center;
  padding: 150px 10% 150px 10%;
  background: #202133;

  @media (max-width: 768px) {
    padding: 50px 25px;
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
const Title = styled.h2`
  font-size: 40px;
  color: #fff;

  margin-bottom: 10px;
`;
const StyledBreak = styled.div`
  display: block;
  height: 2px;
  width: 50%;
  margin-bottom: 50px;
  background: #fff;
  margin: 0px auto 50px auto;
`;

const SubTitle = styled.p`
  color: #fff;
  padding: 0;
  font-size: 16px;
  margin-left: 5px;
`;
const Content = styled(Col)`
  margin: auto;
`;
function Form() {
  const [email, setEmail] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [formError, setError] = useState<string | null>(null);

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
      makeGet({
        email: email,
        message: msg,
      });
      resetForm();
    }
  };

  return (
    <InfographicStyle>
      <Row>
        <Col xs={12} md={6}>
          something
        </Col>
        <Content xs={12} md={6}>
          <Slide bottom={true}>
            <Title>Contact us </Title>
          </Slide>
          <SubTitle>
            Contact us now to get a free quote and begin growing your business
          </SubTitle>
          <StyledBreak />
          <form data-netlify="true" name="contact" onSubmit={submit}>
            <input type="hidden" name="form-name" value="contact" />
            <Input
              value={email}
              onChange={(val: string) => {
                setError(null);
                setEmail(val);
              }}
              name="email"
              label="Enter email or phone number"
            />
            <Input
              value={msg}
              onChange={(val: string) => {
                setError(null);
                setMsg(val);
              }}
              label="Your message here"
              name="message"
            />

            {formError && <div className="error">{formError} </div>}

            <Button
              background="#ffa91a"
              fullWidth={true}
              type="submit"
              text="Submit"
            />
          </form>
        </Content>
      </Row>
    </InfographicStyle>
  );
}

export default Form;
