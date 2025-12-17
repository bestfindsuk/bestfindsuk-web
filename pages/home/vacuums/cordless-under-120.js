import { loadVacuums } from "../../../lib/loadVacuums";
import Link from "next/link";

export async function getStaticProps() {
  const vacuums = loadVacuums();

  const filtered = vacuums.filter(
    item => item.price_gbp > 0 && item.price_gbp <= 120
  );

  return {
    props: {
      vacuums: filtered,
    },
  };
}

export default function CordlessUnder120({ vacuums }) {
  return (
    <main style={{ padding: "24px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Cordless vacuum cleaners under £120</h1>

      <p>
        Looking for more options?{" "}
        <Link href="/home/vacuums/cordless-under-200">
          See cordless vacuums under £200
        </Link>
      </p>

      <ul>
        {vacuums.map(item => (
          <li key={item.id} style={{ marginBottom: "24px" }}>
            <h3>{item.name}</h3>
            <p>{item.brand}</p>
            <p>£{item.price_gbp}</p>

            <a href={item.product_url} target="_blank" rel="noreferrer">
              View product
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
