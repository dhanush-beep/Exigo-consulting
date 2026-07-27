export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
  };
  category: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "should-you-sell-your-company-ma-exit-signs",
    title: "Should You Sell Your Company? Signs It's Time for an M&A Exit",
    excerpt: "Should You Sell Your Company? Signs It's Time for an M&A Exit. Every founder reaches a point where the business runs them instead of the other way around. If you're sitting awake wondering whether it's time to sell, you're likely standing at the question that separates two paths: keep pushing, or pursue an M&A exit. An M&A exit, merging with or being acquired by another company, isn't just a financial transaction. It's the culmination of years spent building something from nothing, and getting the timing right matters almost as much as getting the price right. Wait too long...",
    content: "Full guide on identifying M&A exit readiness, market conditions, founder burnout indicators, and valuation windows for tech and mid-market enterprises.",
    publishedAt: "July 24, 2026",
    author: {
      name: "Rajesh Gade",
      role: "CEO & Managing Director"
    },
    category: "Exit Strategy",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b2",
    slug: "ma-and-fundraising-advisory-services-india",
    title: "M&A and Fundraising Advisory Services in India",
    excerpt: "How M&A and Fundraising Advisory Can Help Your Business Scale Smarter. Most founders don't think about M&A and fundraising advisory until they're already stuck trying to raise a round with a messy cap table, or fielding an acquisition offer they don't know how to negotiate. That's usually too late to get the best outcome. Whether you're raising capital, selling your company, or acquiring another one, professional M&A and fundraising advisory changes how the deal actually unfolds. Advisors bring negotiation leverage and execution discipline that most operating teams don't have in-house.",
    content: "Detailed breakdown of M&A advisory mandates in India, fundraising structuring, cap table cleanups, and partner-led deal execution.",
    publishedAt: "July 18, 2026",
    author: {
      name: "Aroop Cherian",
      role: "Partner, Valuation & M&A"
    },
    category: "Fundraising",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b3",
    slug: "ma-trends-every-business-owner-should-know",
    title: "M&A Trends Every Business Owner Should Know | Exigo Consulting",
    excerpt: "M&A Trends Every Business Owner Should Know. Mergers and acquisitions used to be something only large corporations worried about. That's no longer true. Mid-sized companies, family businesses, and even fast-growing startups are now active participants in dealmaking, which makes understanding current M&A trends this become essential for any owner thinking about growth, succession, or an eventual exit. Markets shift, buyer appetite changes, and the rules of a good deal evolve year to year.",
    content: "Analysis of 2026 M&A market multiples, strategic buyer trends, cross-border rollups, and valuation drivers across technology and services.",
    publishedAt: "July 10, 2026",
    author: {
      name: "Arindam Chakraborty",
      role: "Strategic Advisor"
    },
    category: "Market Trends",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b4",
    slug: "common-challenges-in-mergers-and-acquisitions",
    title: "Common Challenges in Mergers and Acquisitions",
    excerpt: "Common Challenges in Mergers and Acquisitions. India has become one of the most active M&A markets in Asia. Dealmaking is no longer the preserve of large corporations; mid-market businesses, startups, and family enterprises are all in the mix. And yet, for every transaction that closes cleanly, several stumble not because the rationale was flawed, but because execution was mismanaged. M&A challenges in India are layered and often invisible until it's too late to course-correct.",
    content: "Practical solutions for regulatory compliance, post-merger integration friction, culture misalignments, and valuation disputes.",
    publishedAt: "June 29, 2026",
    author: {
      name: "P.V. Aruna Kumari",
      role: "Legal & Regulatory Advisor"
    },
    category: "M&A Execution",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b5",
    slug: "how-investors-evaluate-companies-before-funding",
    title: "How Investors Evaluate Companies Before Funding",
    excerpt: "How Investors Evaluate Companies Before Funding. Raising capital is one of the most important milestones in a company's growth journey. However, securing investment depends not only on presenting a strong business idea; investors carefully examine multiple aspects of a business before making a funding decision. Understanding how investors evaluate companies before funding can help businesses prepare effectively and improve their chances of attracting the right investment.",
    content: "Inside investor diligence checklists: unit economics, ARR sustainability, customer retention metrics, and legal IP ownership.",
    publishedAt: "June 15, 2026",
    author: {
      name: "Pavan Kumar Bhattiprolu",
      role: "Corporate Finance Advisor"
    },
    category: "Fundraising",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b6",
    slug: "private-equity-vs-strategic-buyers",
    title: "Private Equity vs Strategic Buyers: Who Should You Sell Your Business To?",
    excerpt: "Private Equity vs Strategic Buyers. If you are a business owner planning an exit, one of the most consequential decisions you will face is choosing the right type of buyer. In India's rapidly evolving M&A landscape, two dominant buyer categories compete for quality businesses: Private Equity (PE) firms and Strategic Buyers. While both can offer attractive valuations, the similarities largely end there.",
    content: "Comparing PE buyout models vs strategic synergy acquirers: earnouts, rollover equity, operational autonomy, and culture integration.",
    publishedAt: "May 27, 2026",
    author: {
      name: "Rajesh Gade",
      role: "CEO & Managing Director"
    },
    category: "Strategic Advisory",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b7",
    slug: "ma-in-indias-tech-sector-2026",
    title: "M&A in India's Tech Sector 2026: Opportunities and Challenges",
    excerpt: "India's technology sector has emerged as one of the most active arenas for mergers and acquisitions in the country. Second only to financial services in M&A deal volume, the tech sector in India is witnessing a convergence of factors: digital transformation, abundant capital, a maturing startup ecosystem, and cross-border strategic interest that are reshaping how businesses grow and consolidate.",
    content: "Tech M&A report on AI scaleups, SaaS consolidation, cross-border acqui-hires, and institutional capital inflows in India.",
    publishedAt: "May 10, 2026",
    author: {
      name: "Pavan Susarla",
      role: "Talent & Growth Advisor"
    },
    category: "Tech M&A",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b8",
    slug: "post-merger-integration-strategy-india",
    title: "Post-Merger Integration Strategy India | Exigo Consulting",
    excerpt: "When two companies decide to merge or one buys another, everyone focuses on getting the deal done. Lawyers work long hours. Teams prepare detailed reports. Numbers are checked again and again. And when the deal finally closes, people celebrate, but that is actually when the hardest work begins. Post-merger Integration (PMI) is the process of actually joining two companies together after the deal is signed.",
    content: "Blueprint for successful post-merger integration in India: 100-day execution roadmap, tech harmonization, and leadership retention.",
    publishedAt: "April 22, 2026",
    author: {
      name: "Arindam Chakraborty",
      role: "Strategic Advisor"
    },
    category: "Integration",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
  }
];
