import { marked } from "marked";

export interface NewsFrontmatter {
  title: string;
  date: string;
  excerpt?: string;
  author?: string;
  coverImage?: string;
  tags?: string[];
}

export interface NewsPost extends NewsFrontmatter {
  slug: string;
  html: string;
  raw: string;
}

// Eagerly import every markdown file in /src/news as raw text at build time.
// Vite turns this into static asset references, so it's SEO-friendly and ships zero runtime fetch.
const modules = import.meta.glob("/src/news/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

/** Minimal frontmatter parser supporting strings, ISO dates, and simple [a, b, c] arrays. */
function parseFrontmatter(raw: string): { data: NewsFrontmatter; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return { data: { title: "Untitled", date: new Date().toISOString().slice(0, 10) }, content: raw };
  }
  const [, fmBlock, content] = match;
  const data: Record<string, unknown> = {};
  for (const line of fmBlock.split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
    if (!m) continue;
    const [, key, rawVal] = m;
    let value: unknown = rawVal.trim();
    if (typeof value === "string") {
      // strip wrapping quotes
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      // simple inline array: [a, b, "c"]
      if (typeof value === "string" && value.startsWith("[") && value.endsWith("]")) {
        value = (value as string)
          .slice(1, -1)
          .split(",")
          .map((s) => s.trim().replace(/^["']|["']$/g, ""))
          .filter(Boolean);
      }
    }
    data[key] = value;
  }
  return {
    data: {
      title: (data.title as string) || "Untitled",
      date: (data.date as string) || new Date().toISOString().slice(0, 10),
      excerpt: data.excerpt as string | undefined,
      author: data.author as string | undefined,
      coverImage: data.coverImage as string | undefined,
      tags: (data.tags as string[] | undefined) ?? [],
    },
    content,
  };
}

marked.setOptions({ gfm: true, breaks: false });

function fileSlug(path: string): string {
  return path.split("/").pop()!.replace(/\.md$/i, "");
}

const posts: NewsPost[] = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    return {
      ...data,
      slug: fileSlug(path),
      raw: content,
      html: marked.parse(content) as string,
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export function getAllNews(): NewsPost[] {
  return posts;
}

export function getNewsBySlug(slug: string): NewsPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatNewsDate(iso: string): string {
  // Parse YYYY-MM-DD as a local date so the displayed day doesn't shift across timezones.
  const ymd = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  const d = ymd ? new Date(Number(ymd[1]), Number(ymd[2]) - 1, Number(ymd[3])) : new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
