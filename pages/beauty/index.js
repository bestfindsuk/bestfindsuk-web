import Layout from "../../components/Layout";
import ProductCard from "../../components/ProductCard";
import { loadProducts } from "../../lib/loadProducts";
import Link from "next/link";

export async function getStaticProps() {
  const products = loadProducts();

  return {
    props: {
      products,
      lastUpdated: new Date().toISOString().split("T")[0],
    },
  };
}

export default function BeautyCategory({ products, lastUpdated }) {
  return (
    <Layout
      title="Beauty & Clean Cosmetics"
      description="Curated clean beauty products from brands that prioritize non-toxic ingredients without sacrificing performance. All products £30-£200."
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
              Beauty & Clean Cosmetics
            </h1>
            <p className="text-grey text-lg leading-relaxed">
              We curate clean, high-performance beauty products from brands that
              prioritize non-toxic ingredients without sacrificing efficacy. Every
              product here has been researched for formulation quality, brand
              ethics, and real-world performance.
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
              href="/beauty/concealers/clean-under-60"
              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-charcoal hover:bg-sage hover:text-white transition-colors"
            >
              Clean Concealers Under £60
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
              All Beauty Products ({products.length})
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
        </div>
      </section>
    </Layout>
  );
}
