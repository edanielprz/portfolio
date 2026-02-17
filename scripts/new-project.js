import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const title = process.argv[2];

if (!title) {
  console.error('Please provide a project title.');
  console.error('Usage: npm run new:project "My New Awesome Project"');
  process.exit(1);
}

const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
const targetDir = path.join(__dirname, '../src/content/projects');
const targetFile = path.join(targetDir, `${slug}.md`);

const template = `---
title: "${title}"
description: "Brief description of the project."
tags: []
link: ""
repo: ""
image: "https://via.placeholder.com/600x400"
featured: false
sortOrder: 10
---

Detailed description of the project...
`;

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

if (fs.existsSync(targetFile)) {
    console.error(`Project already exists: ${targetFile}`);
    process.exit(1);
}

fs.writeFileSync(targetFile, template);
console.log(`Created new project: ${targetFile}`);
