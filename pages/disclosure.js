import Layout from "../components/Layout";
import Link from "next/link";

export default function Disclosure() {
  return (
    <Layout
      title="Affiliate Disclosure"
      description="BestFindsUK affiliate disclosure - how we make money and maintain editorial independence."
    >
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
              Affiliate Disclosure
            </h1>

            <div className="prose text-grey space-y-6">
              <p className="text-lg">
                BestFindsUK is a participant in various affiliate advertising programs.
                This means we may earn a commission when you click on links and make
                purchases through our site.
              </p>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                How Affiliate Links Work
              </h2>
              <p>
                When you click on a product link on BestFindsUK and make a purchase,
                we may receive a small commission from the retailer. This commission
                comes at no additional cost to you—you pay the same price whether you
                use our link or go directly to the retailer.
              </p>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                Our Affiliate Partners
              </h2>
              <p>We participate in affiliate programs with various retailers, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Amazon Associates Programme (UK)</li>
                <li>Space NK</li>
                <li>Cult Beauty</li>
                <li>Sephora UK</li>
                <li>And other retailers as noted on individual product pages</li>
              </ul>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                Amazon Associates Disclosure
              </h2>
              <p>
                As an Amazon Associate, BestFindsUK earns from qualifying purchases.
                Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its
                affiliates.
              </p>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                Our Editorial Independence
              </h2>
              <p>
                Our commitment to honest recommendations is absolute. Here's how we
                maintain editorial independence:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>No paid placements:</strong> We never accept payment to
                  feature specific products.
                </li>
                <li>
                  <strong>Commission doesn't influence selection:</strong> We choose
                  products based on quality and value, not commission rates.
                </li>
                <li>
                  <strong>We recommend products we'd buy ourselves:</strong> If we
                  wouldn't use it, we won't recommend it.
                </li>
                <li>
                  <strong>Transparency about limitations:</strong> We're clear about
                  what we know and don't know about each product.
                </li>
              </ul>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                Why We Use Affiliate Links
              </h2>
              <p>
                Affiliate commissions help us cover the costs of running BestFindsUK—
                hosting, research time, and content creation. This allows us to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep the site free from advertisements</li>
                <li>Avoid paywalls or subscription models</li>
                <li>Spend more time researching and curating quality products</li>
                <li>Regularly update our recommendations</li>
              </ul>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                FTC Compliance
              </h2>
              <p>
                This disclosure is provided in accordance with the Federal Trade
                Commission's guidelines on endorsements and testimonials, as well
                as UK advertising standards. We believe in full transparency about
                our business model.
              </p>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                Questions?
              </h2>
              <p>
                If you have any questions about our affiliate relationships or how
                we select products, please don't hesitate to{" "}
                <a href="mailto:hello@bestfindsuk.com" className="text-sage-dark hover:text-terracotta underline">
                  contact us
                </a>.
              </p>

              <p className="text-sm text-grey-light mt-8">
                Last updated: January 2026
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-cream-dark">
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
