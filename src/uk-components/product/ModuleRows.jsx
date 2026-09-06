import { motion, useReducedMotion } from "framer-motion";

/**
 * Alternating screenshot / copy rows — the home page showcase pattern,
 * reused so a product page explains its modules with real product imagery
 * rather than another grid of cards.
 */
export default function ModuleRows({ modules, framed = false }) {
    const reduceMotion = useReducedMotion();

    return (
        <div className="mt-16">
            {modules.map((module, index) => {
                const imageRight = index % 2 === 0;

                return (
                    <motion.article
                        key={module.title}
                        initial={reduceMotion ? false : { opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        className="border-t border-neutral-200 first:border-t-0"
                    >
                        <div className="grid items-center gap-10 py-12 md:grid-cols-2 md:gap-16 md:py-16 lg:gap-24">

                            {/* ---------- COPY ---------- */}

                            <div className={imageRight ? "md:order-1" : "md:order-2"}>

                                <h3 className="max-w-md text-2xl font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-900 md:text-3xl">
                                    {module.title}
                                </h3>

                                <p className="mt-4 max-w-lg text-base leading-8 text-neutral-500">
                                    {module.description}
                                </p>

                                <ul className="mt-7 space-y-3">
                                    {module.points.map((point) => (
                                        <li
                                            key={point}
                                            className="flex items-start gap-3 text-sm leading-6 text-neutral-600"
                                        >
                                            <span
                                                aria-hidden="true"
                                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-r from-brand-600 to-brand-500"
                                            />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>


                            {/* ---------- SCREENSHOT ---------- */}

                            <div className={imageRight ? "md:order-2" : "md:order-1"}>
                                {framed ? (
                                    /* Flat UI captures need a frame to read as a screenshot. */
                                    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
                                        <img
                                            src={module.image}
                                            alt={module.imageAlt}
                                            loading="lazy"
                                            className="h-[240px] w-full object-cover object-left-top sm:h-[300px] lg:h-[360px]"
                                        />
                                    </div>
                                ) : (
                                    <div className="relative flex h-[240px] items-center justify-center sm:h-[320px] lg:h-[400px]">

                                        <div
                                            aria-hidden="true"
                                            className="absolute h-[200px] w-[200px] rounded-full bg-linear-to-r from-brand-600/10 to-brand-500/10 blur-[90px]"
                                        />

                                        <img
                                            src={module.image}
                                            alt={module.imageAlt}
                                            loading="lazy"
                                            className="relative z-10 h-full w-full object-contain"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.article>
                );
            })}
        </div>
    );
}
