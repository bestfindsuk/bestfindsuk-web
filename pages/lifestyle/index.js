import Layout from "../../components/Layout";
import Link from "next/link";

export default function LifestyleCategory() {
  return (
    <Layout
      title="Lifestyle & Workspace"
      description="Thoughtfully designed products for work and life - notebooks, desk accessories, leather goods, and everyday carry essentials. Coming soon."
    >
      {/* Hero */}
      <section className="bg-white border-b border-cream-dark">
        <div className="container py-12 md:py-16">
          <div className="max-w-2xl">
            <Link
              href="/"
              className="text-sm text-grey hover:text-charcoal mb-4 inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Lifestyle & Workspace
            </h1>
            <p className="text-grey text-lg leading-relaxed">
              Thoughtfully designed products for work and life. We're curating
              quality notebooks, desk accessories, leather goods, and everyday
              carry essentials that combine function with lasting style.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-sage/10 text-sage-dark rounded-full">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Coming Soon
            </h2>
            <p className="text-grey mb-8">
              We're carefully curating quality lifestyle products including premium
              notebooks, leather wallets, desk accessories, and everyday carry
              essentials. Check back soon!
            </p>

            <div className="bg-cream rounded-lg p-6 text-left">
              <h3 className="font-semibold text-charcoal mb-3">What to expect:</h3>
              <ul className="space-y-2 text-sm text-grey">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Best leather wallets under £100
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Premium notebooks for journaling
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Quality desk accessories
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Everyday carry essentials
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Link href="/" className="btn btn-secondary">
                Browse Other Categories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
