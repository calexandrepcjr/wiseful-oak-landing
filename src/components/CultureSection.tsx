import {
  leadershipRecommendations,
  recommendationsSourceUrl,
  showEngineeringCulture,
  type LeadershipRecommendation,
} from "@/data/leadership-recommendations";

interface CultureSectionProps {
  visible?: boolean;
  recommendations?: readonly LeadershipRecommendation[];
}

const CultureSection = ({
  visible = showEngineeringCulture,
  recommendations = leadershipRecommendations,
}: CultureSectionProps = {}) => {
  const visibleRecommendations = recommendations.filter((item) => item.visible);
  if (!visible || visibleRecommendations.length === 0) return null;

  return (
    <section id="culture" aria-labelledby="culture-heading" className="scroll-mt-28 py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="font-body text-sm uppercase tracking-[0.25em] text-accent mb-3">
            Our engineering culture
          </p>
          <h2 id="culture-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            The standards behind Wiseful Oak
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
            Wiseful Oak's engineering culture is led by our founder, Carlos Alexandre.
            He represents the company and sets the standards for how we work:
            clear ownership, rigorous technical decisions, and teams that grow stronger
            through the work we do together.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            The recommendations below describe colleagues' experiences working with
            Carlos across his career. They offer a view of the leadership and
            engineering practices he brings to Wiseful Oak.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {visibleRecommendations.map((recommendation) => (
            <figure key={recommendation.id} className="p-6 md:p-8 rounded-xl border border-border bg-card shadow-card flex flex-col">
              <h3 className="font-body text-sm font-semibold text-accent mb-4">
                {recommendation.theme}
              </h3>
              <blockquote className="font-body text-foreground leading-relaxed flex-1">
                <p>“{recommendation.excerpt}”</p>
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-border font-body text-sm">
                <span className="block font-semibold text-foreground">{recommendation.author}</span>
                <span className="block text-muted-foreground mt-1">Recommendation about Carlos Alexandre · LinkedIn</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 max-w-3xl font-body text-sm text-muted-foreground leading-relaxed">
          <p>
            Verbatim excerpts from personal LinkedIn recommendations. These accounts
            concern Carlos's work in their original professional contexts; they do
            not imply that the authors or their employers engaged or endorsed
            Wiseful Oak Systems.
          </p>
          <a href={recommendationsSourceUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-accent underline underline-offset-4 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
            Visit Carlos's LinkedIn profile <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
