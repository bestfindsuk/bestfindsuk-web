import Layout from "../../../components/Layout";
import ProductCard from "../../../components/ProductCard";
import { loadVacuums } from "../../../lib/loadVacuums";
import Link from "next/link";

export async function getStaticProps() {
  const vacuums = loadVacuums();

  const filtered = vacuums.filter(
    (v) => v.category === "vacuum" && v.cordless === "yes" && v.price_gbp > 0 && v.price_gbp <= 120
  );

  return {
    props: {
      products: filtered,
      lastUpdated: new Date().toISOString().split("T")[0],
    },
  };
}

export default function CordlessUnder120({ products, lastUpdated }) {
  return (
    <Layout
      title="Cordless Vacuums Under £120"
      description="Great cordless vacuums that won't break the bank. We've done the research on suction, battery life, and real-world performance."
    >
      {/* Hero */}
      <section className="bg-white">
        <div className="container py-16 md:py-20">
          <div className="max-w-2xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-grey mb-6">
              <Link href="/" className="hover:text-charcoal">Home</Link>
              <span>/</span>
              <Link href="/home-kitchen" className="hover:text-charcoal">Home & Kitchen</Link>
              <span>/</span>
              <span className="text-charcoal">Cordless Vacuums</span>
            </nav>

            <p className="text-sage-dark font-medium mb-3 tracking-wide uppercase text-sm">
              Home & Kitchen
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
              Cordless vacuums under £120
            </h1>

            <p className="text-grey text-lg leading-relaxed mb-8">
              Good news: you don't need to spend a fortune. We've looked at what's
              actually out there under £120—checking suction, battery life, and what
              people say after they've lived with them for a while.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <Link
                href="/home/vacuums/cordless-under-200"
                className="text-sm text-sage-dark hover:text-terracotta"
              >
                Want more options? See vacuums under £200 →
              </Link>
            </div>

            <p className="text-xs text-grey-light">
              Updated {lastUpdated} · {products.length} products
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
      <section className="py-16 bg-gradient-to-b from-cream to-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-charcoal mb-6">
              How we chose these
            </h2>

            <div className="prose text-grey">
              <p>
                We look at the specs, read what actual owners say, and consider whether
                it's genuinely good value. Every vacuum here is cordless, available in
                the UK, and priced at £120 or less at the time we checked.
              </p>
            </div>
          </div>
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
