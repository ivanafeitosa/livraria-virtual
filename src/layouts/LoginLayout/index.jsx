import { Outlet } from "react-router-dom";
import HeaderLogin from "../../components/HeaderLogin";
import FooterLogin from "../../components/FooterLogin";

const LoginLayout = () => {
    return (
        <>
            <HeaderLogin />
            <Outlet/>
            <FooterLogin />
        </>
    );
}

export default LoginLayout;