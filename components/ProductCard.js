import Link from "next/link";

export default function ProductCard({ product, showCuratorNote = true }) {
  const {
    name,
    brand,
    price_gbp,
    image_url,
    affiliate_url,
    product_url,
    curator_note,
    clean,
    cruelty_free,
    vegan,
  } = product;

  const purchaseLink = affiliate_url || product_url;

  // Generate badges based on product attributes
  const badges = [];
  if (clean === "yes") badges.push("Clean");
  if (cruelty_free === "yes") badges.push("Cruelty-Free");
  if (vegan === "yes") badges.push("Vegan");

  return (
    <article className="card group">
      {/* Product Image */}
      <div className="aspect-square bg-cream-dark overflow-hidden">
        {image_url ? (
          <img
            src={image_url}
            alt={`${brand} ${name}`}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-grey-light">
            <svg
              className="w-16 h-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">
        {/* Brand */}
        <p className="text-xs font-medium text-grey uppercase tracking-wide mb-1">
          {brand}
        </p>

        {/* Product Name */}
        <h3 className="font-semibold text-charcoal leading-snug mb-2 line-clamp-2">
          {name}
        </h3>

        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="text-xs px-2 py-0.5 bg-sage/15 text-sage-dark rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        <p className="text-lg font-semibold text-charcoal mb-3">
          £{Number(price_gbp).toFixed(2)}
        </p>

        {/* Curator Note */}
        {showCuratorNote && curator_note && (
          <p className="text-sm text-grey leading-relaxed mb-4 line-clamp-2">
            {curator_note}
          </p>
        )}

        {/* CTA Button */}
        <a
          href={purchaseLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="btn btn-primary w-full text-center"
        >
          View at Retailer
        </a>
      </div>
    </article>
  );
}

// Compact variant for featured sections
export function ProductCardCompact({ product }) {
  const { name, brand, price_gbp, image_url, affiliate_url, product_url } = product;
  const purchaseLink = affiliate_url || product_url;

  return (
    <article className="flex gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
      {/* Thumbnail */}
      <div className="w-20 h-20 flex-shrink-0 bg-cream-dark rounded-lg overflow-hidden">
        {image_url ? (
          <img
            src={image_url}
            alt={`${brand} ${name}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-grey-light">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-xs text-grey uppercase tracking-wide">{brand}</p>
        <h4 className="font-medium text-charcoal text-sm leading-snug truncate">{name}</h4>
        <p className="font-semibold text-charcoal mt-1">£{Number(price_gbp).toFixed(2)}</p>
      </div>

      {/* Arrow */}
      <a
        href={purchaseLink}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="self-center text-sage-dark hover:text-terracotta transition-colors"
        aria-label={`View ${name}`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </article>
  );
}
