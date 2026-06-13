import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const writeupsDirectory = path.join(process.cwd(), 'writeups');

export function getSortedWriteupsData() {
  if (!fs.existsSync(writeupsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(writeupsDirectory);
  const allWriteupsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(writeupsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        ...matterResult.data,
      };
    });

  return allWriteupsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getWriteupData(slug) {
  const fullPath = path.join(writeupsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    slug,
    content: matterResult.content,
    ...matterResult.data,
  };
}
