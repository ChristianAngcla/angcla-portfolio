import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800">
            <NavBar />
            <main className="flex-grow pb-16 pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;