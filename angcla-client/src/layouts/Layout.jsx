import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
        if (pathname === "/" || pathname === "") {
            document.title = "eth.dev";
        } else if (pathname.includes("about")) {
            document.title = "About | eth.dev";
        } else if (pathname.includes("articles")) {
            document.title = "Articles | eth.dev";
        } else {
            document.title = "eth.dev";
        }
    }, [pathname]);

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