export interface FooterItem {
  label: string;
  href?: string;
}
export interface FooterGroup {
  label: string;
  href?: string;
  action?: boolean;
  items?: FooterItem[];
}
export const footerPages: FooterGroup[] = [
  {
    label: "Businesses",
    items: [
      { label: "Private Credit", href: "#" },
      { label: "Investment Banking", href: "#" },
      { label: "Special Situations", href: "#" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "News & Media", href: "#" },
    ],
  },
  {
    label: "Contact",
    action: true,
    href: "mailto:contact@thedecimalcapital.com",
  },
  { label: "FAQs", action: true, href: "#" },
];
export const footerIndustries: FooterGroup[] = [
  {
    label: "Industries we serve",
    items: [
      "Real Estate",
      "Infrastructure & Transport",
      "Energy, Utilities & Renewables",
      "Industrials, Automotive & Engineering",
      "Chemicals & Materials",
      "Healthcare",
      "Consumer, Retail & Food",
      "Technology, Media & Telecom",
      "Financial Services",
      "Education",
    ].map((label) => ({ label, href: "#" })),
  },
  { label: "Deals", action: true, href: "#" },
];
export const footerPartners: FooterGroup[] = [
  {
    label: "Partner with us",
    href: "#",
    action: true,
    items: [{ label: "Why Partner with Us", href: "#" }],
  },
  {
    label: "Insights",
    href: "#",
    action: true,
    items: [
      { label: "Articles", href: "#" },
      { label: "Reports", href: "#" },
      { label: "Blogs", href: "#" },
    ],
  },
  {
    label: "Legal pages",
    items: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];
export const footerSocials: (FooterItem & { icon: string })[] = [
  { label: "LinkedIn", icon: "linkedin", href: "#" },
  { label: "X", icon: "x", href: "#" },
  { label: "YouTube", icon: "youtube", href: "#" },
];
