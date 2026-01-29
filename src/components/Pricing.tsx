'use client';

export default function Pricing() {
    const plans = [
        {
            name: 'Starter',
            price: '2,500 – 5,000',
            description: 'Ideal for first-time users who want expert guidance.',
            features: [
                'Free consultation',
                'Hair loss assessment',
                'Patch type & base recommendation',
                'Budget guidance',
                'No obligation',
            ],
            highlight: false,
        },
        {
            name: 'Premium Fit',
            price: '12,000 – 35,000',
            description: 'Complete hair patch solution with professional fitting.',
            features: [
                'Premium hair unit (human/synthetic)',
                'Discreet home fitting',
                'Secure tape or glue application',
                'Natural styling & blending',
                'Aftercare guidance',
                '1 free minor refix',
            ],
            highlight: true,
        },
        {
            name: 'Maintenance',
            price: '3,000 – 8,000',
            description: 'Keep your hair system fresh, secure, and natural.',
            features: [
                'Re-bonding & refitting',
                'Cleaning & hygiene care',
                'Tape / glue replacement',
                'Lace or base inspection',
                'Priority booking',
            ],
            highlight: false,
        },
    ];

    return (
        <section
            id="pricing"
            aria-labelledby="pricing-heading"
            className="
        relative
        bg-[var(--bg-secondary)]
        py-[clamp(4rem,8vw,7rem)]
      "
        >
            {/* Accent divider */}
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mx-auto mb-14 max-w-3xl text-center animate-fade-in-up">
                    <h2
                        id="pricing-heading"
                        className="mb-4 text-[var(--text-primary)]"
                    >
                        Simple <span className="gradient-text">Pricing</span>
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] md:text-xl">
                        Transparent pricing based on your needs — no hidden charges.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {plans.map((plan, index) => (
                        <article
                            key={plan.name}
                            className={`
                relative
                rounded-2xl
                p-8
                glass
                border
                transition
                motion-safe:animate-fade-in-up
                ${plan.highlight
                                    ? 'border-[var(--accent-primary)] shadow-[0_0_30px_rgba(212,175,55,0.35)]'
                                    : 'border-[var(--border-subtle)] hover:border-[var(--accent-primary)]/40'
                                }
              `}
                            style={{ animationDelay: `${index * 0.12}s` }}
                        >
                            {/* Badge */}
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-primary-light)] px-4 py-1 text-xs font-bold text-[var(--bg-primary)]">
                                        MOST POPULAR
                                    </span>
                                </div>
                            )}

                            {/* Title */}
                            <h3 className="mb-2 text-xl font-semibold text-[var(--text-primary)]">
                                {plan.name}
                            </h3>
                            <p className="mb-6 text-sm text-[var(--text-secondary)]">
                                {plan.description}
                            </p>

                            {/* Price */}
                            <div className="mb-6">
                                <span className="block text-4xl font-bold gradient-text">
                                    PKR {plan.price}
                                </span>
                                <span className="text-sm text-[var(--text-muted)]">
                                    {plan.name === 'Maintenance' ? 'per visit / month' : 'one-time'}
                                </span>
                            </div>

                            {/* Features */}
                            <ul className="mb-8 space-y-3 text-sm">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-3 text-[var(--text-secondary)]"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--accent-primary)]"
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

                            {/* CTA */}
                            <a
                                href="https://wa.me/923486105960?text=Hi%2C%20I%20would%20like%20to%20know%20which%20pricing%20option%20is%20best%20for%20me"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                  block
                  w-full
                  rounded-xl
                  px-6
                  py-3
                  text-center
                  font-semibold
                  transition
                  ${plan.highlight
                                        ? 'bg-[var(--accent-primary)] text-[var(--bg-primary)] hover:scale-[1.03]'
                                        : 'border border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-[var(--bg-primary)]'
                                    }
                `}
                            >
                                Get Started
                            </a>
                        </article>
                    ))}
                </div>

                {/* Disclaimer */}
                <p className="mt-10 text-center text-sm text-[var(--text-muted)]">
                    Final pricing depends on hair type, base size, and service requirements.
                </p>
            </div>
        </section>
    );
}
