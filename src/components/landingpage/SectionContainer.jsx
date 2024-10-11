import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Heading } from "..";

export default function SectionContainer({
  children,
  id = "",
  title = "",
  titleColor = "",
  description = "",
  btnTxt,
  btnUrl = "",
  bgImage,
  className = "",
  bg = "",
  ...props
}) {
  return (
    <section
      {...props}
      id={id}
      className={`w-full py-8 md:py-12 px-4 md:px-6 transition-colors duration-300 relative ${bg}`}
    >
      {bgImage && (
        <img
          src={bgImage}
          alt="banner image"
          className="w-full h-full object-cover absolute inset-0 opacity-20"
        />
      )}
      <div className="container mx-auto">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className={`max-w-3xl ${btnTxt ? "" : "mx-auto text-center"}`}>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              {title + " "}
              <Heading>{titleColor}</Heading>
            </h2>
            <p className="text-muted-foreground">{description}</p>
          </div>
          {btnTxt && (
            <Button size="lg" variant="outline" asChild>
              <Link to={btnUrl}>{btnTxt}</Link>
            </Button>
          )}
        </div>
        <div className={className}>{children}</div>
      </div>
    </section>
  );
}
