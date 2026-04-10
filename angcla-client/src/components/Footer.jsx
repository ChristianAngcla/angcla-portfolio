import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t-2 border-sky-100 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    {/* Logo/Brand Section - Mirrors the NavBar branding */}
                    <Link to="/" className="group flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-violet-400 text-white shadow-md shadow-sky-200 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                            <span className="text-sm font-black">C</span>
                        </div>
                        <p className="text-lg font-black tracking-tight text-sky-900">
                            Christian's <span className="text-emerald-400">Portfolio</span>
                        </p>
                    </Link>

                    {/* Footer Navigation */}
                    <nav className="flex gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                        <Link to="/" className="hover:text-sky-500 transition-colors duration-300">Home</Link>
                        <Link to="/about" className="hover:text-sky-500 transition-colors duration-300">About</Link>
                        <Link to="/articles" className="hover:text-sky-500 transition-colors duration-300">Projects</Link>
                    </nav>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-sky-50 pt-8 sm:flex-row text-center sm:text-left">
                    <p className="text-sm text-slate-400">
                        &copy; {currentYear} Christian Constantino Angcla. All rights reserved.
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-violet-400">
                        Built with React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;