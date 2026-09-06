import { Link } from "react-router-dom";

const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2";

const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700",
    secondary:
        "border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50",
};

/**
 * One button style for the whole UK marketing surface.
 * Renders a router Link for `to`, an anchor for `href`, a button otherwise.
 */
export function ActionButton({ variant = "primary", to, href, children, className = "", ...props }) {
    const classes = `${base} ${variants[variant]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={classes} {...props}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button type="button" className={classes} {...props}>
            {children}
        </button>
    );
}
