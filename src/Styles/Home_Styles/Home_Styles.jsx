import styled from "styled-components";
import fundo from "../Home_Styles/teste22.png";

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;

export const Header_Wrapper = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  margin-bottom: 10px;
`;

export const Registration_Button = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 25px;
  z-index: 1;
  &:hover {
    cursor: pointer;
    background-color: #1275b1;
    color: #fff;
    transition: 2s;
  }
`;

export const Card = styled.div`
  width: 500px;
  height: 400px;
  border-radius: 5px;
  margin-bottom: 60px;
  border: 3px solid #000;
  background-color: red;
`;

export const Services_Container = styled.div`
  margin-bottom: 45px;
  z-index: 1;
`;

export const Wrapper_Character = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  margin: -10px;
  z-index: 2;
`;

export const Character_Img = styled.img`
  width: 500px;
  height: 400px;

  background-color: transparent;

  position: fixed;
  bottom: 0;
  left: 0;
  margin: -10px;
  z-index: 1;
`;
