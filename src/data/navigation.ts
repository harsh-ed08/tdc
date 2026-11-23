export interface NavigationLink {
  label: string;
  href?: string;
}
export interface NavigationGroup {
  label: string;
  links: NavigationLink[];
  action?: boolean;
}
export const navigation: { label: string; groups: NavigationGroup[] }[] = [
  {
    label: "Businesses",
    groups: [
      {
        label: "Private Credit",
        links: [
          "Growth, Performing & Corporate Credit",
          "Real Estate & Infrastructure Credit",
          "Acquisition Credit",
          "Promoter Credit",
          "Asset Monetisation & Sale-Leaseback Credit",
          "Structured & Transitional Credit",
        ].map((label) => ({ label, href: "#" })),
      },
      {
        label: "Investment Banking",
        links: [
          "Debt Advisory & Structuring",
          "Mergers & Acquisitions",
          "Secondaries Advisory",
          "Private Equity",
        ].map((label) => ({ label, href: "#" })),
      },
      {
        label: "Special Situations",
        links: [
          "Financing & Refinancing",
          "Restructuring & Turnaround",
          "Distressed Investments & Strategic Transactions",
        ].map((label) => ({ label, href: "#" })),
      },
    ],
  },
  {
    label: "Company",
    groups: [
      {
        label: "Who we are",
        action: true,
        links: ["How we partner", "Leadership"].map((label) => ({
          label,
          href: "#",
        })),
      },
      { label: "News and Media", action: true, links: [] },
    ],
  },
  {
    label: "Careers",
    groups: [
      {
        label: "Careers",
        action: true,
        links: [
          "Who do we seek",
          "Full time jobs- Open positions",
          "Management trainee (JD + AF)",
          "Fellowship program (Form)",
        ].map((label) => ({ label, href: "#" })),
      },
    ],
  },
];
export const contactHref = "mailto:contact@thedecimalcapital.com";
