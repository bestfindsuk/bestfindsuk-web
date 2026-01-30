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
      description="Everyday essentials that quietly make life better. Products we've researched for build quality, thoughtful design, and genuine usefulness."
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
              Home & Kitchen
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
              The everyday things that matter
            </h1>
            <p className="text-grey text-lg leading-relaxed">
              There's something satisfying about a tool that just works. We look for
              home essentials with real craftsmanship—things you'll reach for again
              and again without thinking twice.
            </p>
            <p className="text-xs text-grey-light mt-6">
              Updated {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Subcategories */}
      <section className="py-6 bg-cream border-y border-cream-dark">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-grey mr-2">Browse:</span>
            <Link
              href="/home/vacuums/cordless-under-120"
              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-charcoal hover:bg-sage hover:text-white transition-colors shadow-sm"
            >
              Cordless Vacuums Under £120
            </Link>
            <Link
              href="/home/vacuums/cordless-under-200"
              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-charcoal hover:bg-sage hover:text-white transition-colors shadow-sm"
            >
              Cordless Vacuums Under £200
            </Link>
            <span className="px-4 py-2 text-sm text-grey-light">
              More coming soon
            </span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-14 md:py-20">
        <div className="container">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-charcoal">
              All picks
            </h2>
            <p className="text-grey text-sm mt-1">{products.length} products</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-20">
              <p className="text-grey">We're still curating this category. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-6 bg-cream-dark/30">
        <div className="container">
          <p className="text-xs text-grey-light text-center">
            Some links are affiliate links—we may earn a small commission at no extra cost to you.
          </p>
        </div>
      </section>
    </Layout>
  );
}
