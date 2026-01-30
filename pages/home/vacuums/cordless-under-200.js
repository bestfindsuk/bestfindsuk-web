import Layout from "../../../components/Layout";
import ProductCard from "../../../components/ProductCard";
import { loadVacuums } from "../../../lib/loadVacuums";
import Link from "next/link";

export async function getStaticProps() {
  const vacuums = loadVacuums();

  const filtered = vacuums.filter(
    (v) => v.category === "vacuum" && v.cordless === "yes" && v.price_gbp > 0 && v.price_gbp <= 200
  );

  return {
    props: {
      products: filtered,
      lastUpdated: new Date().toISOString().split("T")[0],
    },
  };
}

export default function CordlessUnder200({ products, lastUpdated }) {
  return (
    <Layout
      title="Cordless Vacuums Under £200"
      description="The best cordless vacuum cleaners available in the UK under £200. Premium options with better suction, longer battery life, and more features."
    >
      {/* Hero */}
      <section className="bg-white border-b border-cream-dark">
        <div className="container py-12 md:py-16">
          <div className="max-w-2xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-grey mb-4">
              <Link href="/" className="hover:text-charcoal">Home</Link>
              <span>/</span>
              <Link href="/home-kitchen" className="hover:text-charcoal">Home & Kitchen</Link>
              <span>/</span>
              <span className="text-charcoal">Cordless Vacuums</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Best Cordless Vacuums Under £200
            </h1>

            <p className="text-grey text-lg leading-relaxed mb-6">
              Stepping up your budget to £200 opens up better suction power, longer
              battery life, and more premium features. These are our top picks for
              cordless vacuums that deliver excellent performance without breaking
              the bank.
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
              <Link
                href="/home/vacuums/cordless-under-120"
                className="text-sm text-sage-dark hover:text-terracotta underline"
              >
                ← See budget options under £120
              </Link>
            </div>

            <p className="text-sm text-grey-light">
              Last updated: {lastUpdated} · {products.length} products
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-16">
              <p className="text-grey">No products found matching these criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-charcoal mb-6">
              How We Selected These Products
            </h2>

            <div className="prose text-grey">
              <p className="mb-4">
                Every vacuum on this list has been researched for real-world performance.
                At this price point, we expect better build quality, stronger suction,
                and longer battery life.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mt-6 mb-3">Our criteria:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Listed as a vacuum cleaner by the retailer or brand</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cordless operation</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priced at £200 or less at the time of checking</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Available in the UK</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-8 bg-cream-dark/50">
        <div className="container">
          <p className="text-sm text-grey max-w-2xl">
            <strong>Affiliate disclosure:</strong> Some links on this page are
            affiliate links. This means BestFindsUK may earn a small commission
            if you choose to make a purchase, at no extra cost to you.
          </p>
          <p className="text-sm text-grey mt-2">
            <strong>Amazon disclosure:</strong> As an Amazon Associate, BestFindsUK
            earns from qualifying purchases.
          </p>
        </div>
      </section>
    </Layout>
  );
}
