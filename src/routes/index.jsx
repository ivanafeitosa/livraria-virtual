import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login";


const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<LoginLayout />}>
                    <Route index element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;