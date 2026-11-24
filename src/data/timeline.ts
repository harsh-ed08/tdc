export interface TimelineMilestone {
  year: string;
  description: string;
  image?: string;
  imageAlt?: string;
  wordmark?: string;
  draft?: boolean;
}

// The first milestone is transcribed from the supplied reference.
// Remaining entries are explicitly marked demo placeholders until copy is supplied.
export const timelineMilestones: TimelineMilestone[] = [
  {
    year: "2016–18",
    description: "Established FinLender, building our foundation in financial services.",
    wordmark: "FinLender",
  },
  {
    year: "2019–21",
    description: "The next chapter in our journey.",
    wordmark: "Our journey",
    draft: true,
  },
  {
    year: "2022–25",
    description: "Building towards the future.",
    wordmark: "Looking ahead",
    draft: true,
  },
  {
    year: "2026",
    description: "Exploring new opportunities for our next chapter.",
    wordmark: "New possibilities",
    draft: true,
  },
  {
    year: "2027+",
    description: "Shaping a long-term vision for the years ahead.",
    wordmark: "The road ahead",
    draft: true,
  },
];
