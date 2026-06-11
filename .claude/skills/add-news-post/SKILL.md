---
name: add-news-post
description: Add or edit a news article on the Wiseful Oak website. Use whenever the user wants to publish, add, or update a "news" post/article — e.g. turning a LinkedIn post, announcement, or field note into a newsroom entry. Triggers on mentions of "news", "newsroom", "blog post", or "article" in this codebase.
---

# Adding a news post

News on this site is file-based. Each article is a single markdown file in `src/news/`.
The loader in `src/lib/news.ts` auto-discovers every `*.md` in that folder at build time
(`import.meta.glob`), parses frontmatter, renders the body with `marked`, and sorts posts
by `date` descending. **No code or registry changes are needed** — just add a file.

## Steps

1. **Pick a slug.** The filename (without `.md`) becomes the URL slug and is the article's
   identity. Use kebab-case, e.g. `instrument-first-session-replay-isnt-analytics.md`.
2. **Write the file** to `src/news/<slug>.md` using the template below.
3. **Commit and push** to the active feature branch. Open a PR only if the user asks.

## Frontmatter template

```markdown
---
title: "Headline shown on the article and list"
date: "YYYY-MM-DD"
excerpt: "One-sentence summary shown in the news index cards."
author: "Wiseful Oak Systems"
coverImage: "https://images.unsplash.com/photo-...?w=1600&q=80"
tags: ["tag-one", "tag-two"]
---

# Headline

Body in GitHub-flavored markdown. Use `##` section headings to break up long posts.
```

## Field rules (from `src/lib/news.ts`)

- `title` and `date` are the only required fields; everything else is optional.
- `date` must be `YYYY-MM-DD` (parsed as a local date so the displayed day doesn't shift
  across timezones). It also drives sort order — newest first.
- `excerpt` renders on the index cards (`src/pages/NewsIndex.tsx`); keep it to one sentence.
- `tags` is an inline array `[a, b]`; only `tags[0]` is displayed on the index card.
- `coverImage` is optional. If omitted, the card/article renders without an image. Prefer a
  topic-relevant Unsplash URL with `?w=1600&q=80`.
- The parser is minimal: only simple `key: value` strings, quoted strings, and inline
  `[...]` arrays are supported. No nested YAML, no multi-line values.

## Tips

- Keep the author's voice intact when adapting an external post (e.g. a LinkedIn update);
  add `##` headings for readability rather than rewriting the prose.
- Existing posts in `src/news/` are the best style reference — read one before writing.
- Match the cover image to the post's actual subject.
