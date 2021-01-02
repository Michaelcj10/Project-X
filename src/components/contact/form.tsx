/** @jsx createElement */
import { createElement, Fragment } from "react";
import styled from "styled-components";
import Input from "../atoms/inputs/input";
import Button from "../atoms/buttons/button";
import { useState } from "react";
import { Row, Col } from "react-grid";
import Slide from "react-reveal/Slide";
import Jump from "react-reveal/Jump";
import { makeGet } from "../../api/fetchApi";
import Toast from "../../components/atoms/toast";
import fb from "../../images/fb.svg";
import ln from "../../images/ln.svg";

const InfographicStyle = styled.div`
  position: relative;
  text-align: center;
  padding: 150px 10% 150px 10%;
  background: #15161f;

  @media (max-width: 768px) {
    padding: 50px 25px;
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
const FormWrap = styled.div`
  margin: auto;
  max-width: 600px;
`;
const TermsText = styled.p`
  color: #d6d6d6;
  text-align: left;
  padding: 0;
  font-size: 12px;
`;
const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  img {
    cursor: pointer;
    width: 30px;
    margin: 0 10px;
  }
`;
function Form() {
  const [email, setEmail] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [showToast, setToast] = useState<boolean>(false);
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
        name: "test",
      })
        .then(() => {
          setToast(true);

          setTimeout(() => {
            setToast(false);
          }, 4000);
        })
        .catch(() => {
          setToast(false);
        });
      resetForm();
    }
  };

  return (
    <Fragment>
      {showToast && <Toast text="Message sent!" />}

      <InfographicStyle>
        <Row>
          <Content xs={12}>
            <FormWrap>
              <Slide bottom={true}>
                <Title>Contact us </Title>
              </Slide>
              <SubTitle>
                Contact us now to get a free quote and begin growing your
                business
              </SubTitle>
              <Social>
                <img src={fb} alt="facebook" />
                <img src={ln} alt="linkedin" />
              </Social>
              <StyledBreak />
              <form
                data-netlify="true"
                name="contact"
                method="post"
                onSubmit={submit}
              >
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

                {formError && (
                  <Jump>
                    <div className="error">{formError} </div>
                  </Jump>
                )}

                <Button
                  background="#ffa91a"
                  fullWidth={true}
                  type="submit"
                  text="Submit"
                />
                <TermsText>
                  By sending us a note you agree to our terms and conditions. We
                  will not distribute your name or email with any other service.
                  Full terms and conditons can be seen here.
                </TermsText>
              </form>
            </FormWrap>
          </Content>
        </Row>
      </InfographicStyle>
    </Fragment>
  );
}

export default Form;
