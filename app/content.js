export const navItems = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Leadership", "/leadership"],
  ["AIF", "/aif"],
  ["Contact", "/contact"],
];

export const fund = {
  trust: "Roger Bravo Alternative Investment Fund",
  registration: "IN/AIF2/21-22/0878",
  intro:
    "Roger Bravo Alternative Investment Fund is a SEBI-registered Category II Alternative Investment Fund (AIF), bearing Registration No. IN/AIF2/21-22/0878. The Fund aims to provide investors with structured investment opportunities through professionally managed strategies, with a focus on disciplined investment evaluation, risk management, and long-term value creation.",
  schemesLead: "The Fund has currently floated following two schemes under it:",
  schemes: [
    { name: "Roger Bravo Progressive Fund" },
    { name: "Roger Bravo Secured Development Fund" },
  ],
};

export const fundFacts = [
  ["Trust name", fund.trust],
  ["Scheme name", fund.schemes.map((scheme) => scheme.name)],
  ["SEBI registration no.", fund.registration],
];

export const hero = {
  lines: ["Business and", "financial advisory."],
  lede:
    "Roger Bravo Advisors advises institutions and businesses on new ventures, capital and financial matters.",
  meta: ["Est. 2010", "India", "Scroll to discover"],
};

export const manifesto = {
  label: "Why Roger Bravo",
  eyebrow: "Your message, well received.",
  lead: "“Roger” acknowledges that we have listened. “Bravo” is the courage to deliver an exceptional outcome.",
  body: "Since 2010, Roger Bravo Advisors has helped institutions and businesses navigate new ventures, raise capital, manage financial crises, and open doors across industries and markets.",
};

export const vision =
  "Our vision is to strengthen our client business through discrete & bold initiatives designed with innovation within the framework of regulatory compliances.";

export const nameStory = [
  {
    word: "Roger",
    tone: "green",
    origin: "Received",
    body: "A term widely used circa 1940 in UK and US military communication to represent “R”, the first letter in received—used to acknowledge a message. Roger essentially implies that your message has been well received.",
  },
  {
    word: "Bravo",
    tone: "saffron",
    origin: "Bold",
    body: "Of Italian origin, meaning bold. In English, it is widely used to express pleasure when someone has done something exceptionally well.",
  },
];

export const brandMarks = {
  logo: "The green thumbs-up in Roger signifies our acknowledgement and understanding of your message. The saffron tick mark in Bravo reflects our courage and commitment to leverage our full potential, resources, and experience to deliver on every objective entrusted to us.",
  tagline: "सह वीर्यम् करवावहै",
  pronunciation: "Saha Viiryam Karavaavahai",
  taglineMeaning:
    "Part of an ancient Sanskrit shloka, meaning “May we work together with energy and vigour.” We aim to achieve synergy with our clients, working as part of their team.",
};

export const profile = {
  body: "Roger Bravo Advisors Pvt. Ltd. was incorporated in 2010 with the exclusive aim of providing strategic solutions and advisory to institutions and corporates on various issues, including setting up new ventures, fund raising, and legal and financial crisis management.",
  competenceLabel: "Core competence",
  competence: [
    "Identifying new business ventures for clients and undertaking due diligence on the background, financials and credentials of proposed partners.",
    "Creating opportunities for existing businesses by introducing them to new markets and unexplored territories, and promoting their brand and products.",
    "Maintaining liaison with government departments—the Reserve Bank of India, ministries of the Union and State Governments, credit institutions and law enforcement agencies—for statutory compliance, permissions and representation.",
    "Assistance and guidance in raising funds, including foreign direct investment and institutional loans, for clients with genuine projects in hand.",
    "Highlighting business potential and shaping public opinion through mass media to create a favourable business environment.",
    "Deliberating and strategising on legal matters and disputes with counsel, and handling court cases, both criminal and civil.",
    "Arbitration and mediation.",
    "Detection and investigation of fraud by insiders and outsiders affecting business interests and reputation.",
  ],
};

export const expertise = {
  label: "What we do",
  body: "Advice across business, finance and communications.",
};

export const services = [
  {
    slug: "business-advisory",
    title: "Business Advisory & Corporate Liaison",
    description:
      "New ventures, strategic alliances, B2B access, government liaison and statutory compliance—built around your business objectives.",
    detail: [
      "Infrastructure, marketing and service sectors have expanded rapidly over the past decade, in India and globally. Many MSMEs miss the opportunity because they cannot compete with the giants who win large projects. Our advice is simple: if you can’t beat them, join them. We use our networking and liaison expertise to secure sub-contracts, outsourced orders and after-sales maintenance contracts from large industrial and corporate houses.",
      "No business can thrive without adhering to government norms or evading legal compliances. We provide corporate consultancy and liaison services with law enforcement agencies including Union and State Government; land & revenue departments, ensuring timely permissions, regulatory filings, and compliance. We also assist in investigative and adjudication proceedings through comprehensive, transparent, and timely submissions, helping you navigate complex regulatory matters.",
    ],
    groups: [
      {
        label: "B2B networking",
        items: [
          "Sub-contracts and outsourced orders",
          "After-sales maintenance contracts",
          "New ventures and expansion plans",
          "Partner due diligence",
        ],
      },
      {
        label: "Statutory compliance",
        items: [
          "Government and regulatory liaison",
          "Permissions and filings",
          "Responses to investigation and adjudication",
        ],
      },
    ],
  },
  {
    slug: "fund-raising",
    title: "Fund Raising & Financial Advisory",
    description:
      "Debt syndication and equity funding—from deal structuring and valuation through investor meetings, negotiation and close.",
    detail: [
      "We facilitate tailored fundraising solutions through public and private sector banks, co-operative banks, NBFCs, Alternative Investment Funds (AIFs), and domestic and international financial institutions. Leveraging our institutional relationships and understanding of lender requirements, we connect businesses with suitable financing partners to structure and secure capital aligned with their financial needs and growth objectives.",
    ],
    groups: [
      {
        label: "Debt syndication",
        items: [
          "Project finance",
          "Working capital finance",
          "Corporate loans",
          "SME and trade finance",
          "Real estate finance",
          "Structured finance",
          "Acquisition finance",
          "External commercial borrowings",
          "Loan against property and shares",
          "Priority sector and warehouse receipt financing",
          "Commercial paper and private placement of NCDs",
        ],
      },
      {
        label: "Equity funding",
        items: [
          "Private equity placements",
          "Venture capital funding",
          "Private placements to institutional investors",
          "Angel investors",
          "Seed funds",
        ],
      },
      {
        label: "Scope of work",
        items: [
          "Identifying and approaching target investors",
          "Deal structuring",
          "Information memorandum and business plan",
          "Valuation",
          "Investor meetings with promoters and management",
          "Negotiating and closing the deal",
        ],
      },
    ],
  },
  {
    slug: "crisis-debt",
    title: "Crisis & Debt Management",
    description:
      "Clear-headed counsel for stressed situations, including refinancing, settlements, restructuring, ARC consultancy and promoter funding.",
    detail: [
      "When a business is under financial stress, the way forward has to be practical as well as compliant. We advise on debt refinancing and takeout financing, and we guide one-time settlements and corporate debt restructuring where a formal resolution with lenders is required. The work also covers ARC consultancy, promoter funding and stressed asset funding, together with legal advice on taxation and inquiries from government agencies, so the financial options and the regulatory position are considered together.",
    ],
    groups: [
      {
        label: "Services",
        items: [
          "Legal advice on taxation and government agency inquiries",
          "Debt refinancing",
          "Takeout financing",
          "One Time Settlement (OTS)",
          "Corporate Debt Restructuring (CDR)",
          "ARC consultancy",
          "Promoter funding",
          "Stressed asset funding",
        ],
      },
    ],
  },
  {
    slug: "litigation",
    title: "Litigation, Arbitration & Investigation",
    description:
      "Legal strategy, civil and criminal case coordination, international arbitration, mediation, forensic review and corporate fraud investigation.",
    detail: [
      "Litigation is an avoidable part of modern business. Not every dispute has one side right and the other wrong; sometimes circumstances demand a solution that is just and acceptable to all, reached through arbitration or legal suits. With our team of legal experts, we guide you through deliberation and strategy with counsel, and handle court cases, both criminal and civil.",
      "We partner with India Law Alliance, a law firm with experienced lawyers and senior counsel, to provide legal remedies under one roof. Our Managing Director has been appointed as arbitrator in several international arbitration matters involving Indian and foreign companies.",
    ],
    groups: [
      {
        label: "Legal",
        items: ["Dispute strategy with counsel", "Civil and criminal cases", "Arbitration and mediation"],
      },
      {
        label: "Investigation",
        items: [
          "Fraud detection by insiders and outsiders",
          "Forensic review",
          "IT security and discreet anti-espionage checks",
        ],
      },
    ],
  },
  {
    slug: "brand-media",
    title: "Brand Promotion & Media Management",
    description:
      "Perception management and communications strategies aligned with your growth plans, stakeholders and operating environment.",
    detail: [
      "For any business, the first thing that matters is public perception. Our perception management and public relations team creates a favourable operating environment for clients across diverse sectors, with advisory customised to each client’s business and growth plans.",
    ],
    groups: [
      {
        label: "Service portfolio",
        items: [
          "Public relations and media advisory",
          "Corporate and marketing communications",
          "Issue management and crisis handling",
          "Stakeholder strategy and implementation",
          "Event strategy and planning",
        ],
      },
    ],
  },
];

export const industries = [
  ["Convergence Telecom", ""],
  ["Metals", ""],
  ["Natural Resources", "Mining, oil & gas"],
  ["Infrastructure", "Power, roads, ports"],
  ["Logistics", ""],
  ["Textiles & Fashion", ""],
  ["Food, Beverages & Restaurants", ""],
  ["Hospitality", ""],
  ["Chemicals", ""],
  ["Healthcare & Pharmaceuticals", ""],
  ["Finance", ""],
  ["Aviation", ""],
  ["Technology", ""],
  ["Real Estate", ""],
  ["Retail", ""],
  ["Engineering", ""],
];

export const leaders = [
  {
    id: "rajesh-bakshi",
    name: "Rajesh Bakshi",
    role: "Managing Director",
    image: "/assets/rajesh-bakshi.webp",
    width: 580,
    height: 980,
    bio: "A seasoned professional with over 37 years of experience, including service with the Ministry of Finance and subsequent senior management roles in a leading corporate house. He brings extensive expertise in law enforcement, corporate affairs, government liaison, vigilance, investigations, and legal and regulatory compliance, with additional experience in handling international arbitration matters and complex legal compliance issues.",
  },
  {
    id: "mayank-nandan",
    name: "Mayank Nandan",
    role: "Executive Director",
    image: "/assets/mayank-nandan.webp",
    width: 413,
    height: 531,
    bio: "A professional with over 18 years of experience in investment banking and financial services, having worked with leading institutions such as Reliance Capital, HDFC Bank, and Axis Bank. His expertise spans debt syndication, project finance, structured finance, and financial crisis management. He holds an MBA in Marketing and a Bachelor of Laws (LL.B.), combining financial acumen with legal and commercial expertise.",
  },
  {
    id: "anupam-dighe",
    name: "Anupam Dighe",
    role: "Managing Partner, India Law Alliance",
    image: "/assets/anupam-dighe.webp",
    width: 900,
    height: 1031,
    bio: "Managing Partner of India Law Alliance, the firm we work with on litigation and arbitration. Advocate of the Bombay High Court and Solicitor of England & Wales, focused on commercial disputes and indirect tax.",
  },
];

export const leadershipIntro = {
  eyebrow: "Senior counsel, direct involvement",
  title: "The people who lead the firm.",
};

export const approach = {
  label: "How we work",
  eyebrow: "सह वीर्यम् करवावहै",
  steps: [
    ["Listen", "Understand the context, the people involved, and the matter itself."],
    ["Analyse", "Review the facts, the risks, and the options."],
    ["Plan", "Set out a practical path, including the regulatory points."],
    ["Carry out", "Work through the agreed steps and keep the client informed."],
  ],
};

export const contactCopy = {
  eyebrow: "Let’s talk",
  lines: ["Write to the firm."],
  company: "Roger Bravo Advisors Private Limited",
  cin: "U74900MH2010PTC208563",
  email: "info@rogerbravo.com",
  phone: "+91 22 79632312",
  phoneHref: "tel:+912279632312",
  officeLabel: "India office",
  address: ["Office 113, Inspire Building,", "Bharat Nagar, BKC, Mumbai 400051"],
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=Inspire+Building+Bharat+Nagar+BKC+Mumbai+400051",
  mapEmbed:
    "https://maps.google.com/maps?q=Inspire+Building+Bharat+Nagar+BKC+Mumbai+400051&z=16&output=embed",
  presence: "India",
};

export const disclosures = [
  {
    category: "Investor Charter",
    documents: [{ title: "Investor Charter", file: "/documents/investor-charter.pdf" }],
  },
  {
    category: "Grievance Redressal",
    documents: [
      { title: "Grievance Redressal Mechanism", file: "/documents/grievance-redressal-mechanism.pdf" },
    ],
  },
  {
    category: "Complaints Data",
    documents: [{ title: "Investor Complaints Data", file: "/documents/investor-complaints-data.pdf" }],
  },
];
