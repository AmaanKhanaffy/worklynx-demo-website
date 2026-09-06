/**
 * Hairline feature grid — one shared rule between cells instead of a stack
 * of shadowed cards, so a long feature list stays calm.
 */
export default function FeatureGrid({ features }) {
    return (
        <ul className="mt-14 grid grid-cols-1 border-l border-t border-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
                const Icon = feature.icon;

                return (
                    <li
                        key={feature.title}
                        className="group border-b border-r border-neutral-200 p-7 transition-colors hover:bg-neutral-50 md:p-8"
                    >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-linear-to-r from-brand-600/10 to-brand-500/10 transition-colors group-hover:border-brand-500/30">
                            <Icon size={17} strokeWidth={1.6} className="text-brand-600" aria-hidden="true" />
                        </span>

                        <h3 className="mt-5 text-sm font-medium text-neutral-900">
                            {feature.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-neutral-500">
                            {feature.desc}
                        </p>
                    </li>
                );
            })}
        </ul>
    );
}
