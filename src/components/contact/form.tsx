/** @jsx createElement */
import { ChangeEvent, createElement, Fragment } from "react";
import styled from "styled-components";
import Input from "../atoms/inputs/input";
import Button from "../atoms/buttons/button";
import CheckBox from "../atoms/buttons/checkBox";
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

  label {
    font-size: 14px;
    font-weight: normal;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
    color: #fff;
    text-align: left;
    margin-left: 5px;
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

const Marketing = styled.div`
  margin: 25px 0px;
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
const TextArea = styled.textarea`
  background: #15161f;
  color: #fff;
  width: 100%;
  resize: none;
  border-radius: 0px;
  font-size: 16px;
  transition: all 0.3s;
  border: 1px solid #fff;
  border-right: none;
  border-left: none;
  border-top: none;

  &:focus {
    border: 1px solid #ffa91a;
    border-right: none;
    border-left: none;
    border-top: none;
  }
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
  const [marketingChecked, setMarketingChecked] = useState<boolean>(false);

  const resetForm = () => {
    setError("");
    setEmail("");
    setMsg("");
    setMarketingChecked(false);
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
        optin: marketingChecked,
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
                <label>Enter your message</label>
                <TextArea
                  value={msg}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                    setError(null);
                    setMsg(e.target.value);
                  }}
                  name="message"
                />

                {formError && (
                  <Jump>
                    <div className="error">{formError} </div>
                  </Jump>
                )}
                <Marketing>
                  <CheckBox
                    checked={marketingChecked}
                    text="Send me special offers and discount codes"
                    onClick={() => {
                      setMarketingChecked(!marketingChecked);
                    }}
                  />
                </Marketing>

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
