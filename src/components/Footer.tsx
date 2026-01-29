export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            role="contentinfo"
            className="
        bg-[var(--bg-primary)]
        border-t
        border-[var(--border-subtle)]
        py-[clamp(3rem,6vw,5rem)]
      "
        >
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="mb-4 flex items-center gap-3">
                            <div
                                aria-hidden="true"
                                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-lg
                  bg-gradient-to-br
                  from-[var(--accent-primary)]
                  to-[var(--accent-primary-light)]
                  text-lg
                  font-bold
                  text-[var(--bg-primary)]
                "
                            >
                                CF
                            </div>
                            <span className="text-xl font-bold gradient-text">
                                CrownFit Men
                            </span>
                        </div>

                        <p className="mb-6 max-w-sm text-sm leading-relaxed text-[var(--text-secondary)]">
                            Premium, discreet hair patch solutions for men — including
                            consultation, home fitting, and long-term maintenance across
                            Lahore.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {/* Instagram */}
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="
      group
      glass
      flex h-10 w-10 items-center justify-center
      rounded-full
      transition
      hover:bg-[var(--accent-primary)]
      focus-visible:outline
      focus-visible:outline-2
      focus-visible:outline-offset-2
      focus-visible:outline-[var(--focus-ring)]
    "
                            >
                                <svg
                                    className="h-5 w-5 text-[var(--text-secondary)] group-hover:text-[var(--bg-primary)]"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5z" />
                                    <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
                                    <circle cx="17.5" cy="6.5" r="1" />
                                </svg>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/923486105960"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="
      group
      glass
      flex h-10 w-10 items-center justify-center
      rounded-full
      transition
      hover:bg-[var(--accent-primary)]
      focus-visible:outline
      focus-visible:outline-2
      focus-visible:outline-offset-2
      focus-visible:outline-[var(--focus-ring)]
    "
                            >
                                <svg
                                    className="h-5 w-5 text-[var(--text-secondary)] group-hover:text-[var(--bg-primary)]"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M12 2C6.477 2 2 6.484 2 12c0 1.937.553 3.743 1.507 5.27L2 22l4.863-1.476A9.95 9.95 0 0012 22c5.523 0 10-4.484 10-10S17.523 2 12 2zm0 18.5a8.45 8.45 0 01-4.317-1.183l-.31-.185-2.886.876.94-2.806-.202-.323A8.458 8.458 0 013.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z" />
                                    <path d="M16.47 13.38c-.256-.128-1.515-.747-1.75-.832-.234-.085-.405-.128-.576.128-.17.256-.66.832-.81 1.002-.15.17-.298.192-.554.064-.256-.128-1.08-.397-2.056-1.266-.76-.678-1.274-1.516-1.423-1.772-.15-.256-.016-.394.112-.522.115-.114.256-.298.384-.448.128-.15.17-.256.256-.427.085-.17.043-.32-.021-.448-.064-.128-.576-1.386-.789-1.898-.208-.499-.419-.43-.576-.43h-.49c-.17 0-.448.064-.682.32-.234.256-.896.875-.896 2.134s.917 2.474 1.045 2.644c.128.17 1.806 2.758 4.378 3.87.612.264 1.089.421 1.46.538.615.196 1.176.168 1.618.102.494-.074 1.515-.623 1.728-1.224.213-.6.213-1.113.15-1.224-.064-.106-.234-.17-.49-.298z" />
                                </svg>
                            </a>
                        </div>

                    </div>

                    {/* Quick Links */}
                    <nav aria-label="Footer navigation">
                        <h4 className="mb-4 text-sm font-semibold text-[var(--text-primary)]">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm">
                            {[
                                { name: 'Services', href: '/#services' },
                                { name: 'Pricing', href: '/#pricing' },
                                { name: 'Book Consultation', href: '/booking' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)]"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-[var(--text-primary)]">
                            Contact
                        </h4>
                        <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                            <li>Lahore, Pakistan</li>
                            <li>+92 348 6105960</li>
                            <li>trick.9man@gmail.com</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-6 md:flex-row">
                    <p className="text-xs text-[var(--text-muted)]">
                        © {currentYear} CrownFit Men. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs">
                        <a
                            href="/privacy"
                            className="text-[var(--text-muted)] hover:text-[var(--accent-primary)]"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="/terms"
                            className="text-[var(--text-muted)] hover:text-[var(--accent-primary)]"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
