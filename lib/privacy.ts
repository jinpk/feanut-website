import { readFileSync, readdirSync } from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import { Policy } from "@/interfaces/policy";

export async function getPrivacyData(): Promise<Policy[]> {
  const filenames = readdirSync("docs/privacy", "utf8");

  const data: Policy[] = [];
  for await (let filename of filenames) {
    const fileContents = readFileSync(
      path.join("docs/privacy", filename),
      "utf-8"
    );
    const matterResult = matter(fileContents);
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    data.push({
      date: matterResult.data.date.getTime(),
      contentHtml,
    });
  }

  return data.sort((a, b) => b.date - a.date);
}
