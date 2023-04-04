import { readFileSync } from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
export async function getPrivacyData() {
  const fullPath = path.join("docs/privacy", `20230404.md`);
  const fileContents = readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  console.log(contentHtml, matterResult.data);
  return {
    contentHtml,
    ...matterResult.data,
  };
}
