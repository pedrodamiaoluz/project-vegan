import { Link } from "react-router-dom"
import * as S from "./style"

function NovaSenha() {

    return (
        <S.Login_Container>
            <div className="container">
            <div class="container_novasenha">
                <div class="titulo__novasenha">
                    <h1>Criar a Nova Senha</h1>
                    <p>Sua senha deve conter no minimo 8 caractere!!!</p>
                </div>

                <form action="">
                    <label for="#">Informe a nova senha</label>
                    <input type="text" placeholder="Nova senha" />
                    <label for="#">Confirme a nova senha</label>
                    <input type="text" placeholder="Confirme a nova senha" />
                </form>

                <div class="button__novasenha">
                    <Link to="/">Confirmar</Link>
                </div>
            </div>
            </div>
        </S.Login_Container>
    )
}

export default NovaSenha