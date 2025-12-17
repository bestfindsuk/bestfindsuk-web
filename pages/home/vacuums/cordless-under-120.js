import Link from "next/link";
import { loadVacuums } from "../../../lib/loadVacuums";

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
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>Cordless vacuum cleaners under £120</h1>

      <p>
        This page lists cordless vacuum cleaners available in the UK, priced under £120 at the time of checking.
      </p>

      <p>
        Products are included based on clear criteria only: category, cordless status, and price.
      </p>

      <p>
        <strong>Last checked:</strong> {lastUpdated}
      </p>

      <p>
        See cordless vacuum cleaners under £200{" "}
        <Link href="/home/vacuums/cordless-under-200">here</Link>.
      </p>

      <hr />

      <ul>
        {products.map((product) => {
          const link = product.affiliate_url || product.product_url;

          return (
            <li key={product.id} style={{ marginBottom: "1.5rem" }}>
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  style={{
                    width: "120px",
                    height: "auto",
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                />
              ) : null}

              <h3>{product.name}</h3>

              <p>
                {product.brand} · £{product.price_gbp} · {product.merchant}
              </p>

              <a href={link} target="_blank" rel="noopener noreferrer">
                View product
              </a>
            </li>
          );
        })}
      </ul>

      <hr />

      <h2>How products are selected</h2>
      <ul>
        <li>Listed as a vacuum cleaner by the retailer or brand</li>
        <li>Cordless</li>
        <li>Priced at £120 or less at the time of checking</li>
        <li>Available in the UK</li>
      </ul>

      <p>
        <strong>Affiliate disclosure:</strong> Some links on this page may be affiliate links. This means BestFinds UK may
        earn a small commission if you choose to make a purchase, at no extra cost to you.
      </p>

      <p>
        <strong>Amazon disclosure:</strong> As an Amazon Associate, BestFinds UK earns from qualifying purchases.
      </p>
    </main>
  );
}
