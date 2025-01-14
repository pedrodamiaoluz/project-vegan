
import * as S from "./style"


function Categorias() {

    return (

        <S.ContainerComprePorCategoria>
            <section class="compre_por_categoria">
                <div class="categoria-flex">
                    <div class="compre_por_categoria-container">
                        <h2>Selecione uma categoria</h2>
                        <div class="categoria__links">
                            <a href="">Escolhas com baixo teor de sódio</a>
                            <a>Alta proteína</a>
                            <a href="">Não contém gluten</a>
                            <a href="">Carne e Frutos do Mar</a>
                            <a href="">Queijo, Ovos e Laticínios</a>
                            <a href="">Chocolate, Doces e Doces</a>
                            <a>Lanches</a>
                            <a href="">Produtos para animais de companhia</a>
                            <a href="">Produtos de panificação</a>
                            <a href="">Fundamentos da despensa</a>
                        </div>
                    </div>
                    <div class="escolha__categorias">
                        <h1>Escolha uma Categoria</h1>
                        <div class="categoria">
                            <ul>
                                <li>
                                    <a href="">
                                        <img alt="" />
                                        <span>Escolhas com baixo teor de sódio</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img alt="" />
                                        <span>Alta proteína</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img  alt="" />
                                        <span>Não contém gluten</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img alt="" />
                                        <span>Carne e Frutos do Mar</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img  alt="" />
                                        <span>Queijo, Ovos e Laticínios</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img alt="" />
                                        <span>Chocolate, Doces e Doces</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img alt="" />
                                        <span>Lanches</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img alt="" />
                                        <span>Produtos para animais de companhia</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img alt="" />
                                        <span>Produtos de panificação</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img alt="" />
                                        <span>Fundamentos da despensa</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
        </S.ContainerComprePorCategoria>
    )
}

export default Categorias