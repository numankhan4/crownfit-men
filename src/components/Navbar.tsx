'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/#services' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'Book Now', href: '/booking' },
    ];

    return (
        <nav
            aria-label="Main navigation"
            className="
        fixed
        inset-x-0
        top-0
        z-50
        h-[var(--header-height)]
        bg-[var(--bg-secondary)]/80
        backdrop-blur-xl
        border-b
        border-[var(--border-subtle)]
      "
        >
            <div className="mx-auto max-w-7xl px-6 h-full">
                <div className="flex h-full items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="group flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
                    >
                        <div
                            aria-hidden="true"
                            className="
                flex h-10 w-10 items-center justify-center
                rounded-lg
                bg-gradient-to-br
                from-[var(--accent-primary)]
                to-[var(--accent-primary-light)]
                text-[var(--bg-primary)]
                font-bold
                text-lg
                transition-transform
                group-hover:scale-110
              "
                        >
                            CF
                        </div>
                        <span className="text-lg font-bold gradient-text">
                            CrownFit Men
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="
                  text-sm
                  font-medium
                  text-[var(--text-secondary)]
                  transition-colors
                  hover:text-[var(--accent-primary)]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[var(--focus-ring)]
                "
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Primary CTA */}
                        <Link
                            href="/booking"
                            className="
                rounded-xl
                bg-[var(--accent-primary)]
                px-5
                py-2.5
                text-sm
                font-semibold
                text-[var(--bg-primary)]
                transition
                hover:scale-[1.03]
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[var(--focus-ring)]
              "
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        type="button"
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        onClick={() => setIsOpen((v) => !v)}
                        className="
              md:hidden
              inline-flex
              items-center
              justify-center
              rounded-lg
              p-2
              text-[var(--text-primary)]
              hover:bg-white/5
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[var(--focus-ring)]
            "
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    id="mobile-menu"
                    className="
            md:hidden
            border-t
            border-[var(--border-subtle)]
            bg-[var(--bg-secondary)]
            px-6
            py-6
            animate-fade-in
          "
                >
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="
                  text-base
                  font-medium
                  text-[var(--text-secondary)]
                  transition-colors
                  hover:text-[var(--accent-primary)]
                "
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link
                            href="/booking"
                            onClick={() => setIsOpen(false)}
                            className="
                mt-2
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-[var(--accent-primary)]
                px-6
                py-3
                text-base
                font-semibold
                text-[var(--bg-primary)]
              "
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
