import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { getAllNews, formatNewsDate } from "@/lib/news";

const NewsIndex = () => {
  const posts = getAllNews();
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://wisefuloak.com";

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="News & Insights — Wiseful Oak Systems"
        description="Field notes, architecture decisions, and lessons from inside Wiseful Oak's embedded engagements with U.S. and international clients."
        canonical={`${siteUrl}/news`}
        type="website"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Wiseful Oak Newsroom",
          url: `${siteUrl}/news`,
          publisher: { "@type": "Organization", name: "Wiseful Oak Systems" },
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            datePublished: p.date,
            url: `${siteUrl}/news/${p.slug}`,
          })),
        }}
      />
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 border-b border-border pb-10"
        >
          <p className="font-body text-xs uppercase tracking-[0.2em] text-accent mb-3">Newsroom</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
            News &amp; Insights
          </h1>
          <p className="font-body text-lg text-muted-foreground mt-4 max-w-2xl">
            Field notes from inside our embedded engagements — what's breaking, what's working, and what we're learning.
          </p>
        </motion.header>

        {posts.length === 0 ? (
          <p className="font-body text-muted-foreground">No posts yet. Check back soon.</p>
        ) : (
          <ul className="space-y-10">
            {posts.map((post, i) => (
              <motion.li
                key={post.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to={`/news/${post.slug}`}
                  className="group grid md:grid-cols-[280px_1fr] gap-6 items-start rounded-lg p-4 -mx-4 hover:bg-card transition-colors"
                >
                  {post.coverImage ? (
                    <div className="aspect-[16/10] overflow-hidden rounded-md bg-muted shadow-card">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/10] rounded-md bg-gradient-to-br from-primary/10 to-accent/10" />
                  )}

                  <article>
                    <div className="flex items-center gap-3 font-body text-xs text-muted-foreground mb-2">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <time dateTime={post.date}>{formatNewsDate(post.date)}</time>
                      </span>
                      {post.tags && post.tags.length > 0 && (
                        <span className="text-accent uppercase tracking-widest">{post.tags[0]}</span>
                      )}
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="font-body text-muted-foreground mt-3 leading-relaxed">{post.excerpt}</p>
                    )}
                    <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary mt-4">
                      Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </article>
                </Link>
              </motion.li>
            ))}
          </ul>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default NewsIndex;
