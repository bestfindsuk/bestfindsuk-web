import Layout from "../../components/Layout";
import ProductCard from "../../components/ProductCard";
import { loadProducts } from "../../lib/loadProducts";
import Link from "next/link";
import Image from "next/image";

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
      description="Clean beauty that actually works. Products from brands who care about what goes on your skin—without compromising on performance."
    >
      {/* Hero with Image */}
      <section className="bg-white overflow-hidden">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-fade-in-up">
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
                Beauty & Skincare
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
                Clean formulas that deliver
              </h1>
              <p className="text-grey text-lg leading-relaxed">
                We look for beauty products that skip the nasties without skipping on
                results. Brands that care about ingredients, formulations that actually
                work, and things people genuinely rave about.
              </p>
              <p className="text-xs text-grey-light mt-6">
                Updated {lastUpdated}
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block animate-fade-in delay-200">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/beauty-header.png"
                  alt="Clean beauty products"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories */}
      <section className="py-6 bg-cream border-y border-cream-dark">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-grey mr-2">Browse:</span>
            <Link
              href="/beauty/concealers/clean-under-60"
              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-charcoal hover:bg-sage hover:text-white transition-colors shadow-sm"
            >
              Clean Concealers
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
