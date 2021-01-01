/** @jsx createElement */
import { createElement, useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../atoms/buttons/button";
import { getCookie, setCookie } from "../../services/cookie";

const BannerStyle = styled.div`
  max-width: 400px;
  height: auto;
  background: #000;
  color: #ffffff;
  position: fixed;
  bottom: 10px;
  left: 0px;
  right: 0px;
  margin: auto;
  z-index: 4;
  display: block;
  padding: 20px 15px;
  border-radius: 0;
  border: 4px solid #19f9c8;
  box-shadow: 0 12px 44px 2px rgba(0, 0, 0, 0.82);
  padding: 16px 24px 32px;
`;
const Paragraph = styled.p`
  padding: 0px;
  color: #fff;
  margin-top: 25px;
  font-size: 13px;
`;
const PolicyTitle = styled.div`
  padding: 0px;
  margin-top: 25px;
  font-size: 20px;
  color: #19f9c8;
`;

function CookieBanner() {
  const [showBanner, setBanner] = useState<boolean>(false);

  useEffect(() => {
    const x = getCookie("pwp");
    setBanner(!x);
  }, []);

  if (!showBanner) {
    return null;
  }

  return (
    <BannerStyle>
      <PolicyTitle>Our website uses cookies</PolicyTitle>
      <Paragraph>
        As is common practice with almost all professional websites this site
        uses cookies, which are tiny files that are downloaded to your computer,
        to improve your experience. We will never share your information with
        any third party.
      </Paragraph>
      <Button
        background="#fff"
        type="button"
        onClick={() => {
          setCookie("pwp", "1");
          setBanner(false);
        }}
        text="OK"
      />
    </BannerStyle>
  );
}

export default CookieBanner;
