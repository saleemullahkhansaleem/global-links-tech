import { Button } from "@/components/ui/button";
import { DetailsHeroSection, Heading } from "@/components";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Careers() {
  const jobOpenings = [
    {
      id: 3,
      title: "Accountant",
      location: "Islamabad, Pakistan",
      requirements: [
        "Bachelor's degree in Accounting, Finance, or related field",
        "2+ years of experience in accounting or finance",
        "Proficiency in accounting software and MS Excel",
      ],
      label: "Accounting",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <DetailsHeroSection
        title="Careers"
        description="Join our team and help us shape the future of technology."
      />

      {/* Why Work With Us */}
      <WhyJoinUs />

      {/* Job Openings */}
      <section className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">
            Current <Heading>Job</Heading> Openings
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="p-8 border-l-4 border-primary rounded-r-lg bg-primary/5 hover:bg-primary/10 transition relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 h-2/3 w-auto text-9xl text-right font-extrabold uppercase text-primary/10">
                  {job.label}
                </div>
                <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                <p className="text-muted-foreground mb-4">{job.location}</p>
                <ul className="space-y-2 mb-6">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheckCircle className="text-primary mr-2" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
                {/* <Button className="w-full">Apply Now</Button> */}
                <p className="">
                  To apply: send your Resume on
                  <Button size='lg' className="" variant="link" asChild>
                    <a href="mailto:mexemas7@gmail.com">mexemas7@gmail.com</a>
                  </Button>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Don't See a Role for You? <Heading>Let’s Stay in Touch!</Heading>
          </h2>
          <p className="mb-6 text-lg">
            We're always on the lookout for talented individuals. If you're
            passionate about tech and innovation, drop us a line, and we'll
            notify you of future opportunities.
          </p>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact-us">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

// Define the WhyJoinUs component as it was originally
import { FaChartLine, FaLightbulb, FaBalanceScale } from "react-icons/fa";

function WhyJoinUs() {
  return (
    <section className="container mx-auto px-4 py-12 text-center">
      <h2 className="text-4xl font-bold mb-6">
        Why Work With <Heading>Global Links Technologies?</Heading>
      </h2>
      <p className="mb-12 text-muted-foreground max-w-3xl mx-auto">
        At Global Links Technologies, we foster innovation, creativity, and
        collaboration. We are committed to building a diverse, inclusive
        workplace where you can thrive and make a difference.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Growth Opportunities */}
        <div className="flex flex-col items-center p-8 border-t-4 border-primary rounded-b-lg bg-primary/5 hover:bg-primary/10 transition duration-300 relative overflow-hidden group">
          <FaChartLine className="absolute -right-4 -top-4 h-2/3 w-auto text-primary/10" />
          <div className="flex items-center justify-center mb-4 w-16 h-16 bg-primary/20">
            <FaChartLine className="text-primary mb-2" size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Growth Opportunities</h3>
          <p className="text-muted-foreground">
            We offer a path for continuous learning, development, and career
            growth in the ever-evolving tech industry.
          </p>
        </div>

        {/* Innovative Culture */}
        <div className="flex flex-col items-center p-8 border-t-4 border-primary rounded-b-lg bg-primary/5 hover:bg-primary/10 transition duration-300 relative overflow-hidden group">
          <FaLightbulb className="absolute -right-4 -top-4 h-2/3 w-auto text-primary/10" />
          <div className="flex items-center justify-center mb-4 w-16 h-16 bg-primary/20">
            <FaLightbulb className="text-primary mb-2" size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Innovative Culture</h3>
          <p className="text-muted-foreground">
            Work in an environment that encourages creativity and out-of-the-box
            thinking. We embrace innovative ideas to drive success.
          </p>
        </div>

        {/* Work-Life Balance */}
        <div className="flex flex-col items-center p-8 border-t-4 border-primary rounded-b-lg bg-primary/5 hover:bg-primary/10 transition duration-300 relative overflow-hidden group">
          <FaBalanceScale className="absolute -right-4 -top-4 h-2/3 w-auto text-primary/10" />
          <div className="flex items-center justify-center mb-4 w-16 h-16 bg-primary/20">
            <FaBalanceScale className="text-primary mb-2" size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Work-Life Balance</h3>
          <p className="text-muted-foreground">
            We prioritize work-life balance, ensuring you stay motivated and
            healthy while excelling in your career.
          </p>
        </div>
      </div>
    </section>
  );
}
