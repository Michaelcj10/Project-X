/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";
import fb from "../../images/fb.png";
import ln from "../../images/ln.png";
import git from "../../images/git.png";
import { Link } from "react-router-dom";

const InfographicStyle = styled.div`
  margin: auto;
  text-align: center;
  background: #fbfbfb;
  padding-top: 50px;
  width: 100%;
  position: relative;
`;

const Middle = styled.div`
  max-width: 90%;
  margin: auto;
  background: rgba(255, 255, 255, 0.7);
  padding: 100px 50px;
  border-radius: 38px 33px 0px 0px;
  box-shadow: 0px 2px 1px -11px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const SocialIcon = styled.img`
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;
const Links = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

const SiteLink = styled(Link)`
  font-size: 16px;
  font-family: Mabry-Bold;
  color: #222222;
  text-decoration: none;

  &:hover {
    color: #222222;
  }
`;

const Pipes = styled.div`
  color: #a0fc69;
  font-size: 27px;
`;

const Company = styled.div`
  font-size: 16px;
  font-family: Mabry-Bold;
`;

function SiteFooter() {
  return (
    <InfographicStyle>
      <Middle>
        <div className="row">
          <div className="twelve columns centered">
            <h2>You found my footer..</h2>
            <a href="https://www.facebook.com/michael.james.90475/">
              <SocialIcon style={{ width: "60px" }} src={fb} alt="facebook" />
            </a>
            <a href="https://www.linkedin.com/in/michael-james-12b49968/">
              <SocialIcon style={{ width: "80px" }} src={ln} alt="linkedin" />
            </a>
            <a href="https://github.com/Michaelcj10">
              <SocialIcon style={{ width: "80px" }} src={git} alt="git hub" />
            </a>
            <Links>
              <SiteLink to="/policy">Privacy policy</SiteLink>
              <Pipes>||</Pipes>
              <SiteLink to="/blog">Blog</SiteLink>
            </Links>
            <Company>&copy; Michael James 2020</Company>
          </div>
        </div>
      </Middle>
    </InfographicStyle>
  );
}

export default SiteFooter;
