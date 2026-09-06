/**
 * Shared section shell for the UK product pages.
 *
 * Keeps every band on the same container width, vertical rhythm and
 * hairline separator so the pages read as one system.
 */
export function Section({ id, bordered = true, className = "", children }) {
    return (
        <section
            id={id}
            className={`bg-white ${bordered ? "border-t border-neutral-200" : ""} py-20 md:py-28 ${className}`}
        >
            <div className="mx-auto max-w-7xl px-6">{children}</div>
        </section>
    );
}

/** Small rule + label used above every heading on the site. */
export function Eyebrow({ children }) {
    return (
        <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-linear-to-r from-brand-600 to-brand-500" />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                {children}
            </span>
        </div>
    );
}

/**
 * Section heading block: eyebrow, title with an optional brand-coloured
 * second line, and a lead paragraph.
 */
export function SectionHeader({ eyebrow, title, highlight, lead, className = "" }) {
    return (
        <div className={`max-w-2xl ${className}`}>
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}

            <h2 className="mt-6 text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-neutral-900 sm:text-4xl md:text-[2.75rem]">
                {title}

                {highlight ? (
                    <>
                        {" "}
                        <span className="text-brand-600">{highlight}</span>
                    </>
                ) : null}
            </h2>

            {lead ? (
                <p className="mt-5 text-base leading-8 text-neutral-500">{lead}</p>
            ) : null}
        </div>
    );
}
