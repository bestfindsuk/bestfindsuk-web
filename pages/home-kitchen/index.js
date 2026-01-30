import Layout from "../../components/Layout";
import ProductCard from "../../components/ProductCard";
import { loadVacuums } from "../../lib/loadVacuums";
import Link from "next/link";

export async function getStaticProps() {
  const vacuums = loadVacuums();

  // Filter to reasonable price range
  const products = vacuums.filter((v) => v.price_gbp > 0);

  return {
    props: {
      products,
      lastUpdated: new Date().toISOString().split("T")[0],
    },
  };
}

export default function HomeKitchenCategory({ products, lastUpdated }) {
  return (
    <Layout
      title="Home & Kitchen"
      description="Quality home essentials built to last - from cordless vacuums to kitchen tools. All products researched for durability, performance, and value."
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
              Home & Kitchen
            </h1>
            <p className="text-grey text-lg leading-relaxed">
              Quality home essentials that make everyday life easier. We focus on
              products built to last, with thoughtful design and genuine utility.
              From cordless vacuums to kitchen tools, every item is selected for
              durability, performance, and real value.
            </p>
            <p className="text-sm text-grey-light mt-4">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Subcategories */}
      <section className="py-8 bg-cream">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/home/vacuums/cordless-under-120"
              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-charcoal hover:bg-sage hover:text-white transition-colors"
            >
              Cordless Vacuums Under £120
            </Link>
            <Link
              href="/home/vacuums/cordless-under-200"
              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-charcoal hover:bg-sage hover:text-white transition-colors"
            >
              Cordless Vacuums Under £200
            </Link>
            <span className="px-4 py-2 bg-cream-dark rounded-full text-sm text-grey cursor-default">
              More coming soon...
            </span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <h2 className="text-xl font-semibold text-charcoal">
              All Home & Kitchen Products ({products.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-16">
              <p className="text-grey">No products found in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-8 bg-cream-dark/50">
        <div className="container">
          <p className="text-sm text-grey">
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
