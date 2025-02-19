import { Heading } from "@/components";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";

export default function ServicesLayout() {
  return (
    <>
      <Helmet>
        <title>Services - Global Links Technologies</title>
        <meta
          name="description"
          content="Global Links Technologies provides cutting-edge technology solutions to businesses worldwide. From software development to consultancy, we help you achieve your digital transformation goals."
        />
      </Helmet>
      <Outlet />

      {/* Call to Action Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to <Heading>Elevate Your Business?</Heading>
          </h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Get in touch with us to discuss how we can help take your business
            to the next level with our innovative solutions.
          </p>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact-us">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
