/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";
import Button from "./buttons/button";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  img: string;
  text: string;
  ribbon: string;
  skills: string[];
  btnLink: string;
}

const CardContainer = styled.div`
  background-color: #231e39;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  color: #b3b8cd;
  padding: 30px 0px 0px 0px;
  position: relative;
  width: auto;
  max-width: 100%;
  text-align: center;
  margin-top: 25px;
  min-height: 300px;

  button {
    height: 35px;
    line-height: 19px;
    margin-top: 15px;
    color: white;
    border: 1px solid white;
  }

  @media (max-width: 768px) {
    padding: 50px 25px;
  }
`;
const Badge = styled.div`
  color: #030523;
  background-color: #ffffff;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  padding: 3px 7px;
  position: absolute;
  top: 30px;
  left: 30px;
`;
const Round = styled.img`
  padding: 7px;
  width: 75px;
`;
const Paragraph = styled.p`
  color: #fff;
  text-align: center;
`;

const Title = styled.h3`
  color: #10f1c8;
  text-align: center;
  margin-top: 25px;
  font-size: 2rem;
`;

const Skills = styled.div`
  background-color: #1f1a36;
  text-align: left;
  padding: 15px;
  margin-top: 30px;
  min-height: 140px;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    border: 1px solid #2d2747;
    border-radius: 2px;
    display: inline-block;
    font-size: 12px;
    margin: 0 7px 7px 0;
    padding: 7px;
  }
  li {
    transition: all 0.5s;
  }
  li:hover {
    color: #fff;
  }
`;

function Card(props: Props) {
  const { img, title, text, ribbon, skills, btnLink } = props;

  return (
    <CardContainer>
      <Badge>{ribbon}</Badge>
      <Round src={img} alt="user" />
      <Title>{title}</Title>
      <Paragraph>{text}</Paragraph>
      <Skills>
        <h6>we use</h6>
        <ul>
          {skills.map((skill: string, index: number) => {
            return <li key={`${skill}_${index}`}>{skill}</li>;
          })}
        </ul>
      </Skills>
      <Link to={btnLink}>
        <Button background="transparent" type="button" text="Learn more" />
      </Link>
    </CardContainer>
  );
}

export default Card;
