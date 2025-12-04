import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/docs");

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

export function getDocuments() {
  const allFiles = getAllFiles(postsDirectory);

  const allDocuments = allFiles.map((fullPath) => {
    const relativePath = path.relative(postsDirectory, fullPath);
    const id = relativePath.replace(/\.md$/, "").replace(/\\/g, "/");
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    let parent = matterResult.data.parent;
    if (!parent) {
      const parts = id.split("/");
      if (parts.length > 1) {
        parent = parts[parts.length - 2];
      }
    }

    return {
      id,
      ...matterResult.data,
      parent,
    };
  });

  return allDocuments.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
    return 0;
  });
}

export async function getDocumentContent(id) {
  let fullPath = path.join(postsDirectory, `${id}.md`);

  // Fallback: if not found, try flat structure (for backward compatibility or mixed mode)
  if (!fs.existsSync(fullPath)) {
    const flatName = id.split("/").pop();
    const flatPath = path.join(postsDirectory, `${flatName}.md`);
    if (fs.existsSync(flatPath)) {
      fullPath = flatPath;
    } else {
      throw new Error(`Document with id ${id} does not exist`);
    }
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(remarkGfm) // ← ENABLE TABLES + EXTRA MARKDOWN FEATURES
    .use(html)
    .process(matterResult.content);

  return {
    id,
    contentHtml: processedContent.toString(),
    ...matterResult.data,
  };
}
