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
              Have a product suggestion? Found an error? Just want to say hello?
              We'd love to hear from you.
            </p>

            <div className="bg-white rounded-xl p-8 md:p-12 text-left">
              <div className="space-y-8">
                {/* Product Suggestions */}
                <div>
                  <h2 className="font-semibold text-charcoal mb-2">
                    Product Suggestions
                  </h2>
                  <p className="text-grey text-sm">
                    Know a product we should feature? We're always looking for
                    quality recommendations. Please note we only feature
                    products in the £30-£200 range that meet our quality criteria.
                  </p>
                </div>

                {/* Issues & Corrections */}
                <div>
                  <h2 className="font-semibold text-charcoal mb-2">
                    Issues & Corrections
                  </h2>
                  <p className="text-grey text-sm">
                    Found a broken link, incorrect price, or outdated information?
                    Please let us know so we can fix it. We appreciate your help
                    keeping our recommendations accurate.
                  </p>
                </div>

                {/* Business Enquiries */}
                <div>
                  <h2 className="font-semibold text-charcoal mb-2">
                    Business Enquiries
                  </h2>
                  <p className="text-grey text-sm">
                    For partnership or business-related enquiries, please reach out.
                    Note: We do not accept sponsored posts or paid product placements.
                  </p>
                </div>

                {/* Contact Note */}
                <div className="pt-4 border-t border-cream-dark">
                  <p className="text-grey text-sm">
                    Contact form coming soon. In the meantime, you can reach us through
                    our social media channels.
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
