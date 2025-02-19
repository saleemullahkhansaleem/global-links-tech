import {
  AboutSection,
  DetailsHeroSection,
  Heading,
  SectionContainer,
} from "@/components";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="bg-background text-foreground">
          <Helmet>
            <title>About - Global Links Technologies</title>
            <meta
              name="description"
              content="Global Links Technologies provides cutting-edge technology solutions to businesses worldwide. From software development to consultancy, we help you achieve your digital transformation goals."
            />
          </Helmet>
      <DetailsHeroSection
        title="About Us"
        description="Innovating your business with cutting-edge technology solutions."
      />

      {/* Mission, Vision, and Values */}
      <section className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-6 text-center lg:text-left">
        <div className="bg-primary/5 border-t-4 border-primary rounded-b-lg p-8 hover:bg-primary/10 relative overflow-hidden">
          <div className="absolute -right-0 -bottom-12 h-2/3 w-auto text-8xl text-right font-extrabold uppercase text-primary/10">
            Mission
          </div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground">
            At Global Links Technologies, our mission is to provide innovative
            software solutions that help businesses excel in the digital world.
          </p>
        </div>
        <div className="bg-primary/5 border-t-4 border-primary rounded-b-lg p-8 hover:bg-primary/10 relative overflow-hidden">
          <div className="absolute -right-0 -bottom-12 h-2/3 w-auto text-8xl text-right font-extrabold uppercase text-primary/10">
            Vision
          </div>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-muted-foreground">
            We envision a future where businesses seamlessly integrate
            technology to achieve unmatched success and growth.
          </p>
        </div>
        <div className="bg-primary/5 border-t-4 border-primary rounded-b-lg p-8 hover:bg-primary/10 relative overflow-hidden">
          <div className="absolute -right-0 -bottom-12 h-2/3 w-auto text-8xl text-right font-extrabold uppercase text-primary/10">
            Values
          </div>
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-center lg:justify-start">
              <FaCheckCircle className="text-primary mr-2" />
              <span>Innovation</span>
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <FaCheckCircle className="text-primary mr-2" />
              <span>Integrity</span>
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <FaCheckCircle className="text-primary mr-2" />
              <span>Client Satisfaction</span>
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <FaCheckCircle className="text-primary mr-2" />
              <span>Excellence</span>
            </li>
          </ul>
        </div>
      </section>

      <AboutSection />

      {/* Our Story */}
      <SectionContainer
        id="about-section"
        title="Our"
        titleColor="Story"
        description="Global Links Technologies began with a vision to provide
              cutting-edge software solutions to businesses across the globe.
              With years of industry expertise, we’ve become a trusted partner
              for companies looking to innovate and succeed."
        className="relative max-w-7xl mx-auto"
      >
        <div className="max-w-4xl relative">
          <div className="absolute -right-0 -bottom-4 h-2/3 w-auto text-9xl text-right font-extrabold uppercase text-primary/10">
            Story
          </div>
          <p className="text-lg leading-relaxed">
            Since our founding, we have delivered world-class solutions that
            range from web and mobile app development to complex enterprise
            portals. Our approach is centered on understanding client needs and
            delivering custom, scalable solutions that drive success.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Today, we continue to push the boundaries of technology, helping
            businesses achieve their digital transformation goals through
            innovative solutions and unwavering commitment to excellence.
          </p>
        </div>
        <img
          src="/images/story.webp"
          alt="Our Journey"
          className="absolute right-0 bottom-0 h-[150%] object-cover md:ml-auto grayscale opacity-15"
        />
      </SectionContainer>

      {/* Call to Action */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to <Heading> Work with Us?</Heading>
          </h2>
          <p className="mb-6 text-lg">
            Let’s bring your ideas to life with our expert software development
            services.
          </p>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact-us">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
