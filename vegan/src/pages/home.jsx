import "../../src/App.css"
import { ArrayCard } from "../assets/img/img-lanches/arraycard";
import Card from "../components/Card/card";
import { StyledWrapper } from "../components/Card/style";
import Header from "../components/Header/header";
import { PagesContainer } from "./style";
import mulherhome from "../assets/mulher-home.jpg"
import  Swiper from "../components/Swiper/swiper";

function Home() {
  return (
    <PagesContainer>
      <div className="container">
        <Header />
        <Swiper />
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
        <div class="tornar__vegano_container">
          <img src={mulherhome} alt="" />
          <div class="tornar__veg-conteudo">
            <h1>Por que se tornar vegano?</h1>
            <p>Tornar-se vegano envolve uma escolha consciente de adotar um estilo de vida mais ético e sustentável. Ao optar por alimentos veganos, os indivíduos contribuem para a redução do sofrimento animal, promovem a preservação do meio ambiente e melhoram sua própria saúde. E-commerces vegano de alimentos oferecem uma plataforma conveniente para explorar e adquirir produtos alinhados com esses valores, proporcionando uma variedade diversificada de opções, desde alimentos orgânicos até alternativas vegetais para produtos tradicionais. Além disso, esses e-commerces frequentemente fornecem recursos educacionais e receitas, incentivando e apoiando os consumidores em sua jornada para um estilo de vida vegano.
            </p>
          </div>
        </div>
      </div>
    </PagesContainer>
  )

}

export default Home;