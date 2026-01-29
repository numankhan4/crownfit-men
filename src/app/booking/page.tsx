import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Book Consultation | CrownFit Men',
    description:
        'Book a confidential hair patch consultation with CrownFit Men. Discreet home service in Lahore.',
};

export default function BookingPage() {
    return (
        <>
            <Navbar />

            <main
                className="
          min-h-[calc(100svh-var(--header-height))]
          bg-[var(--bg-secondary)]
          pt-[calc(var(--header-height)+clamp(3rem,6vw,5rem))]
          pb-[clamp(4rem,8vw,6rem)]
        "
            >
                <div className="mx-auto max-w-4xl px-6">
                    {/* Header */}
                    <header className="mb-14 text-center animate-fade-in-up">
                        <h1 className="mb-4 text-[var(--text-primary)]">
                            Book Your <span className="gradient-text">Consultation</span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-[var(--text-secondary)] md:text-xl">
                            Choose a private, hassle-free way to get expert guidance on hair
                            patch solutions — no salon visits required.
                        </p>
                    </header>

                    {/* Booking Options */}
                    <section
                        aria-labelledby="booking-options-heading"
                        className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-2"
                    >
                        <h2 id="booking-options-heading" className="sr-only">
                            Booking options
                        </h2>

                        {/* WhatsApp */}
                        <article
                            className="
                glass
                rounded-2xl
                border
                border-[var(--accent-primary)]/40
                p-8
                shadow-[0_0_30px_rgba(212,175,55,0.25)]
                motion-safe:animate-fade-in-up
              "
                        >
                            <div className="mb-4 text-4xl" aria-hidden="true">
                                💬
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-[var(--text-primary)]">
                                WhatsApp Booking (Recommended)
                            </h3>
                            <p className="mb-6 text-sm leading-relaxed text-[var(--text-secondary)]">
                                Chat directly with our specialist for instant guidance, pricing
                                clarity, and discreet booking.
                            </p>

                            <a
                                href="https://wa.me/923486105960?text=Hi%2C%20I%20would%20like%20to%20book%20a%20hair%20patch%20consultation"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary block w-full text-center"
                                aria-label="Book hair patch consultation on WhatsApp"
                            >
                                Chat on WhatsApp
                            </a>
                        </article>

                        {/* Google Form */}
                        <article
                            className="
                glass
                rounded-2xl
                border
                border-[var(--border-subtle)]
                p-8
                motion-safe:animate-fade-in-up
              "
                        >
                            <div className="mb-4 text-4xl" aria-hidden="true">
                                📋
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-[var(--text-primary)]">
                                Quick Booking Form
                            </h3>
                            <p className="mb-6 text-sm leading-relaxed text-[var(--text-secondary)]">
                                Prefer filling a form? Share basic details and we’ll confirm your
                                consultation via WhatsApp.
                            </p>

                            <a
                                href="https://forms.gle/t7LFhGcfW94F3fkb9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[var(--accent-primary)]
                  px-6
                  py-3
                  font-semibold
                  text-[var(--accent-primary)]
                  transition
                  hover:bg-[var(--accent-primary)]
                  hover:text-[var(--bg-primary)]
                "
                            >
                                Open Booking Form
                            </a>
                        </article>
                    </section>

                    {/* What to Expect */}
                    <section
                        aria-labelledby="what-to-expect-heading"
                        className="
              glass
              rounded-2xl
              border
              border-[var(--border-subtle)]
              p-8
              motion-safe:animate-fade-in
            "
                    >
                        <h2
                            id="what-to-expect-heading"
                            className="mb-8 text-xl font-semibold text-[var(--text-primary)]"
                        >
                            What to Expect
                        </h2>

                        <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {[
                                {
                                    step: '1',
                                    title: 'Share Details',
                                    text: 'Tell us your concern via WhatsApp or form.',
                                },
                                {
                                    step: '2',
                                    title: 'Expert Guidance',
                                    text: 'We recommend the best hair patch option for you.',
                                },
                                {
                                    step: '3',
                                    title: 'Home Visit',
                                    text: 'Discreet doorstep fitting or maintenance visit.',
                                },
                            ].map((item) => (
                                <li key={item.step} className="text-center">
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
                      text-lg
                      font-bold
                      text-[var(--accent-primary)]
                    "
                                    >
                                        {item.step}
                                    </div>
                                    <h3 className="mb-1 font-semibold text-[var(--text-primary)]">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-[var(--text-secondary)]">
                                        {item.text}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    </section>

                    {/* Contact */}
                    <div className="mt-14 text-center text-sm text-[var(--text-secondary)]">
                        Need help? Call or message us anytime:
                        <div className="mt-3 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a
                                href="tel:+923486105960"
                                className="font-semibold text-[var(--accent-primary)]"
                            >
                                +92 348 6105960
                            </a>
                            <span className="hidden sm:inline text-[var(--text-muted)]">
                                |
                            </span>
                            <a
                                href="mailto:trick.9man@gmail.com"
                                className="font-semibold text-[var(--accent-primary)]"
                            >
                                trick.9man@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
