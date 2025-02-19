import React from "react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center text-foreground">
      <Helmet>
        <title>404 Not Faound - Global Links Technologies</title>
        <meta
          name="description"
          content="Global Links Technologies provides cutting-edge technology solutions to businesses worldwide. From software development to consultancy, we help you achieve your digital transformation goals."
        />
      </Helmet>
      <div className="text-center mb-6">
        <h1 className="text-9xl font-extrabold text-primary animate-pulse">
          <Heading>404</Heading>
        </h1>
        <h2 className="text-4xl font-semibold mt-4">Oops! Page Not Found</h2>
        <p className="text-lg mt-2 text-muted-foreground">
          The page you are looking for doesn’t exist or has been moved.
        </p>
      </div>
      <Button
        size="lg"
        className="bg-primary hover:bg-primary-dark text-white"
        asChild
      >
        <Link to="/">Go Back to Home</Link>
      </Button>
    </div>
  );
}
