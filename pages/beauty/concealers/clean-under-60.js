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
      description="Clean concealers that actually deliver. We've found the formulas that skip the nasties without skipping on coverage."
    >
      {/* Hero */}
      <section className="bg-white">
        <div className="container py-16 md:py-20">
          <div className="max-w-2xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-grey mb-6">
              <Link href="/" className="hover:text-charcoal">Home</Link>
              <span>/</span>
              <Link href="/beauty" className="hover:text-charcoal">Beauty</Link>
              <span>/</span>
              <span className="text-charcoal">Clean Concealers</span>
            </nav>

            <p className="text-sage-dark font-medium mb-3 tracking-wide uppercase text-sm">
              Clean Beauty
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
              Clean concealers that actually work
              <span className="block text-sage-dark text-2xl md:text-3xl mt-3 font-normal italic">All under £60</span>
            </h1>

            <p className="text-grey text-lg leading-relaxed mb-8">
              Finding a concealer that's clean and effective? Not as easy as it sounds.
              We've tried to make it simpler—here are the formulas that skip the
              questionable ingredients without compromising on coverage.
            </p>

            <div className="bg-cream/50 rounded-xl p-5 mb-6">
              <h2 className="font-medium text-charcoal mb-3">What we looked for:</h2>
              <ul className="text-sm text-grey space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-sage mt-2 flex-shrink-0"></span>
                  Clean formulations (no parabens, phthalates, or synthetic fragrances)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-sage mt-2 flex-shrink-0"></span>
                  Brands with a real commitment to cruelty-free
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-sage mt-2 flex-shrink-0"></span>
                  Good reviews from people who've actually used them
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-sage mt-2 flex-shrink-0"></span>
                  Available in the UK for £60 or less
                </li>
              </ul>
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
              <p className="mb-6">
                We dig into ingredient lists, check what the brands actually stand for,
                and read what real people say. Every concealer here met our bar for
                both clean formulation and genuine performance.
              </p>

              <p className="text-sm text-grey-light">
                We show extra details like vegan status when we have them.
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
