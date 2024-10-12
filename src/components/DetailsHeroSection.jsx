import { Heading } from ".";

export default function DetailsHeroSection({ title = "", description = "" }) {
  return (
    <section className="relative h-[400px] flex items-center justify-center dotted-bg bg-primary/10 p-4">
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background/90"></div>
      <h1 className="absolute -bottom-8 h-2/3 w-auto text-9xl text-right font-extrabold uppercase text-primary/10 text-nowrap">
        {title}
      </h1>
      <div className="relative text-center z-10 text-foreground max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <Heading>{title}</Heading>
        </h1>
        <p className="mt-4 text-lg">{description}</p>
      </div>
    </section>
  );
}
