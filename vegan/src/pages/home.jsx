import "../../src/App.css"
import Card from "../components/Card/card";
import { StyledWrapper } from "../components/Card/style";
import Header from "../components/Header/header";

function Home() {
  return (
    <div className="container">
      <Header />
      <StyledWrapper>
        <div className="card_container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </StyledWrapper>
    </div>
  )

}

export default Home;