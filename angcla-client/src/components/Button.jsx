import { Children } from "react";
import { Link } from "react-router-dom";

const variantClasses = {
    primary: 'bg-sky-400 text-white hover:bg-sky-500 border-sky-400 hover:border-sky-500 shadow-md shadow-sky-200',
    secondary: 'bg-white text-violet-600 hover:bg-violet-50 border-violet-200 hover:border-violet-300',
};

const Button = ({
    children,
    to,
    type = 'button',
    variant = 'secondary',
    className = '',
}) => {
    const classes = [
        'inline-flex items-center justify-center rounded-full border-2 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] transition-all duration-300',
        variantClasses[variant] ?? variantClasses.secondary,
        className,
    ]
    .join(' ')
    .trim();

    if (to) {
        return (
            <Link to={to} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={classes}>
            {children}
        </button>
    );
};

export default Button;
