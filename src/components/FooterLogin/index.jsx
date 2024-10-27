import { styled } from 'styled-components';

const FooterLoginContainer = styled.section`

background-color: #1F1F1F;
footer {    
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    & hr {
        width: 90vw;
        border-color: rgba(193, 193, 193, 0.3);
        border-width: 0.2px;
    }
    & p {
        color: #FFF;
        font-size: 12px;
    }
}
`;

const FooterLogin = () => {
    return(
        <FooterLoginContainer>
            <footer>
                <hr />
                <p> &#169;2024 Digital Bookstore</p>                
            </footer>
        </FooterLoginContainer>
    );
}

export default FooterLogin;