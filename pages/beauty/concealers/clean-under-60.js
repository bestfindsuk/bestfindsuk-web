import Layout from "../../../components/Layout";
import ProductCard from "../../../components/ProductCard";
import { loadProducts } from "../../../lib/loadProducts";
import Link from "next/link";

export async function getStaticProps() {
  const products = loadProducts();

  const filtered = products.filter(
    (p) =>
      p.category === "concealer" &&
      p.clean === "yes" &&
      Number(p.price_gbp) <= 60
  );

  return {
    props: {
      products: filtered,
      lastUpdated: new Date().toISOString().split("T")[0],
    },
  };
}

export default function CleanConcealersUnder60({ products, lastUpdated }) {
  return (
    <Layout
      title="The Best Clean Concealers Under £60"
      description="Curated clean beauty concealers available in the UK, all under £60. Non-toxic formulas that actually perform, from brands committed to clean ingredients."
    >
      {/* Hero */}
      <section className="bg-white border-b border-cream-dark">
        <div className="container py-12 md:py-16">
          <div className="max-w-2xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-grey mb-4">
              <Link href="/" className="hover:text-charcoal">Home</Link>
              <span>/</span>
              <Link href="/beauty" className="hover:text-charcoal">Beauty</Link>
              <span>/</span>
              <span className="text-charcoal">Clean Concealers</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              The Best Clean Concealers That Actually Work
              <span className="block text-sage-dark text-2xl md:text-3xl mt-2">All Under £60</span>
            </h1>

            <p className="text-grey text-lg leading-relaxed mb-6">
              Finding a concealer that's both clean and effective isn't easy. We've
              done the research so you don't have to—these concealers deliver real
              coverage with non-toxic formulas from brands committed to clean beauty.
            </p>

            <div className="bg-cream rounded-lg p-4 mb-4">
              <h2 className="font-semibold text-charcoal mb-2">What we looked for:</h2>
              <ul className="text-sm text-grey space-y-1">
                <li>• Clean ingredient formulations (free from parabens, phthalates, synthetic fragrances)</li>
                <li>• Cruelty-free certification or brand commitment</li>
                <li>• Genuine performance based on real user reviews</li>
                <li>• Available in the UK at £60 or less</li>
              </ul>
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
                Every concealer on this list meets our strict criteria for clean beauty.
                We research each product's ingredient list, verify brand certifications,
                and read real user reviews to ensure these products actually perform.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mt-6 mb-3">Our criteria:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Listed as a concealer by the brand or retailer</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priced at £60 or less in the UK</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Marketed as clean beauty with transparent ingredients</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Brand states it does not test on animals</span>
                </li>
              </ul>

              <p className="text-sm text-grey-light">
                Additional attributes like vegan status or product format are shown where available.
              </p>
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
            if you choose to make a purchase, at no extra cost to you. This helps
            us continue researching and curating quality products.
          </p>
        </div>
      </section>
    </Layout>
  );
}
