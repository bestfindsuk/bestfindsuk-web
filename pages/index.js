import Layout from "../components/Layout";
import CategoryCard, {
  BeautyIcon,
  HomeIcon,
  LifestyleIcon,
} from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import { loadProducts } from "../lib/loadProducts";
import { loadVacuums } from "../lib/loadVacuums";
import Link from "next/link";

export async function getStaticProps() {
  const beautyProducts = loadProducts();
  const homeProducts = loadVacuums();

  // Get featured products from each category
  const featuredBeauty = beautyProducts.slice(0, 2);
  const featuredHome = homeProducts
    .filter((p) => p.price_gbp > 0 && p.price_gbp <= 150)
    .slice(0, 2);

  return {
    props: {
      featuredProducts: [...featuredBeauty, ...featuredHome],
      stats: {
        totalProducts: beautyProducts.length + homeProducts.length,
        categories: 3,
      },
    },
  };
}

export default function Home({ featuredProducts, stats }) {
  const categories = [
    {
      title: "Beauty & Clean Cosmetics",
      description:
        "Curated clean beauty products from brands that prioritize non-toxic ingredients without sacrificing performance.",
      href: "/beauty",
      icon: <BeautyIcon />,
    },
    {
      title: "Home & Kitchen",
      description:
        "Quality home essentials built to last - from cordless vacuums to kitchen tools that make everyday life easier.",
      href: "/home-kitchen",
      icon: <HomeIcon />,
    },
    {
      title: "Lifestyle & Workspace",
      description:
        "Thoughtfully designed products for work and life - notebooks, desk accessories, and everyday carry essentials.",
      href: "/lifestyle",
      icon: <LifestyleIcon />,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
              Thoughtfully Curated Products for{" "}
              <span className="text-sage-dark">Intentional Living</span>
            </h1>
            <p className="text-lg md:text-xl text-grey leading-relaxed mb-8">
              We research and test premium products in the £30–£200 range so you
              don't have to. Every item is selected for quality, longevity, and
              real-world value.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/beauty" className="btn btn-primary">
                Browse Categories
              </Link>
              <Link href="/about" className="btn btn-secondary">
                Our Curation Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="border-y border-cream-dark bg-cream">
        <div className="container py-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-8 text-center">
            <div>
              <p className="text-2xl font-semibold text-charcoal">
                {stats.totalProducts}+
              </p>
              <p className="text-sm text-grey">Products Curated</p>
            </div>
            <div className="hidden md:block w-px h-8 bg-grey-light/30" />
            <div>
              <p className="text-2xl font-semibold text-charcoal">£30–£200</p>
              <p className="text-sm text-grey">Price Range</p>
            </div>
            <div className="hidden md:block w-px h-8 bg-grey-light/30" />
            <div>
              <p className="text-2xl font-semibold text-charcoal">
                {stats.categories}
              </p>
              <p className="text-sm text-grey">Categories</p>
            </div>
            <div className="hidden md:block w-px h-8 bg-grey-light/30" />
            <div>
              <p className="text-2xl font-semibold text-charcoal">100%</p>
              <p className="text-sm text-grey">Honest Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Browse by Category
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              Each category is carefully curated with products we'd genuinely
              recommend to friends and family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.href} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Latest Finds
              </h2>
              <p className="text-grey max-w-xl">
                Our most recent additions, researched and selected for quality
                and value.
              </p>
            </div>
            <Link
              href="/beauty"
              className="mt-4 md:mt-0 text-sage-dark hover:text-terracotta font-medium inline-flex items-center transition-colors"
            >
              View all products
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Our Process Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-charcoal mb-6">
              How We Curate
            </h2>
            <p className="text-grey text-lg leading-relaxed mb-8">
              We're not just another affiliate site. Every product goes through
              our research process: we check materials, read real reviews, verify
              brand ethics, and only include items we'd buy ourselves.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-sage/10 text-sage-dark rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Research</h3>
                <p className="text-sm text-grey">
                  We dig into materials, manufacturing, and real user experiences.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-sage/10 text-sage-dark rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Verify</h3>
                <p className="text-sm text-grey">
                  We check brand ethics, certifications, and value for money.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-sage/10 text-sage-dark rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Recommend</h3>
                <p className="text-sm text-grey">
                  We only feature products we'd genuinely recommend to friends.
                </p>
              </div>
            </div>

            <Link href="/about" className="btn btn-secondary mt-10">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-8 bg-cream-dark/50">
        <div className="container">
          <p className="text-center text-sm text-grey">
            <strong>Transparency note:</strong> Some links on this site are
            affiliate links. We may earn a small commission if you make a
            purchase, at no extra cost to you. This helps us keep curating
            quality finds.{" "}
            <Link href="/disclosure" className="underline hover:text-charcoal">
              Learn more
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
