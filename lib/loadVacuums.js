import fs from "fs";
import path from "path";
import Papa from "papaparse";

export function loadVacuums() {
  const filePath = path.join(process.cwd(), "vacuums.csv");
  const file = fs.readFileSync(filePath, "utf8");

  const { data } = Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
  });

  return data
    .filter(item => item.cordless === "yes")
    .map(item => ({
      ...item,
      price_gbp: Number(item.price_gbp),
    }));
}
