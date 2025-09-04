import fs from "fs";
import path from "path";

export function getGalleryImages(slug: string): string[] {
  const dirPath = path.join(process.cwd(), "public", "images", slug);

  if (!fs.existsSync(dirPath)) return [];

  const files = fs.readdirSync(dirPath);
  const imageFiles = files.filter((file) =>
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  );

  return imageFiles.map((file) => `/images/${slug}/${file}`);
}
