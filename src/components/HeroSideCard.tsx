'use client';

import { useEffect, useRef, useState } from 'react';

type Variant = 'card' | 'image';

interface HeroSideCardProps {
    variant?: Variant;
}

export default function HeroSideCard({ variant = 'card' }: HeroSideCardProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.35 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    if (variant === 'image') {
        return (
            <div
                ref={ref}
                className={`
          hidden lg:flex justify-center
          transition-all duration-700 ease-out
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
            >
                <div className="overflow-hidden rounded-3xl border border-[var(--border-subtle)]">
                    <img
                        src="/hero/blurred-before-after.webp"
                        alt="Hair patch transformation (privacy protected)"
                        className="h-[420px] w-[320px] object-cover"
                    />
                </div>
            </div>
        );
    }

    return (
        <div
            ref={ref}
            className={`
        hidden lg:flex justify-center
        transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
        >
            <div
                className="
          glass
          rounded-3xl
          border
          border-[var(--border-subtle)]
          p-8
          backdrop-blur-xl
          shadow-[0_0_40px_rgba(0,0,0,0.35)]
          max-w-sm
        "
            >
                <div className="flex flex-col gap-6">
                    <div>
                        <p className="text-xs uppercase tracking-wide text-[var(--text-muted)]">
                            Hair Patch Home Service
                        </p>
                        <h3 className="mt-1 text-lg font-semibold text-[var(--text-primary)]">
                            Discreet • Non-Surgical • Natural
                        </h3>
                    </div>

                    <ul className="space-y-3 text-sm">
                        {[
                            'No surgery or medication',
                            'Sweat-proof tape & adhesive',
                            'Natural hairline & density',
                            'Male technician only',
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span
                                    aria-hidden="true"
                                    className="
                    mt-0.5
                    flex h-5 w-5 items-center justify-center
                    rounded-full
                    bg-[var(--accent-primary)]/20
                    text-[var(--accent-primary)]
                    text-xs font-bold
                  "
                                >
                                    ✓
                                </span>
                                <span className="text-[var(--text-secondary)]">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div
                        className="
              rounded-xl
              bg-[var(--accent-primary)]/10
              px-4 py-2
              text-center
              text-xs font-semibold
              text-[var(--accent-primary)]
            "
                    >
                        Serving Lahore — Home Visits Only
                    </div>
                </div>
            </div>
        </div>
    );
}
