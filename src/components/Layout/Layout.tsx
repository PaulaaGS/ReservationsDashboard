import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
