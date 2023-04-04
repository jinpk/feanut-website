import { readFileSync, readdirSync } from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import { Faq } from "@/interfaces/docs";

export async function getFaqs(): Promise<Faq[]> {
  const fullPath = path.join("docs/faqs");
  const paths = readdirSync(fullPath);

  const faqs: Faq[] = [];

  for await (let filename of paths) {
    const matterResult = matter(readFileSync(path.join("docs/faqs", filename)));
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    faqs.push({
      sequence: matterResult.data.sequence as number,
      title: matterResult.data.title as string,
      contentHtml,
    });
  }

  return faqs.sort((a, b) => a.sequence - b.sequence);
}
