import {
  Wrapper,
  Header_Wrapper,
  Title,
  Registration_Button,
  Services_Container,
  Card,
  Character_Img,
} from "./Styles/Home_Styles/Home_Styles";
import Character from "../public/Imgs/frame.png";

import CEP_API from "./Services/API_CEP";

export default function App() {
  return (
    <Wrapper>
      <Header_Wrapper>
        <Title>
          Register your email to receive <br /> storm forecasts
        </Title>
        <Registration_Button>
          Receive the news by your email
        </Registration_Button>
      </Header_Wrapper>

      <h2>Purpose of the page</h2>
      <p>
        We created this page with the focus on gathering climate and zip code
        queries in the same place, so that you can stay on top of the places
        where the worst storms occur, avoiding them on your trip
      </p>

      <br></br>
      <Services_Container>
        <Card />
        <Card />
      </Services_Container>

      <Character_Img src={Character} />
    </Wrapper>
  );
}
