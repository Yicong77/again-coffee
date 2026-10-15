import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const originalsDir = path.join(projectRoot, "assets", "originals");
const outputDir = path.join(projectRoot, "public", "images");

const jobs = [
  { file: "again-coffee-hero.png", base: "again-coffee-hero", widths: [480, 720, 1082], quality: 82 },
  { file: "again-rabbit-latte-v2.png", base: "again-rabbit-latte", widths: [480, 720, 1086], quality: 82 },
  { file: "again-cinnamon-cloud.png", base: "again-cinnamon-cloud", widths: [480, 720, 1086], quality: 82 },
  { file: "again-cake-table.png", base: "again-cake-table", widths: [480, 720, 1089], quality: 82 },
  { file: "again-jaffle-prep-v2.png", base: "again-jaffle-prep", widths: [480, 720, 1086], quality: 82 },
  { file: "again-storefront.png", base: "again-storefront", widths: [480, 720, 1086], quality: 82 },
  { file: "again-interior-display.png", base: "again-interior-display", widths: [480, 720, 1086], quality: 82 },
  { file: "barista-craft.jpg", base: "barista-craft", widths: [540, 900, 1400], quality: 80 },
  { file: "coffee-pour.jpg", base: "coffee-pour", widths: [640, 1000, 1600], quality: 80 },
];

await mkdir(outputDir, { recursive: true });

for (const job of jobs) {
  for (const width of job.widths) {
    const output = path.join(outputDir, `${job.base}-${width}.webp`);
    await sharp(path.join(originalsDir, job.file))
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: job.quality, effort: 6, smartSubsample: true })
      .toFile(output);
  }
}

await sharp(path.join(originalsDir, "again-coffee-hero.png"))
  .extract({ left: 0, top: 410, width: 1082, height: 568 })
  .resize(1200, 630)
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.join(outputDir, "again-coffee-og.jpg"));

console.log(`Generated ${jobs.reduce((count, job) => count + job.widths.length, 0) + 1} optimized images in ${outputDir}`);
