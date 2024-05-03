import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import ProfilePage from "./pages/users/profilePage";
import MasterLayout from "./pages/users/theme/masterLayout";
import { ROUTES } from "./utils/router";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTES.USER.HOME,
            component: <HomePage />
        }, 
        {
            path: ROUTES.USER.PROFILE,
            component: <ProfilePage />
        },        
    ];
    return (
        <MasterLayout>
        <Routes>
            {userRouters.map((item, key) => ( <Route key={key} path={item.path} element={item.component} />
            ))}
        </Routes>
        </MasterLayout>
    );
};

const RouterCustom = () => {
    return renderUserRouter() ;
};

export default RouterCustom;