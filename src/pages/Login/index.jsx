import { styled } from 'styled-components';
import { Link } from "react-router-dom";
import livros from './assets/livros.png';
import facebook from './assets/icon-facebook.png';
import gmail from './assets/icon-gmail.png';

const LoginContainer = styled.section`

background: linear-gradient(to top, rgb(178, 221, 230), rgb(119,200,211));
body {
    height: 80vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* flex-wrap: wrap; */
    /* padding: 0 5rem 0 5rem; */

    & .formContainer {
        height: 350px;
        width: 30rem;
        background-color: #FFF;
        border-radius: 5px;
    }
    & .livroImage {
        & img {
            height: 300px;
        }
    }
}
`;

const Login = () => {
    return (
        <LoginContainer>
            <body>
                <div className='formContainer'>
                    <h2>Acesse sua conta</h2>
                    <p>Não possui conta? Cadastre-se aqui</p>
                    <label htmlFor="">Login*</label>
                    <input type="text" placeholder='Insira seu login ou email' />
                    <label htmlFor="">Senha*</label>
                    <input type="password" placeholder='Insira sua senha' />
                    <p>Esqueci minha senha</p>
                    <Link to={''} className="">Acesse Conta</Link>
                    <p>Ou faça login com
                        {/* <img src={gmail} alt="" />
                        <img src={facebook} alt="" /> */}
                    </p>
                </div>
                <div className='livroImage'>
                    <img src={livros} alt="" />
                </div>
            </body>
        </LoginContainer>
    );
}

export default Login;