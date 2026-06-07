import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const UPLOAD_DIR = 'static/images/projets';

export async function saveUpload(file: File | null, slug: string, prefix: string): Promise<string | null> {
	if (!file || file.size === 0) return null;
	const ext = path.extname(file.name) || '.jpg';
	const dir = path.join(UPLOAD_DIR, slug);
	await mkdir(dir, { recursive: true });
	const filename = `${prefix}-${Date.now()}${ext}`;
	const buffer = Buffer.from(await file.arrayBuffer());
	await writeFile(path.join(dir, filename), buffer);
	return `/images/projets/${slug}/${filename}`;
}
