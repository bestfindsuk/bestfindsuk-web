import fs from "fs";
import path from "path";
import Papa from "papaparse";

export function loadProducts() {
  const filePath = path.join(process.cwd(), "products.csv");
  const csvText = fs.readFileSync(filePath, "utf8");

  const parsed = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  const rows = Array.isArray(parsed.data) ? parsed.data : [];

  // Normalise values so filters behave predictably
  return rows.map((p) => {
    const normalised = {};
    for (const key of Object.keys(p)) {
      const raw = p[key];
      normalised[key.trim()] =
        typeof raw === "string" ? raw.trim() : raw ?? "";
    }

    // Helpful normalisations
    if (normalised.price_gbp) {
      normalised.price_gbp = String(normalised.price_gbp).replace("£", "").trim();
    }
    if (normalised.category) {
      normalised.category = normalised.category.toLowerCase();
    }
    for (const flag of ["clean", "cruelty_free", "vegan", "liquid", "cream"]) {
      if (normalised[flag]) {
        normalised[flag] = normalised[flag].toLowerCase();
      }
    }

    return normalised;
  });
}
