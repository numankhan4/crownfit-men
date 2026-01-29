export default function TrustBanner() {
    return (
        <section
            aria-labelledby="trust-banner-heading"
            className="
        relative
        bg-[var(--bg-primary)]
        border-y
        border-[var(--border-subtle)]
        py-[clamp(3rem,6vw,4.5rem)]
      "
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* Quote */}
                <div className="mb-10 text-center">
                    <p
                        id="trust-banner-heading"
                        className="mx-auto max-w-3xl text-xl font-semibold leading-relaxed text-[var(--text-primary)] md:text-2xl"
                    >
                        “No salon visits. No awkward questions. Just results.”
                    </p>
                </div>

                {/* Trust Points */}
                <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
                    {[
                        {
                            label: 'Serving Lahore',
                            icon: (
                                <path
                                    fillRule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"
                                />
                            ),
                        },
                        {
                            label: 'Male Technicians',
                            icon: (
                                <path
                                    fillRule="evenodd"
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clipRule="evenodd"
                                />
                            ),
                        },
                        {
                            label: 'Imported Tapes',
                            icon: (
                                <>
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                    <path
                                        fillRule="evenodd"
                                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </>
                            ),
                        },
                        {
                            label: 'After-Service Support',
                            icon: (
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clipRule="evenodd"
                                />
                            ),
                        },
                    ].map((item) => (
                        <li key={item.label} className="text-center">
                            <div
                                aria-hidden="true"
                                className="
                  mx-auto
                  mb-3
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[var(--accent-primary)]/15
                  text-[var(--accent-primary)]
                "
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    {item.icon}
                                </svg>
                            </div>
                            <p className="text-sm font-semibold text-[var(--text-primary)]">
                                {item.label}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
