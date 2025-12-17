import fs from "fs";
import path from "path";

export function loadProducts() {
  const filePath = path.join(process.cwd(), "products.csv");
  const file = fs.readFileSync(filePath, "utf8");

  const lines = file.split("\n").filter(Boolean);
  const headers = lines[0].split(",");

  return lines.slice(1).map((line) => {
    const values = line.split(",");
    const product = {};
    headers.forEach((header, index) => {
      product[header.trim()] = values[index]?.trim();
    });
    return product;
  });
}
