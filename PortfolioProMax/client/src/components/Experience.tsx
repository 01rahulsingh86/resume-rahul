import TimelineItem from "./TimelineItem";

export default function Experience() {
  const experiences = [
    {
      title: "Engineering Leader - TPM/QA",
      company: "TikTok Inc",
      location: "Bellevue, WA",
      period: "Nov 2023 – Present",
      responsibilities: [
        "Led global Technical Program Management (TPM) efforts for TikTok's Data Analytics Platform, driving cross-functional program execution for Seller, Creator Partner, and Brand Portals (serving 350K+ Weekly Active Users).",
        "Drove end-to-end program execution for TikTok Data Analytics Team of Seller, Creator Partner, and Brand Portals, ensuring seamless feature releases for US & UK markets.",
        "Spearheaded data pipeline quality initiatives, managing real-time vs. offline data pipelines (~100TB/day) and reducing data quality issues by 30% through robust testing and monitoring.",
        "Implemented Agile frameworks for a 40-member team, improving sprint velocity by 25% and accelerating time-to-market by 10%.",
        "Defined and aligned OKRs, ensuring 100% roadmap milestone achievement across multiple global teams.",
        "Orchestrated roadmap planning and executive stakeholder meetings, driving 20% improvement in feature delivery QoQ through process standardization."
      ],
    },
    {
      title: "Manager",
      company: "Indeed",
      location: "Austin, TX",
      period: "Dec 2022 – Nov 2023",
      responsibilities: [
        "Optimized CI/CD pipelines, implementing Push-on-Green workflows that reduced manual testing by 50% and accelerated feature rollouts by 30%.",
        "Led stakeholder communications across engineering, analytics, and business teams, ensuring seamless alignment on strategic initiatives."
      ],
    },
    {
      title: "Staff Engineer",
      company: "Visa",
      location: "Austin, TX",
      period: "Aug 2018 – Dec 2022",
      responsibilities: [
        "Spearheaded SOAP-to-JSON API migration, improving translation accuracy to 99.9% for 1M+ API requests/day across 100+ merchants.",
        "Delivered high-accuracy BIN Lookup service, processing 500K+ daily validation requests, improving latency by 20%, and supporting 50+ global payment partners.",
        "Led EMV certification & transaction validation, ensuring Google Pay & Apple Pay compliance across global networks.",
        "Managed payment gateway certification across 10+ data centers, ensuring 1M+ transactions/day with a 99.95% deployment success rate.",
        "Partnered with DevOps & release teams, achieving 99.95% deployment success, conducting failover testing, and reducing downtime by 30% in critical releases."
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">Professional Experience</h2>

        <div className="relative pl-8 sm:pl-32 ml-0 sm:ml-12">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              title={experience.title}
              company={experience.company}
              location={experience.location}
              period={experience.period}
              responsibilities={experience.responsibilities}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
