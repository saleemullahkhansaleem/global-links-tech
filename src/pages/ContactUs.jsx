import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DetailsHeroSection, Heading } from "@/components";
import { Link } from "react-router-dom";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="bg-background text-foreground">
      <DetailsHeroSection
        title="Contact Us"
        description="We're here to help you achieve your business goals."
      />

      {/* Contact Information */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          <Heading> Get in Touch</Heading>
        </h2>
        <p className="mb-8 text-muted-foreground">
          Whether you have a question, feedback, or want to discuss a project,
          feel free to reach out to us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 border border-primary/20 bg-primary/10 hover:bg-primary/20 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">info@mhstechventures.com</p>
          </div>
          <div className="flex flex-col items-center p-6 border border-primary/20 bg-primary/10 hover:bg-primary/20 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground">+123 456 7890</p>
          </div>
          <div className="flex flex-col items-center p-6 border border-primary/20 bg-primary/10 hover:bg-primary/20 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-muted-foreground">
              123 Tech Avenue, Islamabad, Pakistan
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">
            <Heading> Send Us a Message</Heading>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary/10 border border-primary/20 focus:outline-none text-foreground"
                placeholder="Enter your name"
              />
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary/10 border border-primary/20 focus:outline-none text-foreground"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary/10 border border-primary/20 focus:outline-none text-foreground"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary/10 border border-primary/20 focus:outline-none text-foreground"
                placeholder="Enter subject"
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-primary/10 border border-primary/20 focus:outline-none text-foreground resize-none"
                placeholder="Type your message"
              ></textarea>
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        {/* Map Section */}
        <div className="flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.918096719671!2d72.87312821531578!3d33.68429578067724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df91915b135a5f%3A0x8003f9e9791e4ae0!2sMHS%20Tech%20Ventures!5e0!3m2!1sen!2s!4v1634271953722!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Let’s <Heading>Start a Project Together!</Heading>
          </h2>
          <p className="mb-6 text-lg">
            Reach out to us for any inquiries or to discuss your project ideas.
          </p>
          {/* <Button size="lg" variant="outline" asChild>
            <Link to="/contact-us">Contact Us Today</Link>
          </Button> */}
        </div>
      </section>
    </div>
  );
}
