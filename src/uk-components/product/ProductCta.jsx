import { ActionButton } from "./ActionButton";

/**
 * Closing band shared by every product page.
 * `#contact-sales` is picked up by UKLayout, which opens the sales modal.
 */
export default function ProductCta({ title, lead, primaryLabel = "Talk to sales" }) {
    return (
        <section className="border-t border-neutral-200 bg-neutral-50 py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-6">

                <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

                    <div className="max-w-xl">
                        <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-neutral-900 sm:text-4xl">
                            {title}
                        </h2>

                        <p className="mt-5 text-base leading-8 text-neutral-500">{lead}</p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
                        <ActionButton href="#contact-sales">{primaryLabel}</ActionButton>

                        <ActionButton variant="secondary" href="/signup">
                            Start free trial
                        </ActionButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
