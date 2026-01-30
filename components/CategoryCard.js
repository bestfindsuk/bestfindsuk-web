import Link from "next/link";

export default function CategoryCard({ title, description, href, icon }) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300"
    >
      {/* Icon */}
      <div className="w-12 h-12 mb-4 flex items-center justify-center bg-sage/10 text-sage-dark rounded-lg group-hover:bg-sage group-hover:text-white transition-colors">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-charcoal mb-2 group-hover:text-sage-dark transition-colors">
        {title}
      </h3>
      <p className="text-grey text-sm leading-relaxed mb-4">{description}</p>

      {/* CTA */}
      <span className="inline-flex items-center text-sm font-medium text-sage-dark group-hover:text-terracotta transition-colors">
        Explore
        <svg
          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </Link>
  );
}

// Icon components for categories
export const BeautyIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

export const HomeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

export const LifestyleIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
