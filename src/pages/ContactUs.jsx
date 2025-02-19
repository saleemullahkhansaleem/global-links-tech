import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DetailsHeroSection, Heading } from "@/components";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCheck,
} from "react-icons/fa";
import api from "@/http/api";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    api
      .post("contact-us", { ...formData, domain_key: 5 })
      .then((response) => {
        if (response.success) {
          setSubmitted(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setError("");
        } else {
          setError(
            response.message ||
              "There was an issue with your submission. Please try again."
          );
        }
      })
      .catch((error) => {
        console.error(error);

        setError(error?.message || "An error occurred. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Contact - Global Links Technologies</title>
        <meta
          name="description"
          content="Global Links Technologies provides cutting-edge technology solutions to businesses worldwide. From software development to consultancy, we help you achieve your digital transformation goals."
        />
      </Helmet>
      <DetailsHeroSection
        title="Contact Us"
        description="We're here to help you achieve your business goals."
      />

      <ContactInfo />

      {/* Call to Action */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Let’s <Heading>Start a Project Together!</Heading>
          </h2>
          <p className="mb-6 text-lg">
            Reach out to us for any inquiries or to discuss your project ideas.
          </p>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        {submitted ? (
          <div className="w-full max-w-lg m-auto flex flex-col items-center gap-4">
            <FaCheck size={60} className="text-green-500 mb-4" />
            <h1 className="text-2xl text-foreground">
              You message send successfully
            </h1>
            <Button variant="" asChild>
              <Link to="/">Go to Home</Link>
            </Button>
          </div>
        ) : (
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
                  className="w-full px-4 py-3 bg-primary/5 border-b border-primary focus:outline-none text-foreground"
                  placeholder="Enter your name"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary/5 border-b border-primary focus:outline-none text-foreground"
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
                  className="w-full px-4 py-3 bg-primary/5 border-b border-primary focus:outline-none text-foreground"
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
                  className="w-full px-4 py-3 bg-primary/5 border-b border-primary focus:outline-none text-foreground resize-none"
                  placeholder="Type your message"
                ></textarea>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : <>Send Message</>}
              </Button>
            </form>
          </div>
        )}

        {/* Map Section */}
        <div className="flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d829.7134294650209!2d73.0618233696377!3d33.71273391390278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfa2b4a3278d%3A0x34a59e63033052c2!2sAl-Malik%20Centre!5e0!3m2!1sen!2s!4v1729151538700!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

function ContactInfo() {
  return (
    <section className="container mx-auto px-4 py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">
        <Heading> Get in Touch</Heading>
      </h2>
      <p className="mb-8 text-muted-foreground">
        Whether you have a question, feedback, or want to discuss a project,
        feel free to reach out to us.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center p-6 border-t-4 border-primary rounded-b-lg bg-primary/5 hover:bg-primary/10 transition duration-300 relative overflow-hidden group">
          <FaEnvelope className="absolute -right-4 -top-4 h-2/3 w-auto text-primary/10" />
          <div className="flex items-center justify-center mb-4 w-16 h-16 bg-primary/20">
            <FaEnvelope className="text-primary mb-2" size={32} />{" "}
          </div>
          {/* Email Icon */}
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-muted-foreground">
            globallinkstechnologies2@gmail.com
          </p>
        </div>
        <div className="flex flex-col items-center p-6 border-t-4 border-primary rounded-b-lg bg-primary/5 hover:bg-primary/10 transition duration-300 relative overflow-hidden group">
          <FaPhoneAlt className="absolute -right-4 -top-4 h-2/3 w-auto text-primary/10" />
          <div className="flex items-center justify-center mb-4 w-16 h-16 bg-primary/20">
            <FaPhoneAlt className="text-primary mb-2" size={32} />{" "}
          </div>
          {/* Phone Icon */}
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-muted-foreground">+9251 8739 888</p>
        </div>
        <div className="flex flex-col items-center p-6 border-t-4 border-primary rounded-b-lg bg-primary/5 hover:bg-primary/10 transition duration-300 relative overflow-hidden group">
          <FaMapMarkerAlt className="absolute -right-4 -top-4 h-2/3 w-auto text-primary/10" />
          <div className="flex items-center justify-center mb-4 w-16 h-16 bg-primary/20">
            <FaMapMarkerAlt className="text-primary mb-2" size={32} />{" "}
          </div>
          {/* Address Icon */}
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p className="text-muted-foreground">
            Third Floor, Al-Malik Centre, 70-West, Jinnah Avenue, Blue Area,
            Islamabad.
          </p>
        </div>
      </div>
    </section>
  );
}
