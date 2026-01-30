import Layout from "../components/Layout";
import Link from "next/link";

export default function About() {
  return (
    <Layout
      title="About Us"
      description="Learn about BestFindsUK - who we are, how we curate products, and why we focus on quality over quantity."
    >
      {/* Hero */}
      <section className="bg-white border-b border-cream-dark">
        <div className="container py-12 md:py-20">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              About BestFindsUK
            </h1>
            <p className="text-xl text-grey leading-relaxed">
              We're not another generic affiliate site. We're product enthusiasts
              who got tired of sifting through endless "best of" lists filled with
              mediocre recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-charcoal mb-6">Our Story</h2>
            <div className="prose text-grey space-y-4">
              <p>
                Hi, I'm Aish. I'm a product manager by day and a research enthusiast
                by nature. BestFindsUK started because I was frustrated with the state
                of product recommendations online.
              </p>
              <p>
                Too many "review" sites just list whatever pays the highest commission.
                Too many "best of" articles are written by people who've never actually
                used the products. And too many recommendation lists include cheap items
                that break within months.
              </p>
              <p>
                I wanted something different: a curated collection of products in the
                sweet spot of £30-£200—premium enough to actually be well-made, but
                accessible enough that real people can afford them. Products I'd
                genuinely recommend to friends and family.
              </p>
              <p>
                That's BestFindsUK. Quality over quantity. Research over commissions.
                Genuine recommendations over generic lists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curation Process */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-charcoal mb-6">
              How We Curate Products
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-sage/10 text-sage-dark rounded-full font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Research</h3>
                  <p className="text-grey text-sm">
                    We dig into materials, manufacturing processes, and brand
                    reputation. We read real user reviews—not just the 5-star ones,
                    but the critical ones too.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-sage/10 text-sage-dark rounded-full font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Verify</h3>
                  <p className="text-grey text-sm">
                    We check certifications (cruelty-free, clean beauty, etc.),
                    verify brand ethics claims, and assess value for money against
                    alternatives.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-sage/10 text-sage-dark rounded-full font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Filter</h3>
                  <p className="text-grey text-sm">
                    We apply strict criteria for each category. Not every product
                    makes the cut—we only include items we'd genuinely buy ourselves.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-sage/10 text-sage-dark rounded-full font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Update</h3>
                  <p className="text-grey text-sm">
                    We regularly review our recommendations. Prices change, products
                    get discontinued, and better options appear. We keep our lists
                    current.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-charcoal mb-6">
              What We Don't Do
            </h2>
            <div className="bg-cream rounded-lg p-6">
              <ul className="space-y-3 text-grey">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span><strong>Chase commissions:</strong> We never prioritize products just because they pay more. Our recommendations are based on quality, not affiliate rates.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span><strong>Accept sponsored posts:</strong> We don't take money to feature products. Everything here is genuinely curated.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span><strong>Feature cheap dupes:</strong> We focus on quality products that last, not the cheapest option available.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span><strong>Use fake urgency:</strong> No "Only 2 left!" messages. No pressure tactics. Just honest recommendations.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-charcoal mb-6">
              Our Commitment to Transparency
            </h2>
            <div className="prose text-grey space-y-4">
              <p>
                Yes, we use affiliate links. When you buy through our links, we may
                earn a small commission at no extra cost to you. This is how we keep
                BestFindsUK running without ads or paywalls.
              </p>
              <p>
                But here's the thing: we'd recommend these products even if there
                was no commission. The affiliate revenue helps us spend more time
                researching and curating—not less time being honest.
              </p>
              <p>
                We clearly label affiliate links and maintain a detailed{" "}
                <Link href="/disclosure" className="text-sage-dark hover:text-terracotta underline">
                  disclosure policy
                </Link>{" "}
                for full transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Ready to Explore?
            </h2>
            <p className="text-grey mb-8">
              Browse our curated categories and find products worth your money.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/beauty" className="btn btn-primary">
                Beauty & Cosmetics
              </Link>
              <Link href="/home-kitchen" className="btn btn-secondary">
                Home & Kitchen
              </Link>
              <Link href="/lifestyle" className="btn btn-secondary">
                Lifestyle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-8 bg-cream-dark/50">
        <div className="container">
          <p className="text-center text-sm text-grey">
            Have questions or product suggestions? Get in touch at{" "}
            <a href="mailto:hello@bestfindsuk.com" className="text-sage-dark hover:text-terracotta underline">
              hello@bestfindsuk.com
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
