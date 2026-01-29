export default function Services() {
    const services = [
        {
            icon: '💬',
            title: 'Free Consultation',
            description:
                'Get expert guidance on the best hair patch solution for you.',
            features: [
                'Hair loss assessment',
                'Patch type recommendation',
                'Budget guidance',
                'No obligation',
            ],
        },
        {
            icon: '🏠',
            title: 'Hair Patch Fitting (Home Service)',
            description:
                'Professional installation at your doorstep with complete privacy.',
            features: [
                'Secure tape / glue fitting',
                'Styling & finishing',
                'Comfort-tested',
                'Natural blending',
            ],
        },
        {
            icon: '🔧',
            title: 'Repair & Maintenance',
            description:
                'Keep your hair system looking fresh with regular maintenance.',
            features: [
                'Re-bonding service',
                'Lace / base repair',
                'Cleaning & refit',
                'Quality check',
            ],
        },
        {
            icon: '🛍️',
            title: 'Products & Accessories',
            description:
                'Premium quality hair units and professional maintenance products.',
            features: [
                'Hair units (all types)',
                'Walker tape',
                'Adhesive remover',
                'Professional glue',
            ],
        },
    ];

    return (
        <section
            id="services"
            aria-labelledby="services-heading"
            className="
        relative
        bg-[var(--bg-primary)]
        py-[clamp(4rem,8vw,7rem)]
      "
        >
            {/* Subtle background glow */}
            <div aria-hidden="true" className="absolute inset-0">
                <div className="absolute top-1/3 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[var(--accent-primary)]/10 blur-[160px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="mx-auto mb-16 max-w-3xl text-center animate-fade-in-up">
                    <h2
                        id="services-heading"
                        className="mb-4 text-[var(--text-primary)]"
                    >
                        Our <span className="gradient-text">Services</span>
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] md:text-xl">
                        Comprehensive hair patch solutions — from consultation to long-term
                        maintenance.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <article
                            key={service.title}
                            className="
                glass
                group
                rounded-2xl
                border
                border-[var(--border-subtle)]
                p-6
                transition
                hover:border-[var(--accent-primary)]/40
                hover:bg-white/[0.06]
                motion-safe:animate-fade-in-up
              "
                            style={{ animationDelay: `${index * 0.08}s` }}
                        >
                            {/* Icon */}
                            <div
                                aria-hidden="true"
                                className="
                  mb-4
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[var(--accent-primary)]/15
                  text-2xl
                  transition-transform
                  group-hover:scale-110
                "
                            >
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="mb-2 text-lg font-semibold text-[var(--text-primary)]">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="mb-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2 text-sm">
                                {service.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-2 text-[var(--text-secondary)]"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--accent-primary)]"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-14 text-center">
                    <a
                        href="https://wa.me/923486105960?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contact CrownFit Men on WhatsApp"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <span>Get Started on WhatsApp</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
