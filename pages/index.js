import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { loadProducts } from "../lib/loadProducts";
import { loadVacuums } from "../lib/loadVacuums";
import Link from "next/link";
import Image from "next/image";

export async function getStaticProps() {
  const beautyProducts = loadProducts();
  const homeProducts = loadVacuums();

  const featuredBeauty = beautyProducts.slice(0, 2);
  const featuredHome = homeProducts
    .filter((p) => p.price_gbp > 0 && p.price_gbp <= 150)
    .slice(0, 2);

  return {
    props: {
      featuredProducts: [...featuredBeauty, ...featuredHome],
    },
  };
}

export default function Home({ featuredProducts }) {
  return (
    <Layout>
      {/* Hero Section - Editorial Style with Image */}
      <section className="relative bg-white overflow-hidden">
        {/* Background gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sage/5 to-transparent" />

        <div className="container relative py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-fade-in-up">
              <p className="text-sage-dark font-medium mb-4 tracking-wide uppercase text-sm">
                A curation for the considered
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-charcoal leading-[1.1] mb-8">
                Find things you'll
                <span className="block text-sage-dark italic font-normal">actually love</span>
              </h1>
              <p className="text-xl text-grey leading-relaxed mb-10 max-w-lg">
                We spend the hours researching so you don't have to. Just the good stuff—
                thoughtfully chosen, honestly reviewed.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/beauty" className="btn btn-primary">
                  Start Exploring
                </Link>
                <Link href="/about" className="btn btn-secondary">
                  How We Choose
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block animate-fade-in delay-200">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/accent-1.png"
                  alt="Curated lifestyle essentials"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating accent image */}
              <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-xl overflow-hidden shadow-xl animate-float">
                <Image
                  src="/images/beauty-card.png"
                  alt="Beauty products"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Divider */}
      <div className="flex items-center justify-center py-8 bg-cream">
        <div className="flex items-center gap-4 text-grey-light">
          <div className="w-12 h-px bg-grey-light/40" />
          <span className="text-xs tracking-widest uppercase">Curated with care</span>
          <div className="w-12 h-px bg-grey-light/40" />
        </div>
      </div>

      {/* Categories - Magazine Grid Style with Images */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Beauty */}
            <Link href="/beauty" className="group block animate-fade-in-up">
              <div className="category-card aspect-[4/5] mb-6">
                <Image
                  src="/images/beauty-card.png"
                  alt="Beauty & Skincare"
                  fill
                  className="object-cover"
                />
                <div className="category-card-overlay" />
                <div className="category-card-content">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-medium text-charcoal mb-3">
                    Clean beauty
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    Beauty & Skincare
                  </h3>
                </div>
              </div>
              <p className="text-grey text-sm leading-relaxed group-hover:text-charcoal transition-colors">
                Products that work as good as they feel. Clean formulas from brands who care about what goes on your skin.
              </p>
            </Link>

            {/* Home */}
            <Link href="/home-kitchen" className="group block animate-fade-in-up delay-100">
              <div className="category-card aspect-[4/5] mb-6">
                <Image
                  src="/images/home-card.png"
                  alt="Home & Kitchen"
                  fill
                  className="object-cover"
                />
                <div className="category-card-overlay" />
                <div className="category-card-content">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-medium text-charcoal mb-3">
                    Built to last
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    Home & Kitchen
                  </h3>
                </div>
              </div>
              <p className="text-grey text-sm leading-relaxed group-hover:text-charcoal transition-colors">
                The everyday essentials that quietly make life better. Things you'll reach for again and again.
              </p>
            </Link>

            {/* Lifestyle */}
            <Link href="/lifestyle" className="group block animate-fade-in-up delay-200">
              <div className="category-card aspect-[4/5] mb-6">
                <Image
                  src="/images/lifestyle-card.png"
                  alt="Lifestyle & Work"
                  fill
                  className="object-cover"
                />
                <div className="category-card-overlay" />
                <div className="category-card-content">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-medium text-charcoal mb-3">
                    Coming soon
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    Lifestyle & Work
                  </h3>
                </div>
              </div>
              <p className="text-grey text-sm leading-relaxed group-hover:text-charcoal transition-colors">
                From desk to daily carry. Thoughtful pieces for the spaces where you spend your time.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section - Editorial */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-lg">
              <p className="text-sage-dark font-medium mb-3 tracking-wide uppercase text-sm">
                Fresh picks
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight">
                What we're loving lately
              </h2>
            </div>
            <Link
              href="/beauty"
              className="mt-6 md:mt-0 text-charcoal hover:text-sage-dark font-medium inline-flex items-center transition-colors group"
            >
              See everything
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showCuratorNote={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section - With Accent Image */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-cream to-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Accent Image - Left Side */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/accent-2.png"
                  alt="Thoughtfully curated"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Small floating accent */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-xl overflow-hidden shadow-lg animate-float delay-300">
                <Image
                  src="/images/accent-3.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text Content - Right Side */}
            <div className="text-center lg:text-left">
              <p className="text-sage-dark font-medium mb-4 tracking-wide uppercase text-sm">
                Our approach
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-8">
                Less scrolling, more finding
              </h2>
              <p className="text-grey text-lg leading-relaxed mb-12">
                We know there are a million product lists out there. Ours is different because
                we're not trying to show you everything—just the things worth your attention.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4 text-left">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-white rounded-xl shadow-sm">
                    <svg className="w-6 h-6 text-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Deep dives</h3>
                    <p className="text-sm text-grey leading-relaxed">
                      We read the reviews, check ingredients, and look at what real people say.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-left">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-white rounded-xl shadow-sm">
                    <svg className="w-6 h-6 text-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">No shortcuts</h3>
                    <p className="text-sm text-grey leading-relaxed">
                      We don't feature products just because they pay well. Quality first.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-left">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-white rounded-xl shadow-sm">
                    <svg className="w-6 h-6 text-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Real talk</h3>
                    <p className="text-sm text-grey leading-relaxed">
                      We tell you what's great—and what isn't. No hype, just honest thoughts.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/about" className="btn btn-secondary mt-10 inline-flex">
                More about us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle Footer Note */}
      <section className="py-6 bg-cream-dark/30">
        <div className="container">
          <p className="text-center text-xs text-grey-light">
            Some links are affiliate links—we may earn a small commission at no extra cost to you.{" "}
            <Link href="/disclosure" className="underline hover:text-grey">
              Learn more
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
