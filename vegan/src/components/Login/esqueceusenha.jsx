
import { Link } from "react-router-dom"
import * as S from "./style"

function EsqueceuSenha() {

    return (
        <S.Login_Container>
            <div className="container">
                <div class="esqueceu__senha-container">
                    <div class="senha__container-titulo">
                        <h1>Esqueceu Senha</h1>
                        <p>Para recuperar seu acesso, precisamos do seu E-mail ou CPF.</p>
                    </div>

                    <form>
                        <label>E-mail ou CPF</label>
                        <input type="text" />
                    </form>

                    <div class="button__esqueceu-senha">
                        <Link>Continuar</Link>
                    </div>
                </div>
            </div>
        </S.Login_Container>

    )
}

export default EsqueceuSenha