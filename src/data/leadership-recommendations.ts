/** Curated verbatim excerpts selected for publication by the site owner.
 * Author permission to reuse outside LinkedIn has not been recorded here.
 * Full export and permission records must remain outside this public repository.
 * Company and role fields are deliberately omitted: export fields are not proof
 * of employment at the time of writing or a company endorsement.
 */
export const recommendationsSourceUrl =
  "https://www.linkedin.com/in/carlos-alexandre-pires-de-carvalho-junior-04110033/";

/** Set false to hide the entire section without deleting its content. */
export const showEngineeringCulture = true;

export interface LeadershipRecommendation {
  id: string;
  visible: boolean;
  theme: string;
  author: string;
  date: string;
  excerpt: string;
}

export const leadershipRecommendations: readonly LeadershipRecommendation[] = [
  {
    "visible": true,
    "id": "recommendation-1",
    "theme": "Standards that support AI-assisted engineering",
    "author": "Edy Silva",
    "date": "2026-10-08",
    "excerpt": "Every rule in the manifesto had something in the code that enforced it. When an agent made a wrong change, the repo told it so, before any human had to. That's why agents could move fast there without breaking things."
  },
  {
    "visible": true,
    "id": "recommendation-2",
    "theme": "Technical depth with clear ownership",
    "author": "Fernando Neto",
    "date": "2026-10-01",
    "excerpt": "He is someone who takes ownership, communicates clearly with both technical and non-technical stakeholders, and consistently works toward finding practical and effective solutions."
  },
  {
    "visible": true,
    "id": "recommendation-3",
    "theme": "Responsibility beyond delivery",
    "author": "Leonardo Cardoso de Almeida",
    "date": "2026-01-09",
    "excerpt": "He has a strong sense of accountability and truly cares about the long-term success of what he builds."
  },
  {
    "visible": true,
    "id": "recommendation-5",
    "theme": "Breadth, depth, and trusted collaboration",
    "author": "Brandon Krull",
    "date": "2024-03-04",
    "excerpt": "Carlos is an outstanding engineer with significant breadth and depth of experience and is someone I would choose to work with wherever I go at any time in the future."
  },
  {
    "visible": true,
    "id": "recommendation-8",
    "theme": "Helping the whole team grow",
    "author": "Levi Da Silva Lima",
    "date": "2022-05-29",
    "excerpt": "And the significant point is that Carlos is constantly working to improve his knowledge and abilities, but he also works to raise people around him so everyone can grow together."
  },
  {
    "visible": true,
    "id": "recommendation-11",
    "theme": "Engineering that outlasts an engagement",
    "author": "João Caetano",
    "date": "2022-05-26",
    "excerpt": "Even since he left VTEX, we kept using the RFC's he wrote and considered the code he implemented as a role model to follow."
  }
];
