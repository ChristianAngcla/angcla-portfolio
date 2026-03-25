import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800">
            <NavBar />
            <main className="pb-16 pt-20">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;