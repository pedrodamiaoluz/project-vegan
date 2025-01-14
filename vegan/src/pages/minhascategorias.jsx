import "../../src/App.css"
import Header from "../components/Header/header"
import Categorias from "../components/MinhasCategorias/categorias"

function MinhasCategorias() {
    return(
        <div className="container">
           <Header />
           <Categorias />
        </div>
    )
}

export default MinhasCategorias