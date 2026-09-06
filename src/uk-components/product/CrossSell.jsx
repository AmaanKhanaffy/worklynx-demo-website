import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

/**
 * Links across to the other two products. Plain rows with a rule between
 * them — the point is navigation, not decoration.
 */
export default function CrossSell({ links }) {
    return (
        <ul className="mt-12 grid grid-cols-1 gap-px bg-neutral-200 sm:grid-cols-2">
            {links.map((link) => (
                <li key={link.to} className="bg-white">
                    <Link
                        to={link.to}
                        className="group flex h-full items-start justify-between gap-6 p-7 transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 md:p-8"
                    >
                        <span>
                            <span className="block text-base font-medium text-neutral-900">
                                {link.title}
                            </span>

                            <span className="mt-2 block max-w-sm text-sm leading-6 text-neutral-500">
                                {link.description}
                            </span>
                        </span>

                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-brand-600 to-brand-500 text-white transition-transform duration-300 group-hover:translate-x-0.5">
                            <ArrowUpRight size={15} aria-hidden="true" />
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
