import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CultureSection from "@/components/CultureSection";
import { leadershipRecommendations, recommendationsSourceUrl } from "@/data/leadership-recommendations";

describe("Wiseful Oak engineering culture", () => {
  it("connects company standards to its founder without presenting customer endorsements", () => {
    render(<CultureSection />);
    const section = screen.getByRole("region", { name: "The standards behind Wiseful Oak" });
    expect(within(section).getByText(/He represents the company and sets the standards/)).toBeInTheDocument();
    expect(within(section).getByText(/do not imply that the authors or their employers engaged or endorsed/)).toBeInTheDocument();
    expect(within(section).queryByRole("img")).not.toBeInTheDocument();
  });

  it("renders every curated excerpt with its author and original recommendation context", () => {
    const { container } = render(<CultureSection />);
    expect(container.querySelectorAll("blockquote")).toHaveLength(leadershipRecommendations.length);
    for (const recommendation of leadershipRecommendations) {
      const caption = screen.getByText(recommendation.author).closest("figure");
      expect(caption).not.toBeNull();
      expect(within(caption!).getByText(`“${recommendation.excerpt}”`)).toBeInTheDocument();
      expect(within(caption!).getByText("Recommendation about Carlos Alexandre · LinkedIn")).toBeInTheDocument();
    }
  });

  it("links to the verified original profile without embedding LinkedIn or third-party assets", () => {
    const { container } = render(<CultureSection />);
    const source = screen.getByRole("link", { name: /Visit Carlos's LinkedIn profile/ });
    expect(source).toHaveAttribute("href", recommendationsSourceUrl);
    expect(source).toHaveAttribute("rel", "noopener noreferrer");
    expect(container.querySelector("iframe, img, script")).toBeNull();
  });

  it("hides the entire section without rendering its content", () => {
    const { container } = render(<CultureSection visible={false} />);
    expect(container).toBeEmptyDOMElement();
    expect(screen.queryByRole("region")).not.toBeInTheDocument();
  });

  it("hides an individual recommendation while preserving the source data", () => {
    const recommendations = leadershipRecommendations.map((item, index) => ({
      ...item,
      visible: index !== 0,
    }));
    const { container } = render(<CultureSection recommendations={recommendations} />);
    expect(screen.queryByText(recommendations[0].author)).not.toBeInTheDocument();
    expect(container.textContent).not.toContain(recommendations[0].excerpt);
    expect(container.querySelectorAll("blockquote")).toHaveLength(recommendations.length - 1);
    expect(recommendations[0].excerpt).toBe(leadershipRecommendations[0].excerpt);
  });

  it("omits an empty section if every recommendation is hidden", () => {
    const recommendations = leadershipRecommendations.map((item) => ({ ...item, visible: false }));
    const { container } = render(<CultureSection recommendations={recommendations} />);
    expect(container).toBeEmptyDOMElement();
  });

});
