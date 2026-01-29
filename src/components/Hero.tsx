'use client';

import Link from 'next/link';
import HeroSideCard from '@/components/HeroSideCard';

export default function Hero() {
    return (
        <header
            aria-labelledby="hero-heading"
            className="
        relative
        flex
        min-h-[calc(100svh-var(--header-height))]
        items-center
        overflow-hidden
        bg-[var(--bg-primary)]
        pt-[calc(var(--header-height)+clamp(2rem,6vw,6rem))]
        pb-[clamp(3rem,8vw,7rem)]
      "
        >
            {/* Background */}
            <div aria-hidden="true" className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)]" />
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute top-1/3 left-1/4 h-80 w-80 rounded-full bg-[var(--accent-primary)]/25 blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-[var(--accent-secondary)]/25 blur-[120px]" />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
                        {/* Left */}
                        <div className="max-w-xl">
                            <h1
                                id="hero-heading"
                                className="
                  text-balance
                  text-4xl
                  font-semibold
                  leading-tight
                  tracking-tight
                  text-[var(--text-primary)]
                  md:text-5xl
                  xl:text-6xl
                "
                            >
                                Premium Hair Patch Solutions
                                <span className="mt-2 block bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                                    At Your Doorstep in Lahore
                                </span>
                            </h1>

                            <p className="mt-6 text-lg leading-relaxed text-[var(--text-muted)] md:text-xl">
                                Natural-looking hair systems with discreet home fitting and
                                professional maintenance — without surgery.
                            </p>

                            {/* Trust Signals */}
                            <ul className="mt-8 grid grid-cols-2 gap-4 text-sm text-[var(--text-primary)]">
                                {[
                                    '100% Confidential',
                                    'Home Service',
                                    'Expert Guidance',
                                    'Natural Results',
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <span
                                            aria-hidden="true"
                                            className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent-primary)]/15"
                                        >
                                            ✓
                                        </span>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <a
                                    href="https://wa.me/923486105960?text=Hi%2C%20I%20want%20a%20free%20hair%20patch%20consultation"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Book free hair patch consultation on WhatsApp"
                                    className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-[var(--accent-primary)]
                    px-7
                    py-4
                    text-lg
                    font-semibold
                    text-black
                    transition
                    hover:scale-[1.02]
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-[var(--accent-primary)]
                  "
                                >
                                    Book Free Consultation
                                </a>

                                <Link
                                    href="#services"
                                    className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[var(--text-primary)]/20
                    px-7
                    py-4
                    text-lg
                    font-medium
                    text-[var(--text-primary)]
                    transition
                    hover:bg-[var(--text-primary)]/5
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-[var(--text-primary)]
                  "
                                >
                                    View Services
                                </Link>
                            </div>

                            <p className="mt-4 text-sm text-[var(--text-muted)]">
                                Same-day or scheduled appointments available in Lahore
                            </p>
                        </div>

                        {/* Right Visual */}
                        <HeroSideCard />

                    </div>
                </div>
            </div>

            {/* Scroll cue */}
            <div
                aria-hidden="true"
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--accent-primary)] animate-bounce motion-reduce:animate-none"
            >
                ↓
            </div>
        </header>
    );
}
