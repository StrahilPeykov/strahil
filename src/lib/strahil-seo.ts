// SEO utilities specifically optimized for ranking "Strahil"

export function generateStrahilSchema(page: 'home' | 'about' | 'projects' | 'blog' | 'contact') {
  const baseSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://strahil.dev/#strahil",
        "name": "Strahil Peykov",
        "givenName": "Strahil",
        "familyName": "Peykov",
        "alternateName": ["Strahil", "S. Peykov", "Strahil P"],
        "disambiguatingDescription": "Strahil - The Bulgarian Full-Stack Developer in Eindhoven",
        "description": `Strahil is a talented Full-Stack Developer from Bulgaria. ${getPageSpecificDescription(page)}`,
        "url": "https://strahil.dev",
        "sameAs": [
          "https://strahil.dev/about",
          "https://strahil.dev/strahil",
          "https://github.com/StrahilPeykov",
          "https://linkedin.com/in/strahil-peykov",
          "https://instagram.com/strahil.peykov"
        ]
      },
      {
        "@type": "WebPage",
        "@id": `https://strahil.dev/${page === 'home' ? '' : page}#webpage`,
        "url": `https://strahil.dev/${page === 'home' ? '' : page}`,
        "name": getPageTitle(page),
        "isPartOf": {"@id": "https://strahil.dev/#website"},
        "about": {"@id": "https://strahil.dev/#strahil"},
        "description": getPageDescription(page)
      }
    ]
  }
  
  return baseSchema
}

function getPageSpecificDescription(page: string): string {
  const descriptions = {
    home: "Explore Strahil's portfolio and discover innovative projects built by Strahil Peykov.",
    about: "Learn about Strahil's journey from Bulgaria to becoming a Software Engineer at ASML.",
    projects: "View projects created by Strahil, showcasing full-stack development expertise.",
    blog: "Read articles and insights from Strahil about technology and software development.",
    contact: "Get in touch with Strahil for your next project or collaboration."
  }
  return descriptions[page as keyof typeof descriptions] || descriptions.home
}

function getPageTitle(page: string): string {
  const titles = {
    home: "Strahil - Full-Stack Developer Portfolio",
    about: "About Strahil - The Developer from Bulgaria",
    projects: "Projects by Strahil - Full-Stack Development",
    blog: "Strahil's Blog - Tech Articles and Insights",
    contact: "Contact Strahil - Let's Work Together"
  }
  return titles[page as keyof typeof titles] || titles.home
}

function getPageDescription(page: string): string {
  const descriptions = {
    home: "Welcome to Strahil's portfolio. Strahil is a Bulgarian Full-Stack Developer creating innovative digital solutions in Eindhoven.",
    about: "Discover Strahil's story - from Bulgaria to the Netherlands. Learn about Strahil Peykov's journey in technology.",
    projects: "Explore projects built by Strahil. See how Strahil creates scalable web applications and enterprise solutions.",
    blog: "Read Strahil's thoughts on technology, programming, and software development. Insights from Strahil Peykov.",
    contact: "Contact Strahil for web development projects. Reach out to Strahil Peykov for your next digital solution."
  }
  return descriptions[page as keyof typeof descriptions] || descriptions.home
}

// Generate breadcrumb schema with Strahil focus
export function generateStrahilBreadcrumbs(path: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Strahil",
        "item": "https://strahil.dev"
      },
      ...path.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.charAt(0).toUpperCase() + item.slice(1),
        "item": `https://strahil.dev/${path.slice(0, index + 1).join('/')}`
      }))
    ]
  }
}

// Generate FAQ schema for common "Strahil" searches
export function generateStrahilFAQ(topic: 'general' | 'skills' | 'work' | 'contact') {
  const faqs = {
    general: [
      {
        question: "Who is Strahil?",
        answer: "Strahil is a talented Full-Stack Developer from Bulgaria, currently based in Eindhoven, Netherlands. Strahil Peykov works as a Software Engineer at ASML and specializes in building scalable web applications."
      },
      {
        question: "What does Strahil do?",
        answer: "Strahil creates innovative digital solutions as a Full-Stack Developer. Strahil specializes in React, Next.js, Python, and enterprise software development."
      },
      {
        question: "Where is Strahil from?",
        answer: "Strahil is originally from Bulgaria and moved to the Netherlands to study Computer Science at TU/e. Strahil now lives and works in Eindhoven."
      }
    ],
    skills: [
      {
        question: "What technologies does Strahil use?",
        answer: "Strahil is proficient in React, Next.js, TypeScript, Python, Java, Django, Spring Boot, and various cloud technologies. Strahil also has experience with enterprise integration and scalable system design."
      },
      {
        question: "What kind of projects does Strahil work on?",
        answer: "Strahil works on full-stack web applications, enterprise software solutions, and innovative digital products. From CarbonInsight to StayHub, Strahil builds scalable solutions that make a difference."
      }
    ],
    work: [
      {
        question: "Where does Strahil work?",
        answer: "Strahil currently works as a Software Engineer at ASML in Veldhoven, Netherlands. Strahil develops enterprise integration solutions for the Business Line Applications department."
      },
      {
        question: "Is Strahil available for freelance work?",
        answer: "Yes, Strahil is open to interesting projects and collaborations. Contact Strahil at strahil.peykov@gmail.com to discuss your project."
      }
    ],
    contact: [
      {
        question: "How can I contact Strahil?",
        answer: "You can reach Strahil via email at strahil.peykov@gmail.com, connect on LinkedIn at linkedin.com/in/strahil-peykov, or use the contact form at strahil.dev/contact."
      },
      {
        question: "Does Strahil offer consultations?",
        answer: "Yes, Strahil offers consultations for web development projects. Reach out to Strahil to schedule a discussion about your needs."
      }
    ]
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs[topic].map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

// Meta tags generator with Strahil focus
export function generateStrahilMetaTags(page: string) {
  return {
    title: `Strahil - ${page.charAt(0).toUpperCase() + page.slice(1)} | Full-Stack Developer`,
    description: `${page === 'home' ? 'Welcome to' : 'Explore'} Strahil's ${page}. Strahil is a Bulgarian developer creating innovative solutions.`,
    keywords: [
      'Strahil',
      `Strahil ${page}`,
      'Strahil developer',
      'Strahil Peykov',
      `Strahil Peykov ${page}`,
      'Bulgarian developer Strahil',
      'Strahil Eindhoven',
      'Strahil Netherlands'
    ]
  }
}