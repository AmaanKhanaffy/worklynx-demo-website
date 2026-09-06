import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ActionButton } from "./ActionButton";

/**
 * Page hero for a single product.
 *
 * Copy on the left, product screenshot on the right — the same split the
 * home page showcase uses, so a product page feels like a continuation of it.
 */
export default function ProductHero({
    breadcrumb,
    title,
    highlight,
    lead,
    image,
    imageAlt,
    points = [],
    primaryCta,
    secondaryCta,
}) {
    const reduceMotion = useReducedMotion();

    const rise = (delay = 0) => ({
        initial: reduceMotion ? false : { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    });

    return (
        <section className="bg-white pb-20 pt-14 md:pb-28 md:pt-20">
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">

                    {/* ---------- COPY ---------- */}

                    <motion.div {...rise()}>

                        <nav aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-xs text-neutral-500">
                                <li>
                                    <Link
                                        to="/"
                                        className="transition-colors hover:text-neutral-900"
                                    >
                                        Products
                                    </Link>
                                </li>

                                <li aria-hidden="true">/</li>

                                <li className="font-medium text-neutral-900">{breadcrumb}</li>
                            </ol>
                        </nav>


                        <h1 className="mt-7 text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-neutral-900 sm:text-5xl lg:text-[3.5rem]">
                            {title}
                            <br />

                            <span className="text-brand-600">{highlight}</span>
                        </h1>


                        <p className="mt-6 max-w-xl text-base leading-8 text-neutral-500">
                            {lead}
                        </p>


                        {(primaryCta || secondaryCta) && (
                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                {primaryCta ? (
                                    <ActionButton
                                        href={primaryCta.href}
                                        to={primaryCta.to}
                                        onClick={primaryCta.onClick}
                                    >
                                        {primaryCta.label}
                                    </ActionButton>
                                ) : null}

                                {secondaryCta ? (
                                    <ActionButton
                                        variant="secondary"
                                        href={secondaryCta.href}
                                        to={secondaryCta.to}
                                        onClick={secondaryCta.onClick}
                                    >
                                        {secondaryCta.label}
                                    </ActionButton>
                                ) : null}
                            </div>
                        )}


                        {points.length > 0 && (
                            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-neutral-200 pt-7">
                                {points.map((point) => (
                                    <li
                                        key={point}
                                        className="flex items-center gap-2 text-xs text-neutral-500"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-brand-600 to-brand-500" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </motion.div>


                    {/* ---------- VISUAL ---------- */}

                    <motion.div
                        {...rise(0.1)}
                        className="relative flex h-[280px] items-center justify-center sm:h-[380px] lg:h-[460px]"
                    >

                        <div
                            aria-hidden="true"
                            className="absolute h-[240px] w-[240px] rounded-full bg-linear-to-r from-brand-600/10 to-brand-500/10 blur-[90px]"
                        />

                        <img
                            src={image}
                            alt={imageAlt}
                            loading="eager"
                            className="relative z-10 h-full w-full object-contain"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
