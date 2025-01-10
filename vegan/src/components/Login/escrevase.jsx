import { Link } from "react-router-dom"
import * as S from "./style"

function EscrevaSe() {
    return (
        <S.Login_Container>
            <div className="container">
                <div class="cadastre-se">
                    <div class="cadastre__se-conteudo">
                        <h1>Criar Nova Conta De Cliente</h1>
                        <p>Criar uma conta é fácil. Basta preencher o formulário abaixo.</p>
                    </div>

                    <form>
                        <label for="#">Nome Completo *</label>
                        <input type="text" placeholder="Informe seu nome completo" />
                        <label for="#">CPF *</label>
                        <input type="text" placeholder="Informe seu nome CPF" />
                        <label for="#">Data de nascimento *</label>
                        <input type="text" placeholder="Informe sua data de nascimento" />
                        <label for="#">Telefone *</label>
                        <input type="tel" name="telefone" id="telefone" placeholder="(DDD) 00000-0000" />
                        <label for="#">E-mail *</label>
                        <input type="email" name="email" id="email" placeholder="E-mail" />
                        <label for="#">Senha *</label>
                        <input type="password" name="senha" id="senha" placeholder="Senha" />
                    </form>

                    <div class="button_cadastro">
                        <button class="button_cadastr"><Link to="/">Criar</Link></button>
                    </div>
                </div>
            </div>
        </S.Login_Container>

    )
}

export default EscrevaSe