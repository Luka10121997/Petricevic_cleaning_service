import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const dirPath = path.join(process.cwd(), 'public/images/home');
  const files = fs.readdirSync(dirPath);
  const images = files.map((file) => `/images/home/${file}`);
  return NextResponse.json(images);
}
