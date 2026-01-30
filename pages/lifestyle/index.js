import Layout from "../../components/Layout";
import Link from "next/link";

export default function LifestyleCategory() {
  return (
    <Layout
      title="Lifestyle & Workspace"
      description="From your desk to your daily carry. Thoughtful pieces for the spaces and moments where you spend your time."
    >
      {/* Hero */}
      <section className="bg-white">
        <div className="container py-16 md:py-20">
          <div className="max-w-2xl">
            <Link
              href="/"
              className="text-sm text-grey hover:text-charcoal mb-6 inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Home
            </Link>
            <p className="text-sage-dark font-medium mb-3 tracking-wide uppercase text-sm">
              Lifestyle & Workspace
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
              For the spaces in between
            </h1>
            <p className="text-grey text-lg leading-relaxed">
              The notebook that feels right in your hands. The wallet that ages
              beautifully. We're seeking out the pieces that make your everyday
              a little more intentional.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-cream to-white">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-white rounded-xl shadow-sm">
              <svg className="w-8 h-8 text-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Still in the works
            </h2>
            <p className="text-grey mb-10">
              We're taking our time with this one—hunting down the kind of pieces
              that feel special without trying too hard. Check back soon.
            </p>

            <div className="bg-white rounded-xl p-8 text-left shadow-sm">
              <h3 className="font-medium text-charcoal mb-4">On our radar:</h3>
              <ul className="space-y-3 text-sm text-grey">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0"></span>
                  Leather goods that get better with age
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0"></span>
                  Notebooks worth writing in
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0"></span>
                  Desk pieces that spark a little joy
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0"></span>
                  Everyday carry that's built to last
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <Link href="/" className="btn btn-secondary">
                Explore other categories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
