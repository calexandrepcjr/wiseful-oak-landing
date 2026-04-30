import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { getNewsBySlug, formatNewsDate } from "@/lib/news";

const NewsArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getNewsBySlug(slug) : undefined;

  if (!post) return <NotFound />;

  const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://wisefuloak.com";
  const canonical = `${siteUrl}/news/${post.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`${post.title} — Wiseful Oak Systems`}
        description={post.excerpt}
        canonical={canonical}
        image={post.coverImage}
        type="article"
        publishedTime={post.date}
        author={post.author}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: post.title,
          datePublished: post.date,
          dateModified: post.date,
          author: { "@type": "Organization", name: post.author ?? "Wiseful Oak Systems" },
          publisher: {
            "@type": "Organization",
            name: "Wiseful Oak Systems",
            logo: { "@type": "ImageObject", url: `${siteUrl}/favicon.png` },
          },
          image: post.coverImage ? [post.coverImage] : undefined,
          mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
          description: post.excerpt,
        }}
      />
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/news"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All news
          </Link>

          <article>
            <header className="mb-10">
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="font-body text-[11px] uppercase tracking-widest text-accent border border-accent/30 rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-tight">
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="font-body text-lg text-muted-foreground mt-5 leading-relaxed">{post.excerpt}</p>
              )}
              <div className="flex flex-wrap items-center gap-5 font-body text-sm text-muted-foreground mt-6 pt-6 border-t border-border">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>{formatNewsDate(post.date)}</time>
                </span>
                {post.author && (
                  <span className="inline-flex items-center gap-2">
                    <User className="w-4 h-4" /> {post.author}
                  </span>
                )}
              </div>
            </header>

            {post.coverImage && (
              <figure className="mb-12 -mx-6 md:mx-0">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full aspect-[16/9] object-cover md:rounded-lg shadow-elevated"
                />
              </figure>
            )}

            <div
              className="prose prose-lg max-w-none font-body
                prose-headings:font-display prose-headings:text-foreground prose-headings:tracking-tight
                prose-p:text-foreground/90 prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-blockquote:border-l-accent prose-blockquote:text-muted-foreground prose-blockquote:italic
                prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                prose-li:text-foreground/90"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </article>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsArticle;
