import { NavLink } from "react-router-dom";
import Button from "./Button";

const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/articles' },
];

const navLinkClassName = ({ isActive }) => [
    'rounded-lg px-5 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300',
    isActive 
      ? 'bg-sky-400 text-white shadow-md shadow-sky-200' 
      : 'text-slate-500 hover:bg-violet-50 hover:text-violet-600',
].join(' ');

const NavBar = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-sky-100 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                <NavLink to="/" className="group flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-violet-400 text-white shadow-lg shadow-sky-200 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                        {/* Temporary Logo placeholder for Enhancement 3 */}
                        <span className="text-xl font-black">C</span>
                    </div>
                    <p className="text-2xl font-black tracking-tight text-sky-900">
                        Christian's <span className="text-emerald-400">Portfolio</span>
                    </p>
                </NavLink>

                {/* Fixed the 'mid:flex' typo to 'md:flex' so it properly hides on mobile and shows on tablets/desktops */}
                <div className="flex items-center gap-6">
                    <nav className="hidden items-center gap-2 md:flex">
                        {links.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.to === "/"}
                                className={navLinkClassName}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="hidden h-8 w-px bg-sky-100 md:block" />
                    <Button to="/auth/signin" variant="primary">Sign In</Button>
                </div>
            </div>
            </header>
    
    );
};

export default NavBar;