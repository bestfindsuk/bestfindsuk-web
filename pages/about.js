import Layout from "../components/Layout";
import Link from "next/link";

export default function About() {
  return (
    <Layout
      title="About Us"
      description="The story behind BestFindsUK—why we started, how we choose what to feature, and what makes us different."
    >
      {/* Hero */}
      <section className="bg-white">
        <div className="container py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sage-dark font-medium mb-4 tracking-wide uppercase text-sm">
              About us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
              We believe in fewer, better things
            </h1>
            <p className="text-xl text-grey leading-relaxed">
              In a world of endless options, we help you find the ones actually worth having.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-cream to-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-charcoal mb-8">Why we started this</h2>
            <div className="prose text-grey space-y-5 leading-relaxed">
              <p>
                We got tired of the same old product roundups. You know the ones—fifty "best"
                items that all feel like they were picked by an algorithm, not a person.
              </p>
              <p>
                So we started doing our own research. Reading the real reviews. Checking what
                things are actually made of. Asking friends what they've tried and loved (or regretted).
              </p>
              <p>
                What started as a personal habit turned into this: a place where we share the
                things we've genuinely vetted. Not everything, just the good stuff.
              </p>
              <p className="text-charcoal font-medium">
                Quality over quantity. Always.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Choose */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-charcoal mb-10">
              How we decide what makes the cut
            </h2>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-sage/20 to-sage/5 text-sage-dark rounded-xl text-sm font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">We dig in</h3>
                  <p className="text-grey text-sm leading-relaxed">
                    We look at what it's made of, who makes it, and what people who've actually
                    used it have to say—the good reviews and the honest critiques.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-sage/20 to-sage/5 text-sage-dark rounded-xl text-sm font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">We ask the hard questions</h3>
                  <p className="text-grey text-sm leading-relaxed">
                    Is this brand actually doing what they claim? Does this product live up
                    to the hype? Is there something better out there?
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-sage/20 to-sage/5 text-sage-dark rounded-xl text-sm font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">We apply the friend test</h3>
                  <p className="text-grey text-sm leading-relaxed">
                    Would we actually recommend this to someone we care about? If there's any
                    hesitation, it doesn't make the list.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-sage/20 to-sage/5 text-sage-dark rounded-xl text-sm font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">We keep it fresh</h3>
                  <p className="text-grey text-sm leading-relaxed">
                    Things change. Prices shift, products get reformulated, better options
                    come along. We revisit our picks regularly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Skip */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-charcoal mb-8">
              Things you won't find here
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <ul className="space-y-4 text-grey">
                <li className="flex items-start gap-4">
                  <span className="text-terracotta mt-1">×</span>
                  <span>Products we featured because they pay well (that's not how this works)</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-terracotta mt-1">×</span>
                  <span>Sponsored posts or paid placements—everything here is genuinely chosen</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-terracotta mt-1">×</span>
                  <span>Cheap stuff that'll fall apart—we're looking for things that last</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-terracotta mt-1">×</span>
                  <span>Pressure tactics or fake urgency—take your time, we're not going anywhere</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-charcoal mb-8">
              A note on how we keep the lights on
            </h2>
            <div className="prose text-grey space-y-5 leading-relaxed">
              <p>
                Yes, we use affiliate links. When you buy something through our links,
                we might earn a small commission—at no extra cost to you.
              </p>
              <p>
                But here's what matters: we'd recommend these things whether there was a
                commission or not. The products come first. The business model just helps
                us keep doing this.
              </p>
              <p>
                No ads. No paywalls. Just honest recommendations and a bit of trust.
              </p>
              <p className="text-sm">
                Want the full details?{" "}
                <Link href="/disclosure" className="text-sage-dark hover:text-terracotta underline">
                  Read our disclosure
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-cream to-cream-dark/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Ready to explore?
            </h2>
            <p className="text-grey mb-10">
              See what we've been finding lately.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/beauty" className="btn btn-primary">
                Beauty
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
      <section className="py-6 bg-cream-dark/30">
        <div className="container">
          <p className="text-center text-sm text-grey">
            Got a question or a product we should know about?{" "}
            <Link href="/contact" className="text-sage-dark hover:text-terracotta underline">
              We'd love to hear from you
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
