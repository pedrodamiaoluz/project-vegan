import "../../src/App.css"
import { ArrayCard } from "../assets/img/img-lanches/arraycard";
import Card from "../components/Card/card";
import { StyledWrapper } from "../components/Card/style";
import Header from "../components/Header/header";
import { PagesContainer } from "./style";

function Home() {
  return (
    <PagesContainer>
      <div className="container">
        <Header />
        <StyledWrapper>
          <h1 className="titulo">Alimentos Integrais</h1>
          <div className="card_container">
            {ArrayCard.map((item) => {
              return (
                <Card
                  src={item.url}
                  title={item.tex}
                />
              )
            })}
          </div>
        </StyledWrapper>
      </div>
    </PagesContainer>
  )

}

export default Home;