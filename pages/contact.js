import Layout from "../components/Layout";
import Link from "next/link";

export default function Contact() {
  return (
    <Layout
      title="Contact Us"
      description="Get in touch with BestFindsUK - product suggestions, questions, or feedback."
    >
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Get in Touch
            </h1>
            <p className="text-grey text-lg mb-12">
              Whether you've discovered something brilliant or just want to chat about
              your favourite finds—we're all ears.
            </p>

            <div className="bg-white rounded-xl p-8 md:p-12 text-left">
              <div className="space-y-8">
                {/* Product Suggestions */}
                <div>
                  <h2 className="font-semibold text-charcoal mb-2">
                    Spotted something good?
                  </h2>
                  <p className="text-grey text-sm">
                    We love hearing about products that have made your life a little
                    better. If you've found something special, we'd genuinely like to
                    know about it.
                  </p>
                </div>

                {/* Issues & Corrections */}
                <div>
                  <h2 className="font-semibold text-charcoal mb-2">
                    Something not quite right?
                  </h2>
                  <p className="text-grey text-sm">
                    Spotted a broken link or something that needs updating? Thank you
                    for helping us keep things accurate—we really appreciate it.
                  </p>
                </div>

                {/* Business Enquiries */}
                <div>
                  <h2 className="font-semibold text-charcoal mb-2">
                    Working together
                  </h2>
                  <p className="text-grey text-sm">
                    Open to chatting about partnerships and collaborations. Worth
                    knowing: we keep our editorial independent, so we don't do
                    sponsored posts or paid placements.
                  </p>
                </div>

                {/* Contact Note */}
                <div className="pt-4 border-t border-cream-dark">
                  <p className="text-grey text-sm">
                    Contact form on the way. For now, drop us a line through social media.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-grey text-sm mb-4">
                We typically respond within 2-3 business days.
              </p>
              <Link
                href="/"
                className="text-sage-dark hover:text-terracotta inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
