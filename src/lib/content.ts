import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  excerpt?: string;
}

export interface Post extends PostMeta {
  content: string;
}

function getContentDir(type: "blog" | "learn") {
  return path.join(process.cwd(), "content", type);
}

export function getAllPosts(type: "blog" | "learn"): PostMeta[] {
  const contentDir = getContentDir(type);
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data, content } = matter(raw);
    const rt = readingTime(content);

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      category: data.category || "",
      readTime: data.readTime || rt.text,
      author: data.author || "Dan Chase, RD",
      excerpt: data.excerpt || content.slice(0, 200).replace(/[#*_]/g, "").trim() + "...",
    } as PostMeta;
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(type: "blog" | "learn", slug: string): Post | null {
  const contentDir = getContentDir(type);
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const rt = readingTime(content);

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    category: data.category || "",
    readTime: data.readTime || rt.text,
    author: data.author || "Dan Chase, RD",
    content,
  };
}

export function getAllSlugs(type: "blog" | "learn"): string[] {
  const contentDir = getContentDir(type);
  if (!fs.existsSync(contentDir)) return [];
  return fs.readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export const BLOG_CATEGORIES = [
  "All Posts",
  "Mindset",
  "Evening Patterns",
  "Stress and Emotions",
  "Self-Awareness",
  "Tools",
  "The Science",
  "Practical Tips",
  "GLP-1 Medications",
];

export const SITE_URL = "https://evenings.chase-wellness.com";
