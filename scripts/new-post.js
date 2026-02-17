import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const title = process.argv[2];

if (!title) {
  console.error('Please provide a post title.');
  console.error('Usage: npm run new:post "My New Post"');
  process.exit(1);
}

const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
const date = new Date().toISOString().split('T')[0];
const targetDir = path.join(__dirname, '../src/content/blog');
const targetFile = path.join(targetDir, `${slug}.md`);

const template = `---
title: "${title}"
date: ${date}
tags: []
summary: "Summary of the post..."
image: "https://via.placeholder.com/800x400"
draft: true
---

Write your content here...
`;

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

if (fs.existsSync(targetFile)) {
    console.error(`Post already exists: ${targetFile}`);
    process.exit(1);
}

fs.writeFileSync(targetFile, template);
console.log(`Created new post: ${targetFile}`);
console.log('Use "npm run dev" to see changes.');
