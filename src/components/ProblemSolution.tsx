export default function ProblemSolution() {
    return (
        <section
            aria-labelledby="problem-solution-heading"
            className="
        relative
        bg-[var(--bg-secondary)]
        py-[clamp(4rem,8vw,7rem)]
      "
        >
            {/* Subtle background glow */}
            <div aria-hidden="true" className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-secondary)]/10 blur-[180px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mx-auto mb-16 max-w-3xl text-center animate-fade-in-up">
                    <h2
                        id="problem-solution-heading"
                        className="mb-4 text-[var(--text-primary)]"
                    >
                        Hair Loss Affects Confidence —
                        <span className="mt-2 block gradient-text">
                            We Fix It, Privately.
                        </span>
                    </h2>
                </div>

                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Problems */}
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
                        <h3 className="mb-6 text-xl font-semibold text-[var(--accent-secondary)]">
                            Common Problems
                        </h3>

                        <ul className="space-y-4 text-sm">
                            {[
                                'Visible bald patches',
                                'Fear of transplant or surgery',
                                'Poor-quality hair units',
                                'No reliable repair support',
                            ].map((problem) => (
                                <li key={problem} className="flex items-start gap-3">
                                    <span
                                        aria-hidden="true"
                                        className="
                      mt-0.5
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--accent-secondary)]/15
                      text-[var(--accent-secondary)]
                    "
                                    >
                                        ✕
                                    </span>
                                    <span className="text-[var(--text-secondary)]">
                                        {problem}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </article>

                    {/* Solutions */}
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
                        <h3 className="mb-6 text-xl font-semibold gradient-text">
                            Our Solutions
                        </h3>

                        <ul className="space-y-4 text-sm">
                            {[
                                'Natural-looking hair patches',
                                'Secure, sweat-proof fitting',
                                'Discreet doorstep installation',
                                'Ongoing maintenance plans',
                            ].map((solution) => (
                                <li key={solution} className="flex items-start gap-3">
                                    <span
                                        aria-hidden="true"
                                        className="
                      mt-0.5
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--accent-primary)]/15
                      text-[var(--accent-primary)]
                    "
                                    >
                                        ✓
                                    </span>
                                    <span className="font-medium text-[var(--text-primary)]">
                                        {solution}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
}
