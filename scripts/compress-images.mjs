/**
 * Batch compress all images using buffer I/O (bypasses sharp's path handling on Windows)
 */

import sharp from "sharp";
import { readdir, stat, readFile, writeFile, unlink } from "fs/promises";
import { join, extname, basename } from "path";

// Use forward slashes to avoid Windows path issues
const IMAGE_DIR = "C:/tmp/img";
const MAX_WIDTH = 1920;
const JPG_QUALITY = 80;

async function getImageFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name).replace(/\\/g, "/");
    if (entry.isDirectory()) {
      files.push(...(await getImageFiles(fullPath)));
    } else {
      const ext = extname(entry.name).toLowerCase();
      if ([".jpg", ".jpeg", ".png"].includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

async function compressImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  const inputBuffer = await readFile(filePath);
  const before = inputBuffer.length;

  try {
    const metadata = await sharp(inputBuffer).metadata();
    let pipeline = sharp(inputBuffer).rotate();

    if (metadata.width && metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: "inside",
      });
    }

    if (ext === ".png") {
      if (metadata.channels === 4) {
        const buffer = await pipeline.png({ quality: 80, compressionLevel: 9 }).toBuffer();
        await writeFile(filePath, buffer);
        const after = buffer.length;
        console.log(`  ${rel(filePath)}: ${fmt(before)} -> ${fmt(after)} (${pct(before, after)})`);
        return { before, after };
      } else {
        const newPath = filePath.replace(/\.png$/i, ".jpg");
        const buffer = await pipeline
          .jpeg({ quality: JPG_QUALITY, progressive: true, mozjpeg: true })
          .toBuffer();
        await writeFile(newPath, buffer);
        if (newPath !== filePath) await unlink(filePath);
        const after = buffer.length;
        console.log(`  ${rel(filePath)} -> .jpg: ${fmt(before)} -> ${fmt(after)} (${pct(before, after)})`);
        return { before, after, converted: true, oldPath: filePath, newPath };
      }
    }

    const buffer = await pipeline
      .jpeg({ quality: JPG_QUALITY, progressive: true, mozjpeg: true })
      .toBuffer();
    await writeFile(filePath, buffer);
    const after = buffer.length;
    console.log(`  ${rel(filePath)}: ${fmt(before)} -> ${fmt(after)} (${pct(before, after)})`);
    return { before, after };
  } catch (err) {
    console.error(`  ERROR ${rel(filePath)}: ${err.message}`);
    return { before, after: before, error: true };
  }
}

function rel(p) { return p.replace(IMAGE_DIR + "/", ""); }
function fmt(b) { return b > 1048576 ? (b / 1048576).toFixed(1) + " MB" : (b / 1024).toFixed(0) + " KB"; }
function pct(a, b) { return (((a - b) / a) * 100).toFixed(1) + "% saved"; }

async function main() {
  console.log(`Compressing images in ${IMAGE_DIR}...\n`);
  const files = await getImageFiles(IMAGE_DIR);
  console.log(`Found ${files.length} images\n`);

  let totalBefore = 0, totalAfter = 0, errors = 0;
  const conversions = [];

  for (const file of files) {
    const result = await compressImage(file);
    totalBefore += result.before;
    totalAfter += result.after;
    if (result.converted) conversions.push(result);
    if (result.error) errors++;
  }

  console.log(`\n${"=".repeat(50)}`);
  console.log(`Total: ${fmt(totalBefore)} -> ${fmt(totalAfter)}`);
  console.log(`Saved: ${fmt(totalBefore - totalAfter)} (${pct(totalBefore, totalAfter)})`);
  if (errors) console.log(`Errors: ${errors}`);
  if (conversions.length) {
    console.log(`\nPNG -> JPG conversions: ${conversions.length}`);
    conversions.forEach(c => console.log(`  ${basename(c.oldPath)} -> ${basename(c.newPath)}`));
  }
}

main().catch(console.error);
