import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./Layout.css";

const Layout: React.FC = () => {
    return (
        <div className="app-container">
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;
