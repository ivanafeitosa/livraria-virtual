import { styled } from 'styled-components';
import logo from './assets/logotipo-original.png';

const HeaderLoginContainer = styled.section`

background-color: #FFF;
header {
    height: 10vh;
    display: flex;
    align-items: center;
    padding-left: 90px;
    & .logo {
        & img {
            width: 220px;
        }
    }
}

`;

const HeaderLogin = () => {
    return (
        <HeaderLoginContainer>
            <header>
                <div className="logo">
                    <img src={logo} alt="Digital Bookstore" />
                </div>
            </header>
        </HeaderLoginContainer>
    );
}

export default HeaderLogin;