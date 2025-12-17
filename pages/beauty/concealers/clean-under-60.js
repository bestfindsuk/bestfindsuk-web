import { loadProducts } from "../../../lib/loadProducts";

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
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>Clean concealers under £60</h1>

      <p>
        This page lists clean, cruelty-free concealers available in the UK,
        priced under £60 at the time of checking.
      </p>

      <p>
        Products are included based on clear criteria only: category, price, and
        brand or retailer clean beauty positioning.
      </p>

      <p>
        <strong>Last checked:</strong> {lastUpdated}
      </p>

      <hr />

      <p>
        <strong>Affiliate disclosure:</strong> Some links on this page are
        affiliate links. This means BestFinds UK may earn a small commission if
        you choose to make a purchase, at no extra cost to you.
      </p>

      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "1.5rem" }}>
            <h3>{product.name}</h3>
            <p>
              {product.brand} · £{product.price_gbp} · {product.merchant}
            </p>

            <p>
              {product.clean === "yes" && "Clean · "}
              {product.cruelty_free === "yes" && "Cruelty-free · "}
              {product.vegan === "yes" && "Vegan"}
            </p>

            <a
              href={product.affiliate_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View at retailer
            </a>
          </li>
        ))}
      </ul>

      <hr />

      <h2>How products are selected</h2>
      <ul>
        <li>Listed as a concealer by the brand or retailer</li>
        <li>Priced at £60 or less</li>
        <li>Marketed as clean</li>
        <li>Brand states it does not test on animals</li>
      </ul>

      <p>
        Additional attributes such as vegan status or product format are shown
        where available.
      </p>
    </main>
  );
}
