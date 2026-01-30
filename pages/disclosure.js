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
                We want to be upfront about how we keep the lights on. When you buy
                something through a link on our site, we might earn a small commission.
                It's how we fund the time we spend researching and writing.
              </p>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                How it works
              </h2>
              <p>
                If you click a product link here and end up buying it, the retailer
                may pay us a small cut. It doesn't cost you anything extra—you pay
                the same price either way.
              </p>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                Who we work with
              </h2>
              <p>We have affiliate relationships with retailers including Amazon, Space NK, Cult Beauty, Sephora UK, and others you'll see mentioned on product pages.</p>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                Amazon Associates Disclosure
              </h2>
              <p>
                As an Amazon Associate, BestFindsUK earns from qualifying purchases.
                Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its
                affiliates.
              </p>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                What doesn't change
              </h2>
              <p>
                The money side of things never affects what we recommend. A few things
                that matter to us:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  We don't take money to feature products. If it's here, it earned its spot.
                </li>
                <li>
                  Commission rates don't influence what we pick. Better commission doesn't
                  mean better placement.
                </li>
                <li>
                  We only recommend things we'd genuinely consider buying ourselves.
                </li>
                <li>
                  We're honest about what we don't know, too.
                </li>
              </ul>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                Why we do it this way
              </h2>
              <p>
                Affiliate income lets us keep the site ad-free and without paywalls.
                It gives us time to properly research products and keep recommendations
                up to date. We think it's a fair trade.
              </p>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                Questions?
              </h2>
              <p>
                Curious about anything else? Happy to chat—just{" "}
                <Link href="/contact" className="text-sage-dark hover:text-terracotta underline">
                  get in touch
                </Link>.
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
