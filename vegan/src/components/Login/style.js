import styled from 'styled-components'

export const Login_Container = styled.div`
.container{
    display: flex;
 
}

.login_img{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
}

.login_img img{
    width: 550px;
    height: 525px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    object-fit: cover;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    background-color: #ffffff;
    margin: 3rem 2rem 0 23rem;
    padding: 30px;
    width: 450px;
    border-radius: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  ::placeholder {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .form button {
    align-self: flex-end;
  }

  .flex-column > label {
    color: #151717;
    font-weight: 600;
  }

  .inputForm {
    border: 1.5px solid #ecedec;
    border-radius: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: 0.2s ease-in-out;
  }

  .input {
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    width: 100%;
    height: 100%;
  }

  .input:focus {
    outline: none;
  }

  .inputForm:focus-within {
    border: 1.5px solid #569641;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
  }

  .row{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }

  .row > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .flex-row > div > label {
    font-size: 14px;
    color: black;
    font-weight: 400;
  }

  .span {
    font-size: 14px;
    margin-left: 5px;
    color: #2d79f3;
    font-weight: 500;
    cursor: pointer;

    a{
      text-decoration: none;
      color: #2d79f3;
    }
  }

  .button-submit {
    margin: 20px 0 10px 0;
    background-color: #569641;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    cursor: pointer;

    a{
      text-decoration: none;
      color: white;
    }
  }

  .p {
    text-align: center;
    color: black;
    font-size: 14px;
    margin: 5px 0;
  }

  .btn {
    margin-top: 10px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    gap: 10px;
    border: 1px solid #ededef;
    background-color: white;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  .btn:hover {
    border: 1px solid #2d79f3;
    ;
  }

  /*configuração do formulario de cadatre-se*/

.cadastre-se{
    background-color: #fff;
    max-width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 2rem;
    box-shadow: 0 0 4px #bdbcbc;
}

.cadastre-se .cadastre__se-conteudo h1{
     font-size: 40px;
     font-weight: bold;
     color: #2E332C;
}

.cadastre__se-conteudo p, .senha__container-titulo p{
    text-align: center;
    margin: 20px 0;
 }

 .cadastre-se form{
    display: flex;
    flex-direction: column;
    justify-content: center;
 }

 .cadastre-se form input{
    width: 500px;
    height: 40px;
    padding: 5px;
    outline: none;
 }

 .cadastre-se form label{
    padding: 8px 0;
 }

 .button_cadastro{
    margin: 40px auto 20px auto;
 }

 .button_cadastro button{
    text-decoration: none;
    color: #569641;
    font-weight: 600;
    background-color: transparent;
    padding: 10px 100px;
    text-align: center;
    margin: 20px auto;
    border-radius: 5px;
    transition: .7s;
    border: 1px solid #56C033;
    cursor: pointer;

    a{
        text-decoration: none;
        color: #569641;
    }
 }

 .button_cadastro button:hover{ 
    background-color: #56C033;
    color: #fff;
}


 /*configuração sobre Esqueceu senha*/

  .esqueceu__senha-container, .senha__container-titulo{
   margin: 30px auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
  }

 .esqueceu__senha-container > form{
   display: flex;
   flex-direction: column;
   justify-content: center;
 }

 .esqueceu__senha-container > form label{
   padding: 8px 0;
 }

 .esqueceu__senha-container > form input{
   width: 500px;
   height: 40px;
   padding: 5px;
   outline: none;
 }

 .button__esqueceu-senha{
   margin: 50px auto;
 }

 .button__esqueceu-senha a{
   text-decoration: none;
   color: #569641;
   font-weight: 600;
   background-color: transparent;
   padding: 10px 80px;
   text-align: center;
   margin: 20px auto;
   border-radius: 5px;
   border: 1px solid #56C033;
   cursor: pointer;
   transition: background-color .4s ease;
 }

 .button__esqueceu-senha{
    margin: 50px auto;
 }

 .button__esqueceu-senha a{
    text-decoration: none;
    color: #569641;
    font-weight: 600;
    background-color: transparent;
    padding: 10px 80px;
    text-align: center;
    margin: 20px auto;
    border-radius: 5px;
    border: 1px solid #56C033;
    cursor: pointer;
    transition: background-color .4s ease;
 }

 /*Configurações sobre nova senha*/

.container_novasenha{
    max-width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 2rem;
    box-shadow: 0 0 4px #bdbcbc;;
}

.titulo__novasenha h1{
    font-size: 40px;
     font-weight: bold;
     color: #2E332C;
}

.titulo__novasenha p{
    text-align: center;
    margin: 20px 0;
}

.container_novasenha > form{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.container_novasenha > form input{
    width: 500px;
    height: 40px;
    padding: 5px;
    outline: none;
}

.container_novasenha > form label{
    padding: 8px 0;
}

.button__novasenha{
  margin: 20px auto 0 auto;
}

.button__novasenha a{
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    background-color: #56C033;
    padding: 10px 100px;
    text-align: center;
    margin: 20px auto;
    border-radius: 5px;
    border: none;
    transition: .2s;
    cursor: pointer;

    a{
      color: #fff;
      text-decoration: none;
      background-color: #56C033;
    
    }

  
    &:hover{  
        background-color: transparent;
        border: 1px solid #56C033;
        color: #569641;
    }

}
`