import {
  AboutSection,
  DetailsHeroSection,
  Heading,
  TeamSection,
  Testimonial,
} from "@/components";
import { Button } from "@/components/ui/button";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="bg-background text-foreground">
      <DetailsHeroSection
        title="About Us"
        description="Innovating your business with cutting-edge technology solutions."
      />

      {/* Mission, Vision, and Values */}
      <section className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-6 text-center lg:text-left">
        <div className="bg-primary/10 p-8 border border-primary/20 hover:bg-primary/20">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground">
            At Global Links Technologies, our mission is to provide innovative
            software solutions that help businesses excel in the digital world.
          </p>
        </div>
        <div className="bg-primary/10 p-8 border border-primary/20 hover:bg-primary/20">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-muted-foreground">
            We envision a future where businesses seamlessly integrate
            technology to achieve unmatched success and growth.
          </p>
        </div>
        <div className="bg-primary/10 p-8 border border-primary/20 hover:bg-primary/20">
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
      <section className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-4xl font-bold">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Global Links Technologies began with a vision to provide
              cutting-edge software solutions to businesses across the globe.
              With years of industry expertise, we’ve become a trusted partner
              for companies looking to innovate and succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src="/images/story.webp"
              alt="Our Journey"
              className="h-full object-cover"
            />
            <div>
              <p className="text-lg leading-relaxed">
                Since our founding, we have delivered world-class solutions that
                range from web and mobile app development to complex enterprise
                portals. Our approach is centered on understanding client needs
                and delivering custom, scalable solutions that drive success.
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                Today, we continue to push the boundaries of technology, helping
                businesses achieve their digital transformation goals through
                innovative solutions and unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />
      <Testimonial />

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
