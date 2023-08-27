import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Header_Wrapper,
  Header_Infos,
  Wrapper_Section_Purpose,
  Title,
  Title_lv2,
  Text,
  Registration_Button,
  Services_Container,
  Card,
  Character_Img,
} from "./Styles/Home_Styles/Home_Styles";
import Character from "../public/Imgs/frame.png";

import CEP_API from "./Services/API_CEP";

export default function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {}, 5000);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      clearTimeout();
    }, 5000);

    // Limpar os temporizadores quando o componente for desmontado
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleAnimationEnd = () => {
    if (!isVisible) {
      setAnimationComplete(true);
    }
  };

  return (
    <Wrapper>
      <Header_Wrapper>
        <Header_Infos>
          <Title>
            Register your email to receive <br /> storm forecasts
          </Title>
          <Registration_Button>
            Receive the news by your email
          </Registration_Button>
        </Header_Infos>
      </Header_Wrapper>

      <Wrapper_Section_Purpose>
        <Title_lv2>Purpose of the page</Title_lv2>
        <br />
        <Text>
          We created this page with the focus on gathering climate and zip code
          queries in the same place, so that you can stay on top of the places
          where the worst storms occur, avoiding them on your trip
        </Text>
      </Wrapper_Section_Purpose>

      <br></br>
      <Services_Container>
        <Card />
        <Card />
      </Services_Container>

      <Character_Img
        src={Character}
        isVisible={isVisible}
        animationDuration="6s"
        onAnimationEnd={handleAnimationEnd} // Lidar com o evento animationend
        cursorPointer={isVisible}
        style={{
          display: animationComplete ? "none" : "block", // Definir display para none quando a animação está completa
        }}
      />
    </Wrapper>
  );
}
